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
1. Replace `public/images/logo.png` with the supplied brand logo (already included).
2. Add your own photos: `hero.jpg`, `product-1.jpg`, `product-2.jpg`, `product-3.jpg` inside `public/images/`.
3. Update `src/config.js` with the official WhatsApp number including country code.
4. Create the GitHub repository and configure Decap CMS authentication. The CMS login is not enabled until its secure OAuth configuration is completed.
5. Deploy the `dist` folder using Cloudflare Pages (build command: `npm run build`, output directory: `dist`).
