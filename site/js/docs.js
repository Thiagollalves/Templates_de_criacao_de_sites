(function setupDocsPage() {
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function slugify(value) {
    return String(value ?? "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function inlineMarkdown(text) {
    const escaped = escapeHtml(text);
    return escaped
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function renderMarkdown(markdown) {
    const raw = String(markdown ?? "").replace(/\r\n/g, "\n");
    const lines = raw.split("\n");
    const blocks = [];

    let currentList = null;
    let currentQuote = null;
    let currentParagraph = [];

    function flushParagraph() {
      if (!currentParagraph.length) {
        return;
      }
      const text = currentParagraph.join(" ").trim();
      if (text) {
        blocks.push(`<p>${inlineMarkdown(text)}</p>`);
      }
      currentParagraph = [];
    }

    function flushList() {
      if (!currentList) {
        return;
      }
      const items = currentList.items
        .map((item) => `<li>${inlineMarkdown(item)}</li>`)
        .join("");
      blocks.push(`<ul>${items}</ul>`);
      currentList = null;
    }

    function flushQuote() {
      if (!currentQuote) {
        return;
      }
      const text = currentQuote.lines.join(" ").trim();
      blocks.push(`<blockquote><p>${inlineMarkdown(text)}</p></blockquote>`);
      currentQuote = null;
    }

    function flushAll() {
      flushParagraph();
      flushList();
      flushQuote();
    }

    for (const line of lines) {
      const trimmed = line.trimEnd();
      const isBlank = trimmed.trim() === "";

      if (isBlank) {
        flushAll();
        continue;
      }

      const headingMatch = /^(#{1,3})\s+(.+)$/.exec(trimmed.trim());
      if (headingMatch) {
        flushAll();
        const level = headingMatch[1].length;
        const title = headingMatch[2].trim();
        const id = slugify(title);
        blocks.push(`<h${level} id="${escapeHtml(id)}">${inlineMarkdown(title)}</h${level}>`);
        continue;
      }

      const quoteMatch = /^>\s?(.+)$/.exec(trimmed.trim());
      if (quoteMatch) {
        flushParagraph();
        flushList();
        if (!currentQuote) {
          currentQuote = { lines: [] };
        }
        currentQuote.lines.push(quoteMatch[1].trim());
        continue;
      }

      const listMatch = /^-\s+(.+)$/.exec(trimmed.trim());
      if (listMatch) {
        flushParagraph();
        flushQuote();
        if (!currentList) {
          currentList = { items: [] };
        }
        currentList.items.push(listMatch[1].trim());
        continue;
      }

      flushList();
      flushQuote();
      currentParagraph.push(trimmed.trim());
    }

    flushAll();
    return blocks.join("\n");
  }

  async function fetchText(src) {
    const response = await fetch(src, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Falha ao carregar: ${src}`);
    }
    return response.text();
  }

  function setActiveNav(navRoot, activeId) {
    if (!navRoot) {
      return;
    }
    navRoot.querySelectorAll("[data-doc-nav-item]").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.docNavItem === activeId);
    });
  }

  function setupScrollSpy(navRoot, sections) {
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (!visible) {
          return;
        }
        setActiveNav(navRoot, visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.12, 0.2, 0.35] }
    );

    sections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const config = window.SITE_TEMPLATE_CONFIG;
    const page = document.documentElement.dataset.page || "";
    if (!config || page !== "docs") {
      return;
    }

    const mount = document.querySelector("[data-docs-root]");
    if (!mount) {
      return;
    }

    const documents = config.docs?.documents || [];
    const navMount = mount.querySelector("[data-docs-nav]");
    const contentMount = mount.querySelector("[data-docs-content]");
    const emptyMount = mount.querySelector("[data-docs-empty]");

    if (!documents.length) {
      if (emptyMount) {
        emptyMount.hidden = false;
      }
      return;
    }

    if (emptyMount) {
      emptyMount.hidden = true;
    }

    if (navMount) {
      navMount.innerHTML = documents
        .map(
          (doc) => `
            <a class="doc-nav__item" href="#${escapeHtml(doc.id)}" data-doc-nav-item="${escapeHtml(
            doc.id
          )}">
              <span class="doc-nav__title">${escapeHtml(doc.title || "")}</span>
              <span class="doc-nav__description">${escapeHtml(doc.description || "")}</span>
            </a>
          `
        )
        .join("");
    }

    if (!contentMount) {
      return;
    }

    contentMount.innerHTML = documents
      .map(
        (doc) => `
          <article class="doc-article" id="${escapeHtml(doc.id)}" data-animate>
            <header class="doc-article__header">
              <span class="eyebrow">${escapeHtml(doc.eyebrow || "Documento")}</span>
              <h2>${escapeHtml(doc.title || "")}</h2>
              ${doc.description ? `<p>${escapeHtml(doc.description)}</p>` : ""}
            </header>
            <div class="markdown" data-doc-body="${escapeHtml(doc.id)}">
              <p class="doc-loading">Carregando...</p>
            </div>
          </article>
        `
      )
      .join("");

    const bodies = Array.from(contentMount.querySelectorAll("[data-doc-body]"));
    await Promise.all(
      bodies.map(async (node) => {
        const id = node.dataset.docBody;
        const doc = documents.find((item) => item.id === id);
        if (!doc) {
          return;
        }

        try {
          const markdown = await fetchText(doc.src);
          node.innerHTML = renderMarkdown(markdown);
        } catch (error) {
          node.innerHTML =
            '<p class="doc-error">Nao foi possivel carregar este conteudo. Verifique se o sync rodou antes de iniciar o site.</p>';
        }
      })
    );

    const sectionElements = Array.from(contentMount.querySelectorAll(".doc-article"));
    setupScrollSpy(navMount, sectionElements);
    setActiveNav(navMount, sectionElements[0]?.id);
  });
})();

