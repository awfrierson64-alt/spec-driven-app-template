# Spec-Driven Web App Template (Beginner Session)

This template helps you practice guiding an AI coding agent in a more rigorous way.
Instead of asking for code with one prompt, you will first define what the app should do in `specification.md`, then ask AI to implement that plan.

In this short session, your goal is to adapt this starter app into your own idea while keeping the same overall app shape.

## 1) Intent of the exercise

By the end of ~30 minutes, you should be able to:

- Clone and run a starter web app
- Rewrite `specification.md` for your original idea
- Ask an AI agent to update the app based on your spec
- Evaluate whether the generated prototype matches your intent
- Revert or refine changes when needed

Why this matters:

- You learn to turn vague ideas into clear requirements
- You practice controlling AI output through structure, not guesswork
- You build a working prototype faster and more intentionally

## 2) Very basic template structure

This project is a small Vue 3 single-page app (SPA) with hash routes.

- Home page: `#/`
- Collection page: `#/items`
- Item detail page: `#/items/:id`
- About page: `#/about`

Key files:

- `index.html` loads Vue, Vue Router, PapaParse, Bootstrap
- `app.js` defines routes and loads `items-template.csv`
- `components/` contains one component per page + navbar
- `specification.md` is your requirements document
- `items-template.csv` is the starter data source

Current flow:

1. App loads CSV data from `items-template.csv`
2. Collection page renders one card per data row
3. Clicking a card opens item detail view

## 3) Preview the template app first

Before editing anything, run the app so you understand the baseline behavior.

1. Open `index.html` with Live Server

2. Click through Home, Items, Item Detail, and About so you know the basic structure you want to work with and preserve.

## 4) Update specification.md file for your original idea

### Keep the shape, change the theme/content

For this exercise, keep these core constraints:

- Keep the same 4 routes/pages
- Keep the list → detail interaction pattern
- Keep CSV-based data for the first prototype

Change these parts to match your idea:

- App name and description
- User stories
- Field meanings/content
- Wording, branding, and visual style direction

Good idea examples:

- Study spots directory
- Local food guide
- Indie games catalog
- Campus clubs explorer
- Book recommendations list

### Fast editing checklist (10-15 min)

In `specification.md`, update:

1. Title and app description
2. Story 1 (highest priority user task)
3. Story 2 (helpful secondary task)
4. Functional requirements (what must be visible/working)
5. Key data shape (fields for each item)
6. Success criteria (how you will judge if it works)
7. Assumptions and constraints

Tip: write short, concrete sentences about observable behavior.

Instead of: "The app should be cool"
Write: "The collection page shows at least 8 cards with name, category, and thumbnail image"

## 5) Prompt the AI agent to implement your spec

After updating `specification.md`, ask your AI coding assistant to apply it.

Example prompt:

"Read `specification.md` and update this template app to match it. Keep the existing route structure (`/`, `/items`, `/items/:id`, `/about`) and CSV-driven data approach. Update components, copy, and styling to fit the new concept. Keep changes beginner-friendly and explain what you changed."

If the first result is off, try short follow-up prompts like these:

- "Make the collection cards easier to read. Add more space and bigger headings."
- "On the detail page, make location and category easier to notice."
- "Update `app.js` so the data fields match my updated CSV columns."

## 6) Evaluate results + undo/adapt edits

### Quick evaluation checklist

- Does each route load and show expected content?
- Does collection → detail navigation work?
- Does the app handle missing data safely?
- Does the UI match your spec tone and target audience?
- Do success criteria in `specification.md` pass?

### Undo or refine changes

If something is broken or not aligned with your vision, you can:
- Guide the AI to fix it with more specific prompts
- Manually edit the code to revert or adjust changes
- Use "Undo edit" from the chat options if the AI made a large unwanted change
- Revert to checkpoint in chat history and try a different prompt approach

Best practice:

- Iterate in small steps
- Re-run the app after each meaningful change
- Keep improving your spec when AI output is not aligned

---

## Suggested 30-minute timeline

- 0-5 min: Clone + run template, click through all pages
- 5-15 min: Rewrite `specification.md` for your idea
- 15-25 min: Prompt AI to implement spec and review output
- 25-30 min: Test routes, refine prompt, revert/fix weak spots

You are not trying to ship a perfect product. You are practicing spec-driven collaboration with AI.
