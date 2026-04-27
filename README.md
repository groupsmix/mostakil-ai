# Mostakil AI — Launch Site

A high-conversion Arabic (RTL) landing page + lead funnel for the **مستقل الذكاء الاصطناعي** ebook by *[Author]*.

Built with **Astro 6 + Tailwind 4** for a perfect Lighthouse score, premium Arabic typography (Cairo + Tajawal), and zero JavaScript by default — all the marketing copy, pricing, FAQ, lead magnet form, and SEO are baked in.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Long-form sales page (hero → problem → truth → 7 services → bonuses → pricing → guarantee → reviews → lead magnet → FAQ → final CTA) |
| `/thanks` | Lead-magnet thank-you / PDF delivery + upsell |
| `/privacy`, `/terms`, `/refund` | Legal pages |
| `/sitemap-index.xml`, `/robots.txt` | SEO |

The free PDF is served from `/downloads/mostakil-ai-lead-magnet.pdf`. The full ebook PDF is in `public/downloads/` ready for delivery via Gumroad/Lemonsqueezy/Stripe.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm preview      # local preview of dist/
```

## Configuration

All product copy/links live in **[`src/config/site.ts`](src/config/site.ts)** — edit:

- `checkoutUrl` — your Gumroad / Lemonsqueezy / Stripe link
- `prices.full` / `prices.launch` — anchor + offer prices
- `social` — your channels
- `analytics` — GA4 / FB Pixel / TikTok Pixel IDs (or set the equivalent `PUBLIC_*` env vars)
- `supportEmail` — for the refund/contact CTAs

### Environment variables (optional, all `PUBLIC_*` are baked at build time)

```env
PUBLIC_CHECKOUT_URL=https://gumroad.com/l/mostakil-ai
PUBLIC_GA_ID=G-XXXXXXX
PUBLIC_FB_PIXEL_ID=000000000000000
PUBLIC_TT_PIXEL_ID=XXXXXXXXXXXXXX
```

### Connecting the lead-magnet form to your ESP

`src/components/LeadMagnet.astro` POSTs to `window.__LEAD_ENDPOINT__` if you set it in a `<script>` tag in `Layout.astro`. Plug in:

- **Brevo / Sendinblue** — `https://api.brevo.com/v3/contacts` (with a tiny Cloudflare Worker for CORS)
- **Mailchimp** — embedded form action URL
- **Buttondown / Resend / ConvertKit** — direct API or Worker proxy

Until you wire it up, the form persists submissions to `localStorage` and redirects to `/thanks/` so you can ship today and integrate later.

## Pre-launch checklist

- [ ] Replace placeholder testimonials in `src/components/Testimonials.astro` with real quotes from 5–10 early readers.
- [ ] Set `checkoutUrl` to the live Gumroad/Lemonsqueezy product link.
- [ ] Set `analytics.ga4` / `fbPixel` / `ttPixel` (or env vars) so retargeting works from day 1.
- [ ] Replace `[قصتك هنا]` placeholders in `01_ebook_main.md` with your real story (2–3 spots), re-export PDF.
- [ ] Apply the *humanization checklist* (`08_humanization_checklist.md`) to the ebook draft.
- [ ] Wire the lead-magnet form to your ESP and import the 7-email launch sequence (`03_email_sequence.md`).
- [ ] Set up a custom domain + HTTPS.
- [ ] Submit `sitemap-index.xml` to Google Search Console and Bing Webmaster.

## Tech

- [Astro 6](https://astro.build) static site generator
- [Tailwind 4](https://tailwindcss.com) (Vite plugin)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Cairo + Tajawal via Google Fonts (Arabic-optimized, `display=swap`)

## License

Code: MIT. Ebook content & design: © Mostakil AI — all rights reserved.
