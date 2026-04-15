document.addEventListener("DOMContentLoaded", () => {
  const config = window.SITE_TEMPLATE_CONFIG;
  if (!config) {
    return;
  }

  const page = document.documentElement.dataset.page;
  if (!["login", "app"].includes(page)) {
    return;
  }

  const access = config.product?.access || {};
  const loginContent = config.product?.login || {};
  const workspaceContent = config.product?.workspace || {};
  const demoUser = access.demoUser || {};
  const sessionKey = access.sessionStorageKey || "atlas-frame-session";
  const workspaceKey = access.workspaceStorageKey || "atlas-frame-workspace";
  const loginPath = access.loginPath || "/login.html";
  const appPath = access.appPath || "/app.html";
  const themeLabels = {
    studio: "Studio",
    editorial: "Editorial",
    corporate: "Corporate",
  };
  const pageLabels = {
    home: "Home",
    landing: "Landing",
    company: "Institucional",
    showcase: "Vitrine",
  };
  const sectionLabels = {
    stats: "Metricas",
    services: "Servicos",
    faq: "FAQ",
    contact: "Contato",
  };

  const state = {
    session: readStorage(sessionKey),
    workspace: null,
    activePanel: workspaceContent.panels?.[0]?.key || "overview",
  };

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
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function readStorage(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return rawValue ? JSON.parse(rawValue) : null;
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Ignore storage failures in static preview mode.
    }
  }

  function removeStorage(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      // Ignore storage failures in static preview mode.
    }
  }

  function getByPath(source, path) {
    return path.split(".").reduce((accumulator, key) => {
      if (accumulator == null) {
        return undefined;
      }

      return accumulator[key];
    }, source);
  }

  function setByPath(source, path, value) {
    const keys = path.split(".");
    const lastKey = keys.pop();
    const target = keys.reduce((accumulator, key) => {
      if (typeof accumulator[key] !== "object" || accumulator[key] === null) {
        accumulator[key] = {};
      }

      return accumulator[key];
    }, source);

    if (lastKey) {
      target[lastKey] = value;
    }
  }

  function buildInitialWorkspace() {
    const domainBase = slugify(config.brand.name) || "atlas-frame";

    return {
      brandName: config.brand.name,
      shortName: config.brand.shortName,
      tagline: config.brand.tagline,
      summary: config.brand.summary,
      theme: config.theme,
      heroTitle: config.home.hero.title,
      heroHighlight: config.home.hero.highlight,
      heroDescription: config.home.hero.description,
      primaryCtaLabel: config.home.hero.primaryCta.label,
      primaryCtaHref: config.home.hero.primaryCta.href,
      contactMode: config.contact.form.mode,
      launchWindow: "Em ate 5 dias uteis",
      launchOwner: demoUser.name || "Operacoes Atlas",
      launchNotes: "Checklist inicial criado. Ajustar dominio, CTA final e integracao de contato.",
      domain: `${domainBase}.com.br`,
      pages: {
        home: true,
        landing: true,
        company: true,
        showcase: true,
      },
      sections: {
        stats: config.sections?.home?.stats !== false,
        services: config.sections?.home?.services !== false,
        faq: config.sections?.home?.faq !== false,
        contact: config.sections?.home?.contact !== false,
      },
      lastSavedAt: new Date().toISOString(),
    };
  }

  function mergeWorkspace(storedWorkspace) {
    const initialWorkspace = buildInitialWorkspace();
    const safeWorkspace = storedWorkspace && typeof storedWorkspace === "object" ? storedWorkspace : {};

    return {
      ...initialWorkspace,
      ...safeWorkspace,
      pages: {
        ...initialWorkspace.pages,
        ...(safeWorkspace.pages || {}),
      },
      sections: {
        ...initialWorkspace.sections,
        ...(safeWorkspace.sections || {}),
      },
    };
  }

  function saveWorkspace() {
    state.workspace.lastSavedAt = new Date().toISOString();
    writeStorage(workspaceKey, state.workspace);
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function formatTimestamp(isoString) {
    if (!isoString) {
      return "Sem alteracoes salvas.";
    }

    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) {
      return "Sem alteracoes salvas.";
    }

    return `Salvo em ${date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  function getThemeLabel(theme) {
    return themeLabels[theme] || "Studio";
  }

  function getEnabledCount(source) {
    return Object.values(source || {}).filter(Boolean).length;
  }

  function getChecklistState() {
    const workspace = state.workspace;
    const enabledPages = getEnabledCount(workspace.pages);
    const completedChecks = [
      workspace.brandName.trim().length > 1 && workspace.shortName.trim().length > 0,
      workspace.heroTitle.trim().length > 4 && workspace.heroDescription.trim().length > 20,
      enabledPages >= 3,
      workspace.contactMode === "whatsapp" || workspace.contactMode === "http",
      workspace.domain.includes("."),
    ];

    return (workspaceContent.checklist || []).map((label, index) => ({
      label,
      done: Boolean(completedChecks[index]),
    }));
  }

  function getMilestoneState() {
    const workspace = state.workspace;
    const enabledPages = getEnabledCount(workspace.pages);
    const enabledSections = getEnabledCount(workspace.sections);
    const completion = [
      Boolean(state.session),
      workspace.heroTitle.trim().length > 4 && workspace.heroDescription.trim().length > 20,
      enabledPages >= 3 && enabledSections >= 3,
      workspace.domain.includes(".") && workspace.launchOwner.trim().length > 1,
    ];

    return (workspaceContent.milestones || []).map((item, index) => ({
      ...item,
      done: Boolean(completion[index]),
    }));
  }

  function flashPreview() {
    const previewSurface = document.querySelector("[data-preview-surface]");
    if (!previewSurface) {
      return;
    }

    previewSurface.classList.remove("is-syncing");
    window.requestAnimationFrame(() => {
      previewSurface.classList.add("is-syncing");
    });
  }

  function hydrateBindings() {
    document.querySelectorAll("[data-bind]").forEach((input) => {
      const value = getByPath(state.workspace, input.dataset.bind);
      if (typeof value === "string") {
        input.value = value;
      }
    });

    document.querySelectorAll("[data-bind-checked]").forEach((input) => {
      input.checked = Boolean(getByPath(state.workspace, input.dataset.bindChecked));
    });
  }

  function syncMirroredControls(attributeName, path, value, sourceElement) {
    document.querySelectorAll(`[${attributeName}]`).forEach((element) => {
      const elementPath =
        attributeName === "data-bind" ? element.dataset.bind : element.dataset.bindChecked;

      if (element === sourceElement || elementPath !== path) {
        return;
      }

      if (attributeName === "data-bind") {
        element.value = value;
      } else {
        element.checked = Boolean(value);
      }
    });
  }

  function renderLoginPage() {
    if (state.session) {
      window.location.replace(appPath);
      return;
    }

    setText("[data-login-eyebrow]", loginContent.eyebrow || "Area vendavel");
    setText("[data-login-title]", loginContent.title || "Entre no portal.");
    setText("[data-login-description]", loginContent.description || "");
    setText("[data-demo-title]", loginContent.demoTitle || "Acesso demonstrativo");
    setText("[data-demo-description]", loginContent.demoDescription || "");
    setText("[data-demo-email]", demoUser.email || "");
    setText("[data-demo-password]", demoUser.password || "");

    const benefitsMount = document.querySelector("[data-login-benefits]");
    if (benefitsMount) {
      benefitsMount.innerHTML = (loginContent.benefits || [])
        .map(
          (item) => `
            <li class="auth-benefit">
              <span class="auth-benefit__dot"></span>
              <span>${escapeHtml(item)}</span>
            </li>
          `
        )
        .join("");
    }

    const form = document.querySelector("[data-login-form]");
    const status = document.querySelector("[data-auth-status]");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const email = String(formData.get("email") || "").trim().toLowerCase();
      const password = String(formData.get("password") || "");

      const isValid =
        email === String(demoUser.email || "").trim().toLowerCase() &&
        password === String(demoUser.password || "");

      if (!isValid) {
        if (status) {
          status.textContent = "Credenciais invalidas. Use a conta demo exibida abaixo.";
        }
        return;
      }

      state.session = {
        email: demoUser.email,
        name: demoUser.name,
        role: demoUser.role,
        loggedInAt: new Date().toISOString(),
      };

      writeStorage(sessionKey, state.session);
      state.workspace = mergeWorkspace(readStorage(workspaceKey));
      saveWorkspace();
      window.location.replace(appPath);
    });
  }

  function renderWorkspaceNavigation() {
    const mountPoint = document.querySelector("[data-workspace-nav]");
    if (!mountPoint) {
      return;
    }

    mountPoint.innerHTML = (workspaceContent.panels || [])
      .map(
        (panel) => `
          <button
            class="workspace-nav__button ${panel.key === state.activePanel ? "is-active" : ""}"
            type="button"
            data-panel-trigger="${escapeHtml(panel.key)}"
          >
            <strong>${escapeHtml(panel.label)}</strong>
            <span>${escapeHtml(panel.description)}</span>
          </button>
        `
      )
      .join("");
  }

  function renderWorkspaceMetrics() {
    const mountPoint = document.querySelector("[data-workspace-metrics]");
    if (!mountPoint) {
      return;
    }

    const checklist = getChecklistState();
    const completedItems = checklist.filter((item) => item.done).length;
    const enabledPages = getEnabledCount(state.workspace.pages);
    const enabledSections = getEnabledCount(state.workspace.sections);

    const items = [
      {
        value: `${Math.round((completedItems / Math.max(checklist.length, 1)) * 100)}%`,
        label: "Readiness",
        detail: "checklist do publish",
      },
      {
        value: String(enabledPages).padStart(2, "0"),
        label: "Paginas",
        detail: "rotas ativas no pacote",
      },
      {
        value: String(enabledSections).padStart(2, "0"),
        label: "Secoes",
        detail: "blocos ativos na home",
      },
      {
        value: getThemeLabel(state.workspace.theme),
        label: "Tema",
        detail: state.workspace.contactMode === "http" ? "canal HTTP" : "canal WhatsApp",
      },
    ];

    mountPoint.innerHTML = items
      .map(
        (item) => `
          <article class="workspace-metric">
            <strong>${escapeHtml(item.value)}</strong>
            <span>${escapeHtml(item.label)}</span>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderMilestones() {
    const mountPoint = document.querySelector("[data-workspace-milestones]");
    if (!mountPoint) {
      return;
    }

    mountPoint.innerHTML = getMilestoneState()
      .map(
        (item) => `
          <article class="workspace-timeline__item ${item.done ? "is-done" : ""}">
            <span class="workspace-timeline__marker"></span>
            <div>
              <strong>${escapeHtml(item.label)}</strong>
              <p>${escapeHtml(item.description)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderPageStatus() {
    const mountPoint = document.querySelector("[data-workspace-page-status]");
    if (!mountPoint) {
      return;
    }

    const pageStatus = Object.entries(state.workspace.pages)
      .map(
        ([key, enabled]) => `
          <article class="workspace-status ${enabled ? "is-active" : ""}">
            <div>
              <strong>${escapeHtml(pageLabels[key] || key)}</strong>
              <p>${enabled ? "Dentro do pacote atual" : "Fora do escopo atual"}</p>
            </div>
            <span>${enabled ? "Ativa" : "Pausa"}</span>
          </article>
        `
      )
      .join("");

    const sectionStatus = Object.entries(state.workspace.sections)
      .map(
        ([key, enabled]) => `
          <article class="workspace-status ${enabled ? "is-active" : ""}">
            <div>
              <strong>${escapeHtml(sectionLabels[key] || key)}</strong>
              <p>${enabled ? "Visivel na home" : "Oculta na home"}</p>
            </div>
            <span>${enabled ? "On" : "Off"}</span>
          </article>
        `
      )
      .join("");

    mountPoint.innerHTML = `
      <div class="workspace-status-group">
        <span class="workspace-status-group__label">Rotas</span>
        ${pageStatus}
      </div>
      <div class="workspace-status-group">
        <span class="workspace-status-group__label">Secoes</span>
        ${sectionStatus}
      </div>
    `;
  }

  function renderChecklist() {
    const mountPoint = document.querySelector("[data-workspace-checklist]");
    if (!mountPoint) {
      return;
    }

    mountPoint.innerHTML = getChecklistState()
      .map(
        (item) => `
          <article class="workspace-check ${item.done ? "is-done" : ""}">
            <span class="workspace-check__bullet"></span>
            <strong>${escapeHtml(item.label)}</strong>
            <span>${item.done ? "Pronto" : "Pendente"}</span>
          </article>
        `
      )
      .join("");
  }

  function renderPreview() {
    const workspace = state.workspace;

    setText("[data-current-theme-label]", getThemeLabel(workspace.theme));
    setText("[data-preview-theme-label]", getThemeLabel(workspace.theme));
    setText("[data-preview-brand]", workspace.brandName);
    setText("[data-preview-title]", workspace.heroTitle);
    setText("[data-preview-highlight]", workspace.heroHighlight);
    setText("[data-preview-description]", workspace.heroDescription);
    setText("[data-preview-cta]", workspace.primaryCtaLabel);
    setText(
      "[data-preview-contact-mode]",
      workspace.contactMode === "http" ? "Captacao via endpoint" : "Captacao via WhatsApp"
    );
    setText("[data-preview-tagline]", workspace.tagline);
    setText("[data-preview-domain]", workspace.domain);
    setText("[data-last-saved]", formatTimestamp(workspace.lastSavedAt));

    const previewSurface = document.querySelector("[data-preview-surface]");
    if (previewSurface) {
      previewSurface.setAttribute("data-preview-theme", workspace.theme);
    }

    const pagesMount = document.querySelector("[data-preview-pages]");
    if (pagesMount) {
      const activePages = Object.entries(workspace.pages).filter(([, enabled]) => enabled);
      pagesMount.innerHTML = activePages
        .map(
          ([key]) => `
            <span class="workspace-preview__chip">
              ${escapeHtml(pageLabels[key] || key)}
            </span>
          `
        )
        .join("");
    }

    const sectionsMount = document.querySelector("[data-preview-sections]");
    if (sectionsMount) {
      sectionsMount.innerHTML = Object.entries(workspace.sections)
        .map(
          ([key, enabled]) => `
            <article class="workspace-preview__coverage-item ${enabled ? "is-on" : ""}">
              <span>${escapeHtml(sectionLabels[key] || key)}</span>
              <strong>${enabled ? "On" : "Off"}</strong>
            </article>
          `
        )
        .join("");
    }
  }

  function renderWorkspaceMeta() {
    setText("[data-workspace-title]", workspaceContent.title || "Console do template");
    setText(
      "[data-workspace-description]",
      workspaceContent.description || "Edite branding, narrativa, paginas e publicacao."
    );
    setText("[data-session-name]", state.session?.name || "");
    setText("[data-session-role]", state.session?.role || "");
    setText("[data-session-email]", state.session?.email || "");
  }

  function renderWorkspace() {
    renderWorkspaceNavigation();
    renderWorkspaceMeta();
    renderWorkspaceMetrics();
    renderMilestones();
    renderPageStatus();
    renderChecklist();
    renderPreview();
    syncActivePanel();
  }

  function syncActivePanel() {
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === state.activePanel);
    });

    document.querySelectorAll("[data-panel-trigger]").forEach((trigger) => {
      trigger.classList.toggle("is-active", trigger.dataset.panelTrigger === state.activePanel);
    });
  }

  function bindWorkspaceNavigation() {
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-panel-trigger]");
      if (!trigger) {
        return;
      }

      state.activePanel = trigger.dataset.panelTrigger || state.activePanel;
      syncActivePanel();
    });
  }

  function bindWorkspaceInputs() {
    document.querySelectorAll("[data-bind]").forEach((input) => {
      input.addEventListener("input", () => {
        setByPath(state.workspace, input.dataset.bind, input.value);
        syncMirroredControls("data-bind", input.dataset.bind, input.value, input);
        saveWorkspace();
        renderWorkspace();
        flashPreview();
      });
    });

    document.querySelectorAll("[data-bind-checked]").forEach((input) => {
      input.addEventListener("change", () => {
        setByPath(state.workspace, input.dataset.bindChecked, input.checked);
        syncMirroredControls("data-bind-checked", input.dataset.bindChecked, input.checked, input);
        saveWorkspace();
        renderWorkspace();
        flashPreview();
      });
    });
  }

  function bindLogout() {
    const logoutButton = document.querySelector("[data-logout]");
    if (!logoutButton) {
      return;
    }

    logoutButton.addEventListener("click", () => {
      removeStorage(sessionKey);
      state.session = null;
      window.location.replace(loginPath);
    });
  }

  function initWorkspacePage() {
    if (!state.session) {
      window.location.replace(loginPath);
      return;
    }

    state.workspace = mergeWorkspace(readStorage(workspaceKey));
    saveWorkspace();
    hydrateBindings();
    renderWorkspace();
    bindWorkspaceNavigation();
    bindWorkspaceInputs();
    bindLogout();
  }

  if (page === "login") {
    renderLoginPage();
    return;
  }

  if (page === "app") {
    initWorkspacePage();
  }
});
