"""
Image cleaning script — HANDOVER.md §2 spec.
Usage: python scripts/clean_image.py <image_path> [<output_path>]
Detects grey-checker or solid-magenta background, flood-fills border to true
alpha, recenters object to ~80% of a square frame, resizes to 768px, saves.
"""
import sys
from collections import deque
from PIL import Image


def is_checker(r, g, b):
    lo, hi = min(r, g, b), max(r, g, b)
    return (hi - lo) <= 16 and lo >= 185


def is_magenta(r, g, b):
    return (r - g) >= 25 and (b - g) >= 25 and r >= 90 and b >= 90


def detect_bg(img_rgba, sample_size=200):
    """Sample border pixels to determine background type."""
    w, h = img_rgba.size
    pixels = img_rgba.load()
    checker_votes = 0
    magenta_votes = 0
    total = 0
    coords = []
    for x in range(0, w, max(1, w // sample_size)):
        coords += [(x, 0), (x, h - 1)]
    for y in range(0, h, max(1, h // sample_size)):
        coords += [(0, y), (w - 1, y)]
    for x, y in coords:
        r, g, b, a = pixels[x, y]
        if is_checker(r, g, b):
            checker_votes += 1
        elif is_magenta(r, g, b):
            magenta_votes += 1
        total += 1
    if checker_votes > total * 0.15:
        return "checker"
    if magenta_votes > total * 0.15:
        return "magenta"
    return None


def flood_fill_alpha(img_rgba, bg_type):
    """BFS flood-fill from all border pixels matching bg_type → alpha=0."""
    w, h = img_rgba.size
    pixels = img_rgba.load()
    visited = [[False] * h for _ in range(w)]
    queue = deque()

    def is_bg(r, g, b):
        if bg_type == "checker":
            return is_checker(r, g, b)
        return is_magenta(r, g, b)

    # Seed from all 4 borders
    for x in range(w):
        for y in [0, h - 1]:
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b) and not visited[x][y]:
                queue.append((x, y))
                visited[x][y] = True
    for y in range(h):
        for x in [0, w - 1]:
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b) and not visited[x][y]:
                queue.append((x, y))
                visited[x][y] = True

    while queue:
        cx, cy = queue.popleft()
        pixels[cx, cy] = (0, 0, 0, 0)
        for nx, ny in [(cx-1,cy),(cx+1,cy),(cx,cy-1),(cx,cy+1)]:
            if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny]:
                r, g, b, a = pixels[nx, ny]
                if is_bg(r, g, b):
                    visited[nx][ny] = True
                    queue.append((nx, ny))

    return img_rgba


def recenter_and_resize(img_rgba, target=768, fill_ratio=0.80):
    """Crop to bounding box of non-transparent pixels, pad to square, resize."""
    bbox = img_rgba.getbbox()
    if bbox is None:
        return img_rgba.resize((target, target), Image.LANCZOS)

    obj = img_rgba.crop(bbox)
    ow, oh = obj.size
    # Make square canvas sized so object fills fill_ratio
    canvas_side = int(max(ow, oh) / fill_ratio)
    canvas = Image.new("RGBA", (canvas_side, canvas_side), (0, 0, 0, 0))
    px = (canvas_side - ow) // 2
    py = (canvas_side - oh) // 2
    canvas.paste(obj, (px, py), obj)
    return canvas.resize((target, target), Image.LANCZOS)


def clean(src_path, dst_path=None):
    if dst_path is None:
        dst_path = src_path

    img = Image.open(src_path).convert("RGBA")
    bg = detect_bg(img)

    if bg is None:
        print(f"  {src_path}: no grey-checker or magenta border detected — saving as-is at 768px")
        img = recenter_and_resize(img)
    else:
        print(f"  {src_path}: detected bg={bg}, flood-filling...")
        img = flood_fill_alpha(img, bg)
        img = recenter_and_resize(img)

    img.save(dst_path, "PNG", optimize=True)
    print(f"  -> saved {dst_path}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/clean_image.py <path> [<out_path>]")
        sys.exit(1)
    clean(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
