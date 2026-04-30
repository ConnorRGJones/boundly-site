# Boundly

**Boutique GTM recruitment for UK SaaS companies — pre-seed through Series B.**

Live site: [boundly.io](https://boundly.io)

## Stack

- Vanilla HTML/CSS with React 18 (via CDN) and Babel Standalone
- No build step required — open `index.html` to run locally
- Deployed on Netlify with auto-deploy from `main`

## Structure

```
index.html          # Entry point
/images             # Logo and photography
/css                # Recoleta font files
/project            # React component source files
  Animations.jsx
  Header.jsx
  Hero.jsx
  Stats.jsx
  Process.jsx
  Testimonials.jsx
  CTA.jsx
```

## Local development

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
```

## Deployment

Every push to `main` auto-deploys to [boundly.io](https://boundly.io) via Netlify.

For changes, create a feature branch and open a PR:

```bash
git checkout -b feature/your-change
# make edits
git add . && git commit -m "describe change"
git push -u origin feature/your-change
gh pr create
```
