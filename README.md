# IRAN SELECT

A multilingual catalogue and export-inquiry website for Iranian products, built with Next.js App Router, TypeScript, Tailwind CSS, next-intl, Prisma and PostgreSQL.

## Included

- Public pages in Persian (`fa`), English (`en`) and Arabic (`ar`)
- Product categories, database-backed product listing and product detail pages
- Persistent browser-side inquiry cart and inquiry submission API
- Contact form and WhatsApp handoff (after configuring a real number)
- Protected admin area: dashboard, product creation/deletion, inquiry list and settings overview
- Prisma schema and category seed data
- Password hashing with Node.js `scrypt` and signed, HTTP-only admin session cookies

## Requirements

- Node.js 20.11+ (Node 22 LTS recommended)
- PostgreSQL 14+
- npm

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set `DATABASE_URL`.

3. Generate an admin password hash (use a unique password of at least 12 characters):

   ```bash
   node scripts/hash-password.mjs "your-long-admin-password"
   ```

   Copy the output into `ADMIN_PASSWORD_HASH`. Set `ADMIN_EMAIL` and a random `ADMIN_SESSION_SECRET` (at least 32 characters). Never commit `.env`.

4. Configure `WHATSAPP_NUMBER` and `NEXT_PUBLIC_WHATSAPP_NUMBER` with the international number in digits only. If no number is configured, WhatsApp calls fall back to the contact page.

5. Generate Prisma Client, create tables and add the starter categories:

   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` (English default), or `/fa` and `/ar`.

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

Set `NODE_ENV=production`, use HTTPS, strong secrets and a managed PostgreSQL database in production.

## Admin

- Login: `/admin/login`
- After login: `/admin/dashboard`
- Admin routes and inquiry listing require a signed HTTP-only session cookie.
- Product management supports creating and deleting products. Editing existing product records is not implemented yet.
- The settings screen is currently a read-only overview; change the `Settings` row directly in the database until a settings editor is implemented.

## Data model and catalogue

The seed command creates five categories. It does not create fake product records. Add real product records to `Product` with localized JSON translations, category relation, images, specifications and packaging. Public catalogue pages only display active records.

Example translations shape:

```json
{
  "en": { "name": "Super Negin Saffron", "desc": "Premium Iranian saffron threads." },
  "fa": { "name": "زعفران سوپر نگین", "desc": "رشته‌های زعفران ممتاز ایرانی." },
  "ar": { "name": "زعفران سوبر نقين", "desc": "خيوط زعفران إيراني فاخر." }
}
```

## API

- `GET /api/products?category=saffron&q=negin&featured=true`
- `POST /api/inquiries` (validated public inquiry submission)
- `GET /api/inquiries` (admin session required)
- `GET /api/settings` (public, limited settings fields)
- `POST /api/admin/login`
- `POST /api/admin/logout`

## Notes and limitations

- This repository is a functional starter implementation, not a fully deployed export operation. Real product data, commercial terms, contact details, shipping policies, compliance documents, product imagery and destination availability must be supplied by the business.
- The 3D hero is decorative; on smaller screens it is hidden to preserve performance.
- Database-backed pages require a reachable PostgreSQL instance and a completed Prisma setup.
- In the preparation environment for this archive, npm dependency installation timed out. Therefore a full Next.js build, ESLint run, TypeScript typecheck and live PostgreSQL integration test were not completed here. Source syntax transpilation and project smoke checks did pass. Run all production checks above locally before deployment.
