# Him Craft Studio website starter

## Requirements
- Node.js LTS
- Git
- GitHub account

## Run locally
```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build
```bash
npm run build
```

## Before launch
1. Check `src/config.js`: WhatsApp number, phone shown on the site and Instagram link.
2. Add or change products in the CMS (`/admin`) or in `public/data/products.json`. Photos live in `public/images/`.
4. Create the GitHub repository and configure Decap CMS authentication. The CMS login is not enabled until its secure OAuth configuration is completed.
5. Deploy the `dist` folder using Cloudflare Pages (build command: `npm run build`, output directory: `dist`).
