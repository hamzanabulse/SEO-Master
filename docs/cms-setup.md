# Sanity CMS Setup (Option A)

This project is wired to use Sanity as a headless CMS with an embedded Studio at `/studio`.

## 1) Install dependencies

Run these once in the project root:

```powershell
npm install sanity next-sanity @sanity/vision
```

If your network is slow, increase npm timeouts first:

```powershell
npm config set fetch-timeout 600000
npm config set fetch-retries 5
```

## 2) Create a Sanity project

Install the CLI if needed and initialize a project/dataset:

```powershell
npm install -g @sanity/cli
sanity login
sanity init --project <your-project-id> --dataset production
```

Alternatively, create a project at https://sanity.io/manage and grab the Project ID.

## 3) Configure environment variables

Copy `.env.local.example` to `.env.local` and fill these:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` = `production` (or your dataset)
- `NEXT_PUBLIC_SANITY_API_VERSION` = e.g. `2023-10-01`
- `SANITY_API_READ_TOKEN` (optional for server-side draft reads)
- `SANITY_REVALIDATE_SECRET` (optional to secure the webhook)

## 4) Start the app

```powershell
npm run dev
```

Open http://localhost:3000/studio to access the Studio. You’ll see three content types:
- Article
- FAQ
- Glossary Term

## 5) Set up on Vercel

Add the same env vars in your Vercel Project Settings → Environment Variables. Redeploy.

## 6) Webhook for ISR revalidation (optional)

Create a webhook in Sanity (Project → API → Webhooks):
- URL: `https://<your-domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>`
- Events: Create, Update, Delete
- Filter (optional): `!(_type match "system.**")`
- HTTP method: POST
- JSON body: Include document with `slug.current` and `_type`

On publish, the webhook will refresh affected pages.

## Notes
- Content rendering is not yet wired to fetch from Sanity on the public pages. Once you’ve added content, we can move selected routes (e.g., Knowledge Base) to source from Sanity using the provided `lib/sanity.client.ts` and queries in `lib/sanity.queries.ts`.
- You can customize schemas in `sanity/schemas/*` and rebuild.
