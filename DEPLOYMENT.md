# Deployment Checklist

This app is prepared for Render hosting with persistent disk storage.

## 1. Put Code On GitHub

Create a private GitHub repository and upload this project folder.

Do not upload:

- `.env.local`
- `.next`
- `node_modules`
- `public/uploads`
- `data/*.json`

These are already listed in `.gitignore`.

## 2. Create Render Service

Use Render Blueprint if possible:

1. Open Render.
2. Choose **New +**.
3. Choose **Blueprint**.
4. Connect the GitHub repository.
5. Render reads `render.yaml`.
6. Set required environment variables when Render asks.

If creating manually:

- Runtime: Node
- Build command: `npm ci && npm run build`
- Start command: `npm run start`
- Persistent disk mount path: `/opt/render/project/src/storage`
- Disk size: 1 GB minimum

## 3. Required Environment Variables

Set these on Render:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.hu
ADMIN_PASSWORD=use-a-strong-password
ADMIN_ACCESS_PATH=/admin/autofelvasarlas-privat-vezerlopult-2026
DATA_DIR=/opt/render/project/src/storage/data
UPLOAD_DIR=/opt/render/project/src/storage/uploads

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=autofelvasarlasb@gmail.com
SMTP_PASS=your-google-app-password-without-spaces
SMTP_FROM=autofelvasarlasb@gmail.com
```

## 4. DNS Records

After Render gives the app URL, add the custom domain in Render first.

Then set DNS:

```text
Type   Name   Value
A      @      216.24.57.1
CNAME  www    your-render-service.onrender.com
```

Remove conflicting old `A`, `AAAA`, `CNAME`, URL forwarding, or parked-domain records for `@` and `www`.

## 5. After DNS Works

Open:

- `https://yourdomain.hu`
- `https://www.yourdomain.hu`
- `https://yourdomain.hu/admin/autofelvasarlas-privat-vezerlopult-2026`

Then test:

- admin login
- saving settings
- seller inquiry
- photo upload
- email delivery status
- sitemap: `/sitemap.xml`
- robots: `/robots.txt`
