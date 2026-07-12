# CLAUDE.md

Draft storefront for **Venom** — Dr. Amit Om's men's skincare line (Aryan's cousin; same founder as amitommd.com). Selling the **Venom Face Mist**. Domain `venomskin.com` is registered at **Squarespace** (Aryan has the login).

- Plain static HTML/CSS + `js/main.js`. No build step — edit, commit, push.
- Built to the `Venom Brand Guidelines 2026.pdf` (in Aryan's Downloads). Palette: forest `#00241B`, midnight `#09298F`, leaf `#3F7E21`, olive `#D4D6B9`, cream `#FEF9F3`. Type: IBM Plex Sans Condensed (headers) + Inter (body). Wordmark "venOM" + snake-eye/compass emblem rebuilt as inline SVG.
- Images optimized from the PDF into `img/`. Raw extraction was moved out of the repo (heavy).

## Status & plan

- **This is a review draft.** Flow: draft on GitHub Pages → Aryan approves → deploy to Squarespace (final host).
- **Deploying a fully coded site "to Squarespace" is not native** — Squarespace is a template builder. Options to discuss after approval: (a) rebuild in Squarespace's editor to match, (b) point `venomskin.com` DNS at GitHub Pages instead (like amitommd), or (c) Squarespace Code Injection / a dev plan. Flag this before promising a one-click Squarespace deploy.
- **Photography is Pinterest-sourced from the brand deck — NOT licensed for commercial use.** Fine for the private demo; must be replaced with real product photography before selling publicly.

## Gotchas

- Scroll-reveal `.rv` elements are hidden until `.in` is added by IntersectionObserver — they look blank in a full-page screenshot but render on real scroll. Don't remove `classList.add('js')` in `main.js`.
- Price ($42 / $36 subscribe) is a placeholder — confirm with the cousin.
- Avoided the deck's "SPF15 equivalent" claim (regulated); using softer hydrate/tone/barrier language.

## Launch swap (buy flow)

- Stripe Payment Link (from Aryan, ready for launch): `https://buy.stripe.com/3cI6oH3Fv3Pqe4a25bd7q00`
- Stored as `STRIPE_CHECKOUT` in `js/main.js`. To go live: point `[data-buy]` buttons at it (or embed Shopify if he wants the full store/subscriptions).

## Session Log

### 2026-07-11
- Built the Venom Face Mist launch site from the brand guidelines (hero, PDP, Blue Light Defense Complex, everyday-carry, ritual, founder, testimonials, early-access capture). Deployed draft to GitHub Pages for Aryan's review.
- Next: Aryan reviews → decide real host (Squarespace rebuild vs point DNS to Pages) → swap in real product photos → wire the Stripe link for live checkout.
