document.addEventListener("DOMContentLoaded", () => {
  const config = window.SITE_TEMPLATE_CONFIG;
  if (!config) {
    return;
  }

  const page = document.documentElement.dataset.page || "home";

  const state = {
    page,
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getValue(path) {
    if (!path) {
      return undefined;
    }

    return path.split(".").reduce((accumulator, key) => {
      if (accumulator == null) {
        return undefined;
      }
      return accumulator[key];
    }, config);
  }

  function isExternalLink(href) {
    return /^https?:\/\//i.test(href);
  }

  function buildWhatsAppLink(message) {
    const phone = config.contact?.whatsapp?.phone || "";
    const defaultMessage = config.contact?.whatsapp?.defaultMessage || "";
    const finalMessage = message || defaultMessage;
    return `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
  }

  function resolveCta(cta) {
    if (!cta) {
      return {
        label: "",
        href: "#",
        target: "_self",
        rel: "",
      };
    }

    if (cta.kind === "whatsapp") {
      return {
        label: cta.label || "Abrir WhatsApp",
        href: buildWhatsAppLink(cta.message),
        target: "_blank",
        rel: "noopener",
      };
    }

    const href = cta.href || "#";
    const target = cta.target || (isExternalLink(href) ? "_blank" : "_self");
    return {
      label: cta.label || "Abrir link",
      href,
      target,
      rel: target === "_blank" ? "noopener" : "",
    };
  }

  function renderButton(cta, className) {
    const resolved = resolveCta(cta);
    return `
      <a class="${className}" href="${escapeHtml(resolved.href)}" target="${escapeHtml(
      resolved.target
    )}" ${resolved.rel ? `rel="${escapeHtml(resolved.rel)}"` : ""}>
        ${escapeHtml(resolved.label)}
      </a>
    `;
  }

  function renderHeader() {
    const mountPoint = document.querySelector("[data-header]");
    if (!mountPoint) {
      return;
    }

    const navItems = config.navigation.items
      .filter((item) => item.enabled !== false)
      .map((item) => {
        const isActive = item.page === state.page;
        return `
          <a class="site-nav__link ${isActive ? "is-active" : ""}" href="${escapeHtml(item.href)}">
            ${escapeHtml(item.label)}
          </a>
        `;
      })
      .join("");

    mountPoint.innerHTML = `
      <div class="site-header__bar">
        <a class="brand-lockup" href="/">
          <img class="brand-lockup__mark" src="${escapeHtml(
            config.assets.logos.mark
          )}" alt="${escapeHtml(config.brand.name)}" />
          <div>
            <span class="brand-lockup__eyebrow">${escapeHtml(config.brand.eyebrow)}</span>
            <strong class="brand-lockup__name">${escapeHtml(config.brand.name)}</strong>
          </div>
        </a>

        <button class="site-header__toggle" type="button" aria-expanded="false" data-nav-toggle>
          Menu
        </button>

        <div class="site-header__nav" data-nav-menu>
          <nav class="site-nav" aria-label="Principal">
            ${navItems}
          </nav>
          <div class="site-header__cta">
            ${renderButton(config.navigation.cta, "button button-primary")}
          </div>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    const mountPoint = document.querySelector("[data-footer]");
    if (!mountPoint) {
      return;
    }

    const footerGroups = config.navigation.footerGroups
      .map((group) => {
        const items = group.items
          .map(
            (item) => `
              <li><a href="${escapeHtml(item.href)}" ${
                isExternalLink(item.href) ? 'target="_blank" rel="noopener"' : ""
              }>${escapeHtml(item.label)}</a></li>
            `
          )
          .join("");

        return `
          <div class="footer-group">
            <h3>${escapeHtml(group.title)}</h3>
            <ul>${items}</ul>
          </div>
        `;
      })
      .join("");

    const socialLinks = config.social.links
      .map(
        (link) => `
          <a class="social-pill" href="${escapeHtml(link.href)}" target="_blank" rel="noopener">
            ${escapeHtml(link.label)}
          </a>
        `
      )
      .join("");

    const footerItems = (config.contact.footerItems || [])
      .map((item) => {
        if (item.href) {
          return `
            <li>
              <span>${escapeHtml(item.label)}:</span>
              <a href="${escapeHtml(item.href)}" target="_blank" rel="noopener">${escapeHtml(
            item.value
          )}</a>
            </li>
          `;
        }

        return `
          <li>
            <span>${escapeHtml(item.label)}:</span>
            <strong>${escapeHtml(item.value)}</strong>
          </li>
        `;
      })
      .join("");

    mountPoint.innerHTML = `
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <img class="site-footer__mark" src="${escapeHtml(
            config.assets.logos.mark
          )}" alt="${escapeHtml(config.brand.name)}" />
          <p class="eyebrow">${escapeHtml(config.brand.tagline)}</p>
          <p class="site-footer__summary">${escapeHtml(config.brand.summary)}</p>
          <div class="site-footer__social">${socialLinks}</div>
        </div>

        ${footerGroups}

        <div class="footer-group">
          <h3>Contato</h3>
          <ul>${footerItems}</ul>
        </div>
      </div>

      <div class="site-footer__meta">
        <p>${escapeHtml(config.brand.legalName)} - <span data-year></span></p>
        <p>${escapeHtml(config.brand.footerNote)}</p>
      </div>
    `;
  }

  function bindTextContent(root = document) {
    root.querySelectorAll("[data-text]").forEach((element) => {
      const value = getValue(element.dataset.text);
      if (value != null) {
        element.textContent = value;
      }
    });

    root.querySelectorAll("[data-html]").forEach((element) => {
      const value = getValue(element.dataset.html);
      if (value != null) {
        element.innerHTML = value;
      }
    });

    root.querySelectorAll("[data-src]").forEach((element) => {
      const value = getValue(element.dataset.src);
      if (value) {
        element.setAttribute("src", value);
      }
    });

    root.querySelectorAll("[data-alt]").forEach((element) => {
      const value = getValue(element.dataset.alt);
      if (value) {
        element.setAttribute("alt", value);
      }
    });

    root.querySelectorAll("[data-href]").forEach((element) => {
      const value = getValue(element.dataset.href);
      if (value) {
        element.setAttribute("href", value);
      }
    });

    root.querySelectorAll("[data-placeholder]").forEach((element) => {
      const value = getValue(element.dataset.placeholder);
      if (value) {
        element.setAttribute("placeholder", value);
      }
    });
  }

  function bindCtas(root = document) {
    root.querySelectorAll("[data-cta]").forEach((element) => {
      const cta = getValue(element.dataset.cta);
      const resolved = resolveCta(cta);
      element.textContent = resolved.label;
      element.setAttribute("href", resolved.href);
      element.setAttribute("target", resolved.target);

      if (resolved.rel) {
        element.setAttribute("rel", resolved.rel);
      } else {
        element.removeAttribute("rel");
      }
    });
  }

  function renderStatCards(items) {
    return items
      .map(
        (item) => `
          <article class="metric-card" data-animate>
            <strong>${escapeHtml(item.value)}</strong>
            <span>${escapeHtml(item.label)}</span>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderSimpleCards(items) {
    return items
      .map(
        (item) => `
          <article class="stack-card" data-animate>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderHeroSignals(items) {
    return items
      .map(
        (item) => `
          <article class="hero-signal" data-animate>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderPortfolioCards(items) {
    return items
      .map(
        (item) => `
          <article class="portfolio-card panel" data-animate>
            <div class="portfolio-card__media">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" />
            </div>
            <div class="portfolio-card__body">
              <span class="eyebrow">${escapeHtml(item.eyebrow)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              ${renderButton(item.link, "button button-ghost button-small")}
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderProcessSteps(items) {
    return items
      .map(
        (item) => `
          <article class="process-step" data-animate>
            <span class="process-step__index">${escapeHtml(item.step)}</span>
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderTestimonials(items) {
    return items
      .map(
        (item) => `
          <article class="quote-card panel" data-animate>
            <p class="quote-card__text">"${escapeHtml(item.quote)}"</p>
            <div class="quote-card__meta">
              <strong>${escapeHtml(item.author)}</strong>
              <span>${escapeHtml(item.role)}</span>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderFaq(items) {
    return items
      .map(
        (item, index) => `
          <article class="faq-item panel ${index === 0 ? "is-open" : ""}" data-faq-item data-animate>
            <button class="faq-item__button" type="button" data-faq-trigger>
              <span>${escapeHtml(item.question)}</span>
              <span class="faq-item__icon">+</span>
            </button>
            <div class="faq-item__answer">
              <p>${escapeHtml(item.answer)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderChannels(items) {
    return items
      .map(
        (item) => `
          <li class="contact-channel" data-animate>
            <span>${escapeHtml(item.label)}</span>
            <a href="${escapeHtml(item.href)}" ${
          /^(https?:|mailto:)/i.test(item.href) ? 'target="_blank" rel="noopener"' : ""
        }>
              ${escapeHtml(item.value)}
            </a>
          </li>
        `
      )
      .join("");
  }

  function renderStringList(items, className = "bullet-list__item") {
    return items
      .map(
        (item) => `
          <li class="${className}" data-animate>${escapeHtml(item)}</li>
        `
      )
      .join("");
  }

  function renderHighlights(items) {
    return items
      .map(
        (item) => `
          <article class="insight-card" data-animate>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderTimeline(items) {
    return items
      .map(
        (item) => `
          <article class="timeline-item" data-animate>
            <span class="timeline-item__label">${escapeHtml(item.label)}</span>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderLandingCards(items) {
    return items
      .map(
        (item) => `
          <article class="offer-card" data-animate>
            <span class="offer-card__badge">${escapeHtml(item.badge)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderOutcomeCards(items) {
    return items
      .map(
        (item) => `
          <article class="outcome-card panel" data-animate>
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" />
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderShowcaseFilters(items) {
    return items
      .map(
        (item, index) => `
          <span class="filter-pill ${index === 0 ? "is-active" : ""}" data-animate>${escapeHtml(
            item
          )}</span>
        `
      )
      .join("");
  }

  function renderShowcaseItems(items) {
    return items
      .map(
        (item) => `
          <article class="showcase-card panel" data-animate>
            <div class="showcase-card__media">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" />
            </div>
            <div class="showcase-card__body">
              <div class="showcase-card__topline">
                <span>${escapeHtml(item.category)}</span>
                <strong>${escapeHtml(item.metric)}</strong>
              </div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              ${renderButton(item.cta, "button button-ghost button-small")}
            </div>
          </article>
        `
      )
      .join("");
  }

  const renderMap = {
    "home.hero.signals": () => renderHeroSignals(config.home.hero.signals),
    "home.stats": () => renderStatCards(config.home.stats),
    "home.services.items": () => renderSimpleCards(config.home.services.items),
    "home.portfolio.items": () => renderPortfolioCards(config.home.portfolio.items),
    "home.process.steps": () => renderProcessSteps(config.home.process.steps),
    "home.testimonials.items": () => renderTestimonials(config.home.testimonials.items),
    "home.faq.items": () => renderFaq(config.home.faq.items),
    "home.contact.asidePoints": () => renderStringList(config.home.contact.asidePoints),
    "landing.proof.items": () => renderStatCards(config.landing.proof.items),
    "landing.hero.signals": () => renderHeroSignals(config.landing.hero.signals),
    "landing.offer.items": () => renderLandingCards(config.landing.offer.items),
    "landing.outcomes.items": () => renderOutcomeCards(config.landing.outcomes.items),
    "landing.faq.items": () => renderFaq(config.landing.faq.items),
    "contact.channels": () => renderChannels(config.contact.channels),
    "pages.company.highlights": () => renderHighlights(config.pages.company.highlights),
    "pages.company.values": () => renderHighlights(config.pages.company.values),
    "pages.company.timeline": () => renderTimeline(config.pages.company.timeline),
    "pages.showcase.filters": () => renderShowcaseFilters(config.pages.showcase.filters),
    "pages.showcase.items": () => renderShowcaseItems(config.pages.showcase.items),
  };

  function renderDynamicSections(root = document) {
    root.querySelectorAll("[data-render]").forEach((element) => {
      const renderer = renderMap[element.dataset.render];
      if (renderer) {
        element.innerHTML = renderer();
      }
    });
  }

  function applySectionVisibility(root = document) {
    root.querySelectorAll("[data-section-page][data-section]").forEach((element) => {
      const sectionPage = element.dataset.sectionPage;
      const sectionName = element.dataset.section;

      if (sectionPage !== state.page) {
        return;
      }

      const isVisible = config.sections?.[sectionPage]?.[sectionName];
      if (isVisible === false) {
        element.hidden = true;
      }
    });
  }

  function bindYear(root = document) {
    root.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  }

  function setupFaq(root = document) {
    root.querySelectorAll("[data-faq-item]").forEach((item) => {
      const trigger = item.querySelector("[data-faq-trigger]");
      if (!trigger) {
        return;
      }

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        const siblings = item.parentElement?.querySelectorAll("[data-faq-item]") || [];

        siblings.forEach((sibling) => sibling.classList.remove("is-open"));
        if (!isOpen) {
          item.classList.add("is-open");
        }
      });
    });
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function setupAnimations(root = document) {
    const animated = root.querySelectorAll("[data-animate]");
    if (!animated.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
      }
    );

    animated.forEach((element) => observer.observe(element));
  }

  function setupForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) {
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const mode = config.contact.form.mode;
      const introMessage =
        config.contact.form.introMessage || `Ola, vim pelo site da ${config.brand.shortName}.`;
      const messageLines = [
        introMessage,
        `Nome: ${payload.name || ""}`,
        `Email: ${payload.email || ""}`,
        `Empresa: ${payload.company || ""}`,
        `Contexto: ${payload.message || ""}`,
        `Consentimento: ${payload.consent ? "sim" : "nao"}`,
        `Pagina: ${window.location.pathname}`,
      ];

      if (submitButton) {
        submitButton.disabled = true;
      }

      if (status) {
        status.textContent = "";
      }

      try {
        if (mode === "whatsapp") {
          window.open(buildWhatsAppLink(messageLines.join("\n")), "_blank", "noopener");
          form.reset();
          if (status) {
            status.textContent = config.contact.form.successMessage;
          }
        } else {
          const response = await fetch(config.contact.form.endpoint, {
            method: config.contact.form.method || "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error("HTTP request failed.");
          }

          form.reset();
          if (status) {
            status.textContent = "Formulario enviado com sucesso.";
          }
        }
      } catch (error) {
        if (status) {
          status.textContent = config.contact.form.errorMessage;
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  renderHeader();
  renderFooter();
  bindTextContent();
  bindCtas();
  renderDynamicSections();
  bindTextContent();
  bindCtas();
  applySectionVisibility();
  bindYear();
  setupFaq();
  setupNavigation();
  setupAnimations();
  setupForm();
});
