(function applyHeadConfig() {
  const config = window.SITE_TEMPLATE_CONFIG;
  if (!config) {
    return;
  }

  const page = document.documentElement.dataset.page || "home";
  const pageSeo = config.seo.pages[page] || {};
  const title = pageSeo.title || config.seo.defaultTitle;
  const description = pageSeo.description || config.seo.defaultDescription;
  const path = pageSeo.path || "/";
  const baseUrl = (config.seo.baseUrl || "").replace(/\/$/, "");
  const canonicalHref = baseUrl ? `${baseUrl}${path === "/" ? "" : path}` : path;

  function ensureTag(selector, createTag, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement(createTag);
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      document.head.appendChild(element);
    }
    return element;
  }

  document.documentElement.lang = "pt-BR";
  document.documentElement.setAttribute("data-theme", config.theme);
  document.title = title;

  ensureTag('meta[name="description"]', "meta", { name: "description" }).setAttribute(
    "content",
    description
  );

  ensureTag('link[rel="canonical"]', "link", { rel: "canonical" }).setAttribute(
    "href",
    canonicalHref
  );

  ensureTag('meta[property="og:type"]', "meta", { property: "og:type" }).setAttribute(
    "content",
    "website"
  );
  ensureTag('meta[property="og:title"]', "meta", { property: "og:title" }).setAttribute(
    "content",
    title
  );
  ensureTag(
    'meta[property="og:description"]',
    "meta",
    { property: "og:description" }
  ).setAttribute("content", description);
  ensureTag('meta[property="og:url"]', "meta", { property: "og:url" }).setAttribute(
    "content",
    canonicalHref
  );
  ensureTag('meta[property="og:image"]', "meta", { property: "og:image" }).setAttribute(
    "content",
    config.seo.ogImage
  );

  ensureTag('meta[name="twitter:card"]', "meta", {
    name: "twitter:card",
  }).setAttribute("content", "summary_large_image");
  ensureTag('meta[name="twitter:title"]', "meta", {
    name: "twitter:title",
  }).setAttribute("content", title);
  ensureTag('meta[name="twitter:description"]', "meta", {
    name: "twitter:description",
  }).setAttribute("content", description);
  ensureTag('meta[name="twitter:image"]', "meta", {
    name: "twitter:image",
  }).setAttribute("content", config.seo.ogImage);

  ensureTag('link[rel="icon"]', "link", {
    rel: "icon",
    type: "image/svg+xml",
  }).setAttribute("href", config.seo.favicon);
})();
