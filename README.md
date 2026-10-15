# LCTC Foundation website

Next.js site for the Lake County Tech Campus Foundation. Program, event, school and contact details come from [techcampus.org](https://www.techcampus.org).

## Run it

```bash
npm install
cp .env.example .env.local   # set ADMIN_KEY
npm run dev                  # http://localhost:3000
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero slideshow, stats, member-school ticker, student aid, programs, events, donate |
| `/programs` | All programs with category filters |
| `/programs/[slug]` | One page per program, generated from the data |
| `/apply` | Four-step student grant application, plus outside scholarships |
| `/admin` | Reviewer dashboard: read applications, set status, export CSV (needs `ADMIN_KEY`) |

## Editing content

Everything lives in `lib/content.ts`. Lists have no fixed size: add a program, event, slide, member school or grant type and it shows up everywhere it belongs. Events whose date has passed are hidden automatically.

## Grant applications

- The form validates with the same rules in the browser and on the server (`lib/application.ts`).
- Drafts are saved in the student's browser so they can come back later.
- Submissions are stored in `data/applications.json` (git-ignored, because it holds student data).
- That file store works on a normal Node server (`npm run build && npm start`). Serverless hosts such as Vercel have a read-only filesystem, so swap the three functions in `lib/store.ts` for a database before deploying there.

## Donations

The donate dialog is a **demo checkout**: it accepts any amount (no upper limit) but charges nothing. Connect Stripe or another processor in `components/DonateModal.tsx` before going live.
