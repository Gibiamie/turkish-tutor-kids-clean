# RC9 Admin Architecture Specification

Status: architecture frozen. Implementation requires a separate owner-approved phase.

## 1. Approved route

- The admin entry route is `/_studio`.
- `/admin` is rejected.
- `/_studio` is a naming and visibility choice only. It is not an access-control mechanism.

## 2. Current GitHub Pages phase

GitHub Pages is a static hosting environment. Therefore:

- No real admin write system will be embedded in the public learner application.
- No frontend-only password or local passcode will be treated as admin protection.
- Admin lesson creation will not be implemented inside the public learner bundle.
- Content updates remain file/data based until a real backend is introduced.
- Normal learners must not see any admin link, button, menu or route hint.

## 3. Future backend phase

A future implementation may use Supabase or Firebase, but the final provider requires owner approval.

Required flow:

```text
/_studio
  -> authentication provider
  -> backend user record
  -> role check
  -> role == admin
  -> admin dashboard
```

If the visitor is not an approved admin:

- Do not show the admin panel.
- Do not expose publish controls.
- Prefer a not-found style response where the platform allows it.

## 4. Required access model

### Users

Required fields:

- `user_id`
- `email`
- `display_name`
- `role`: `student`, `parent`, `admin`
- `selected_language`
- `app_mode`
- `created_at`

Critical rule:

- The admin role must be stored and checked on the backend.
- The browser must not be trusted to grant admin rights.

## 5. Content data model

### Topics

- `topic_id`
- `topic_title_en`
- `topic_title_id`
- `topic_type`
- `topic_order`
- `is_active`
- `is_locked`
- `target_mode`
- `created_by`
- `created_at`

### Lessons

- `lesson_id`
- `topic_id`
- `lesson_title_en`
- `lesson_title_id`
- `lesson_order`
- `lesson_type`
- `is_active`
- `qa_status`: Draft, Review, Approved, Blocked
- `created_by`
- `created_at`

### Lesson items

- `item_id`
- `lesson_id`
- `turkish_text`
- `meaning_en`
- `meaning_id`
- `sound_bridge_en`
- `sound_bridge_id`
- `audio_file`
- `image_file`
- `answer_parts`
- `wrong_options`
- `final_answer`
- `show_answer_before_solve`
- `qa_status`

Critical rule:

- `show_answer_before_solve` must remain false.

### Audio QA

- `audio_id`
- `item_id`
- `audio_file`
- `uploaded`
- `human_approved`
- `approved_by`
- `approval_date`
- `qa_note`
- `status`: Pending, Approved, Blocked

Critical rule:

- Content cannot be published unless `human_approved = true`.

## 6. Admin screens

Future `/_studio` screens may include:

- Dashboard
- Topics
- Lessons
- Lesson Items
- Audio QA
- Image Assets
- Publish Queue
- QA Checklist

Every screen must follow the project constitution and release gate.

## 7. Publish workflow

Required workflow:

```text
Draft
  -> QA Review
  -> Audio Approved
  -> Pedagogy Approved
  -> Published
```

Publish must remain blocked unless:

- Turkish spelling is correct.
- English meaning exists.
- Indonesian meaning exists.
- EN and ID screens remain separate.
- Audio exists.
- Audio is human-approved.
- Final answer is not exposed before solving.
- Wrong options are pedagogically appropriate.
- Kids and Adult text are appropriate for their modes.
- Release gate passes.

## 8. Learner visibility

Normal learners must not see:

- Admin buttons
- Admin links
- `/_studio` route hints
- Content editing controls
- Publish controls
- Internal QA controls
- Admin role information

## 9. Implementation gate

Before any admin code is added:

1. Owner approves the backend provider.
2. Authentication architecture is documented.
3. Backend role policy is documented.
4. Database schema is reviewed.
5. Publish workflow is reviewed.
6. Zero-cost constraints are rechecked.
7. The public learner bundle and admin bundle separation is defined.
8. The project constitution and release gate are applied.

Until those steps are complete, this file is the frozen architecture specification and no insecure admin shortcut may be added.