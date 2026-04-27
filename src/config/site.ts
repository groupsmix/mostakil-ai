export const site = {
  name: "مستقل الذكاء الاصطناعي",
  shortName: "Mostakil AI",
  domain: "mostakil-ai.com",
  url: "https://mostakil-ai.com",
  author: "فريق مستقل AI",
  authorEmail: "hello@mostakil-ai.com",
  supportEmail: "support@mostakil-ai.com",

  // Replace these with your real product URLs before launch.
  // The site reads `import.meta.env.PUBLIC_CHECKOUT_URL` first if set.
  checkoutUrl: "https://gumroad.com/l/mostakil-ai",
  leadMagnetUrl: "/downloads/mostakil-ai-lead-magnet.pdf",
  ebookSampleUrl: "/downloads/mostakil-ai-ebook-sample.pdf",

  prices: {
    full: 47,
    launch: 27,
    currency: "$",
  },

  social: {
    twitter: "@mostakil_ai",
    telegram: "https://t.me/mostakil_ai",
    instagram: "https://instagram.com/mostakil_ai",
    tiktok: "https://tiktok.com/@mostakil_ai",
  },

  // Optional analytics — leave empty to disable.
  // Wire these up by setting PUBLIC_GA_ID / PUBLIC_FB_PIXEL_ID / PUBLIC_TT_PIXEL_ID at build time.
  analytics: {
    ga4: "",
    fbPixel: "",
    ttPixel: "",
  },

  seo: {
    title: "مستقل الذكاء الاصطناعي — أول 1000$ من Upwork في 2026",
    description:
      "دليل عملي بالعربية يعلّمك بيع 7 خدمات مدعومة بالذكاء الاصطناعي على Upwork، خطوة بخطوة، حتى أول 1000$ خلال 90 يوماً.",
    keywords:
      "العمل الحر, Upwork عربي, الذكاء الاصطناعي, Claude, Midjourney, ElevenLabs, مستقل عربي, ربح من الإنترنت 2026, AI freelance",
    ogImage: "/img/og.svg",
  },
} as const;

export const checkoutUrl = (): string => {
  // Allow override via env at build time without touching code.
  const envUrl = (import.meta as any).env?.PUBLIC_CHECKOUT_URL as string | undefined;
  return envUrl && envUrl.length > 0 ? envUrl : site.checkoutUrl;
};
