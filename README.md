# NoteHub — Homework 8 (Next.js + Zustand)

An independent Next.js App Router application continuing the accepted homework 7 project.

## Local setup

1. `npm install`
2. Create `.env.local` in the project root:

   `NEXT_PUBLIC_NOTEHUB_TOKEN=your_notehub_token`

3. `npm run dev`, then visit http://localhost:3000
4. Check `npm run build` and `npm run lint` before publishing.

## Features

- Searchable, paginated notes filtered by tag; SSR and TanStack Query hydration
- Note details as a page or intercepted modal depending on navigation
- Separate `/notes/action/create` page with native HTML controls and React `formAction`
- Draft held in Zustand and persisted to localStorage (`notehub-draft`)
- Static/dynamic SEO and Open Graph metadata, Roboto via `next/font/google`

## Checks to perform before submitting

- Navigate to `/notes/filter/all`; switch tags and pages.
- Click **Create note +**; type a title and content; refresh — the draft must remain.
- Click Cancel; reopen — fields must still be filled.
- Submit; verify the new note appears in the **All notes** list and the draft clears.
- Click a note to open its modal; open the same URL directly to see a full page.
- Check metadata in page source for `/`, filters, notes and create page.

The .env.local file is ignored by Git. Configure the token separately in Vercel project Environment Variables. `NEXT_PUBLIC_` variables are included in client code; use only a token intended for this coursework.

The CSS in this archive is adapted from the previous homework, with styles for the new create page; the official GoIT `hw-08` stylesheet collection is linked in the assignment but was not downloadable during assembly.
