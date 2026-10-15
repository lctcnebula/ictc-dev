# LCTC Foundation website

Front-end only Next.js site for the Lake County Tech Campus Foundation, hosted on Vercel. No API routes, no database, no environment variables. Program, event, school and contact details come from [techcampus.org](https://www.techcampus.org).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy (Vercel)

Import the GitHub repo in Vercel. It detects Next.js automatically: no settings or environment variables needed. Every push to `main` redeploys.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero slideshow, stats, member-school ticker, student aid, programs, events, donate |
| `/programs` | All programs with category filters |
| `/programs/[slug]` | One page per program, generated from the data |
| `/apply` | Four-step student grant application, plus outside scholarships |

## Editing content

Everything lives in `lib/content.ts`. Lists have no fixed size: add a program, event, slide, member school or grant type and it shows up everywhere it belongs. Past events are hidden automatically in the visitor's browser, so no rebuild is needed when a date passes.

## Grant applications

Everything happens in the student's browser:

- The form checks every field before it can be finished (`lib/application.ts`).
- Progress saves on the student's device, so they can come back later.
- At the end the student gets a confirmation number and can **email the application to the Foundation** (opens their email app with everything filled in, addressed to the `email` in `lib/content.ts`), download a text copy, or print it.

## Donations

The donate dialog is a **demo checkout**: it accepts any amount (no upper limit) but charges nothing. To take real gifts, point the button at a hosted payment page (Stripe Payment Links, PayPal, Givebutter, etc.) in `components/DonateModal.tsx`; those need no server either.
