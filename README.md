# Boundly

**Boutique GTM recruitment for UK B2B SaaS companies — pre-seed through to enterprise.**

Live site: [boundly.io](https://boundly.io)

## Stack

- Single self-contained `index.html` (vanilla HTML, CSS and JS — no framework, no build step)
- Fonts: Recoleta (local `.ttf` in `/fonts`) + Poppins (Google Fonts CDN)
- Deployed on Netlify with auto-deploy from `main`

## Structure

```
index.html          # The entire site (embedded <style> and <script>)
/images             # Photography and candidate-card avatars
/fonts              # Recoleta font files
netlify.toml        # Publish dir + SPA redirect
```

## Local development

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
```

## Deployment

Every push to `main` auto-deploys to [boundly.io](https://boundly.io) via Netlify.
