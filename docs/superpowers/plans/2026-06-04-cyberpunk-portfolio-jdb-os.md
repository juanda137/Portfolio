# Cyberpunk Portfolio (JDB-OS) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the existing 3-page static portfolio into a single-page "JDB-OS" cyberpunk dashboard SPA that switches views with JS, preserving the real bilingual (EN/ES) content and adding terminal/CRT flavor driven by real data.

**Architecture:** One `index.html` with a 3-panel layout (left nav + vitals, center command console with 4 switchable views, right inspector) plus a bottom terminal bar. View switching, hash routing, i18n, terminal commands and animated real-data counters all live in `script/main.js`. The old `pages/*.html` become meta-refresh redirects so existing links keep working. No build tools, no package manager, no test framework — verification is manual in a browser, consistent with the project's existing constraints (`CLAUDE.md`).

**Tech Stack:** Static HTML, Tailwind CSS (CDN, inline config), vanilla JS, custom CSS effects (scanlines, CRT flicker, clip-corner, glitch, typewriter). Fonts: Space Mono + JetBrains Mono + Material Symbols.

---

## Why this approach (context for the worker)

The user loved a Stitch-generated mock (`JDB-OS v2.0`). Two product decisions were already made with the user:

1. **Single-file SPA** (not 3 styled pages) — matches the "OS" effect of the mock and is the most professional/impactful option. Hash routing (`#overview`, `#experience`, `#education`, `#contact`) keeps views shareable/bookmarkable and lets the old pages redirect into the right view.
2. **Decorative telemetry becomes REAL data** — the mock's fake `SYSTEM_VITALS`, `CPU_LOAD`, `MEM_ALLOC` and realtime logs are repurposed into honest information: skill proficiency by stack, real counts (projects shipped, certifications), and a boot sequence stating real facts (name, role, location, stack, availability).

**Non-negotiables to preserve from the current site:**
- The EN/ES i18n system (`data-key` attributes + `translations` object + `localStorage`). Every piece of human-readable copy must use `data-key`.
- The real content: 3 real jobs (Bia, Campuslands cinema, Coderhouse bakery), 2 education entries (Campuslands, Coderhouse), 4 certificate images, the 6 skill categories, the real contact links and the real profile photo (`./images/Foto.jpg`).
- Mobile menu / responsive behaviour (re-implemented to fit the new layout).

## File Structure

| File | Responsibility | Action |
|------|----------------|--------|
| `index.html` | The entire SPA: head + inline Tailwind config, base overlays, left panel, center console (4 views), right inspector, mobile header, bottom terminal/nav. All copy via `data-key`. | Rewrite |
| `css/styles.css` | Cyberpunk effect classes (scanlines, crt-flicker, clip-corner, glitch-hover, typewriter, fadeIn, view-content visibility, scroll-hidden) + retained animation/menu helpers. | Rewrite |
| `script/main.js` | Extended `translations` (EN/ES), `setLanguage`, language toggle, SPA `switchView` + hash routing, terminal command line, realtime logs (real boot + ambient), animated counters for vitals/stats. | Rewrite |
| `pages/experience.html` | Meta-refresh redirect → `../index.html#experience`. | Rewrite (stub) |
| `pages/education.html` | Meta-refresh redirect → `../index.html#education`. | Rewrite (stub) |

**Real data constants used throughout (single source of truth — do not invent other numbers):**

- Profile photo: `./images/Foto.jpg`
- Certificates: `./images/desarrolloWeb.png`, `./images/javascript.png`, `./images/backend.png`, `./images/reactDiploma.png`
- Email: `juanda.benavidesf@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/juan-david-benavides`
- GitHub: `https://github.com/juanda137`
- Cinema repo: `https://github.com/juanda137/proyecto_gestion_cine_benavidesfiallo_juandavid`
- Vitals (honest self-assessment, %): BACKEND 90, FRONTEND 85, AI_AUTOMATION 95, DATA 80
- Inspector stats: PROJECTS_LOGGED 3, CERTS_UNLOCKED 4, LANGUAGES 2 (EN/ES)

---

## Task 1: Cyberpunk CSS

**Files:**
- Modify (full rewrite): `css/styles.css`

- [ ] **Step 1: Replace the stylesheet with the cyberpunk effect classes**

Overwrite `css/styles.css` with exactly this content:

```css
/* === BASE === */
body {
    font-family: 'JetBrains Mono', monospace;
    background-color: #000;
}
body.overflow-hidden {
    overflow: hidden;
}

/* === SCANLINE / CRT OVERLAYS === */
.scanline-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 9999;
}

.crt-flicker {
    animation: crt-flicker 0.15s infinite;
}
@keyframes crt-flicker {
    0%   { opacity: 0.95; }
    50%  { opacity: 1; }
    100% { opacity: 0.98; }
}

/* === ANGLED CORNER CLIP === */
.clip-corner {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
}

/* === GLITCH HOVER === */
.glitch-hover:hover {
    animation: glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite;
    background-color: #00ff66;
    color: #000;
}
@keyframes glitch {
    0%   { transform: translate(0); }
    20%  { transform: translate(-2px, 1px); }
    40%  { transform: translate(-1px, -1px); }
    60%  { transform: translate(2px, 1px); }
    80%  { transform: translate(1px, -1px); }
    100% { transform: translate(0); }
}

/* === TYPEWRITER (view title) === */
.typewriter {
    overflow: hidden;
    border-right: .15em solid #00ff66;
    white-space: nowrap;
    letter-spacing: .08em;
    animation: typing 1.6s steps(40, end), blink-caret .75s step-end infinite;
}
@keyframes typing {
    from { width: 0; }
    to   { width: 100%; }
}
@keyframes blink-caret {
    from, to { border-color: transparent; }
    50%      { border-color: #00ff66; }
}

/* === HIDDEN SCROLLBARS === */
.scroll-hidden::-webkit-scrollbar { display: none; }
.scroll-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* === SPA VIEW VISIBILITY === */
.view-content { display: none; }
.view-content.active {
    display: block;
    animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
}

/* === ANIMATED VITAL BARS === */
.vital-bar {
    width: 0;
    transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
```

- [ ] **Step 2: Verify the file is valid CSS**

Run: `Get-Content css/styles.css | Measure-Object -Line`
Expected: ~95 lines, no error. Open `css/styles.css` in the editor and confirm there are no unclosed braces (every `{` has a `}`).

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "style: replace styles with cyberpunk JDB-OS effect classes"
```

---

## Task 2: index.html shell + Overview view

This task creates the full document: head with inline Tailwind config, base grid/scanline overlays, the left panel (nav + real vitals + language toggle + socials), the center console header, a fully-populated **Overview** view, **empty** wrapper divs for the other three views, the right inspector panel (real stats + logs container), the mobile header, and the bottom terminal/nav footer.

**Files:**
- Modify (full rewrite): `index.html`

- [ ] **Step 1: Overwrite `index.html` with the complete shell**

Overwrite `index.html` with exactly this content:

```html
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JDB-OS // Juan David Benavides — Full Stack Dev & AI Data Engineer</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "error": "#ffb4ab",
                        "inverse-surface": "#e2e2e2",
                        "primary-fixed-dim": "#00e55b",
                        "secondary-fixed-dim": "#00dbe9",
                        "tertiary-fixed-dim": "#ffb2b8",
                        "outline": "#849581",
                        "outline-variant": "#3b4b3a",
                        "surface-variant": "#353535",
                        "surface-container-low": "#1b1b1b",
                        "surface-container-lowest": "#0e0e0e",
                        "surface-container-highest": "#353535",
                        "on-surface-variant": "#b9ccb5",
                        "on-primary-container": "#007128",
                        "on-primary-fixed": "#002107",
                        "primary-container": "#00ff66",
                        "background": "#131313",
                        "on-background": "#e2e2e2"
                    },
                    spacing: {
                        "terminal-padding": "12px",
                        "panel-margin": "24px"
                    },
                    fontFamily: {
                        "headline-md": ["Space Mono", "monospace"],
                        "code-snippet": ["JetBrains Mono", "monospace"],
                        "label-sm": ["JetBrains Mono", "monospace"],
                        "body-base": ["JetBrains Mono", "monospace"]
                    },
                    fontSize: {
                        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
                        "code-snippet": ["13px", { lineHeight: "1.4", fontWeight: "400" }],
                        "label-sm": ["11px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "500" }],
                        "body-base": ["14px", { lineHeight: "1.6", fontWeight: "400" }]
                    },
                    backgroundImage: {
                        'grid-pattern': "linear-gradient(to right, rgba(59,75,58,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,75,58,0.25) 1px, transparent 1px)"
                    }
                }
            }
        }
    </script>
    <link rel="stylesheet" href="./css/styles.css" />
</head>
<body class="text-on-background bg-background h-screen w-screen overflow-hidden font-body-base antialiased relative">

    <!-- Base layer grid + scanlines -->
    <div class="fixed inset-0 bg-grid-pattern bg-[length:32px_32px] pointer-events-none z-0"></div>
    <div class="scanline-overlay"></div>

    <!-- Mobile top bar -->
    <header class="md:hidden flex justify-between items-center w-full px-terminal-padding border-b border-outline-variant bg-surface-container-lowest text-primary-fixed-dim font-code-snippet z-50 h-16 relative">
        <div class="font-headline-md text-headline-md text-primary-container drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]">JDB-OS</div>
        <button id="lang-toggle-mobile" class="border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 text-xs uppercase tracking-widest clip-corner"></button>
    </header>

    <!-- Main 3-panel layout -->
    <main class="flex h-full md:h-screen w-full relative z-10 pt-16 md:pt-0 pb-16 md:pb-0">

        <!-- LEFT PANEL -->
        <aside class="hidden md:flex flex-col h-full py-panel-margin bg-surface-container-low border-r border-outline-variant w-1/5 shrink-0 overflow-y-auto scroll-hidden relative">
            <div class="px-6 mb-8 text-primary-fixed-dim border-b border-outline-variant pb-4">
                <div class="font-headline-md text-headline-md text-primary-container mb-2 drop-shadow-[0_0_4px_rgba(0,255,102,0.4)]">JDB-OS v2.0</div>
                <div class="font-label-sm text-label-sm uppercase opacity-70" data-key="ui_status_line"></div>
                <div class="mt-4 relative w-24 h-24 border border-secondary-fixed-dim clip-corner flex items-center justify-center overflow-hidden">
                    <img alt="Juan David Benavides" class="w-full h-full object-cover" src="./images/Foto.jpg" />
                    <div class="absolute inset-0 bg-secondary-fixed-dim/10 pointer-events-none"></div>
                </div>
            </div>

            <nav class="flex-1 px-4 space-y-2" id="nav-menu">
                <a class="nav-btn flex items-center gap-3 font-label-sm text-label-sm uppercase text-on-primary-container bg-primary-container border-l-4 border-primary-fixed-dim p-2 w-full clip-corner crt-flicker cursor-pointer" data-target="view-overview">
                    <span class="material-symbols-outlined text-current" style="font-variation-settings: 'FILL' 1;">dashboard</span>
                    <span data-key="nav_overview"></span>
                </a>
                <a class="nav-btn flex items-center gap-3 font-label-sm text-label-sm uppercase text-on-surface-variant p-2 w-full hover:bg-surface-variant hover:text-primary-fixed-dim transition-all duration-75 clip-corner border-l-4 border-transparent hover:border-outline-variant cursor-pointer" data-target="view-experience">
                    <span class="material-symbols-outlined text-current">terminal</span>
                    <span data-key="nav_logs"></span>
                </a>
                <a class="nav-btn flex items-center gap-3 font-label-sm text-label-sm uppercase text-on-surface-variant p-2 w-full hover:bg-surface-variant hover:text-primary-fixed-dim transition-all duration-75 clip-corner border-l-4 border-transparent hover:border-outline-variant cursor-pointer" data-target="view-education">
                    <span class="material-symbols-outlined text-current">school</span>
                    <span data-key="nav_academy"></span>
                </a>
                <a class="nav-btn flex items-center gap-3 font-label-sm text-label-sm uppercase text-on-surface-variant p-2 w-full hover:bg-surface-variant hover:text-primary-fixed-dim transition-all duration-75 clip-corner border-l-4 border-transparent hover:border-outline-variant cursor-pointer" data-target="view-contact">
                    <span class="material-symbols-outlined text-current">connect_without_contact</span>
                    <span data-key="nav_contact"></span>
                </a>
            </nav>

            <div class="px-4 mt-8">
                <div class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-4" data-key="vitals_title"></div>

                <div class="mb-4">
                    <div class="flex justify-between font-code-snippet text-xs text-on-surface-variant mb-1">
                        <span data-key="vital_backend"></span>
                        <span class="text-secondary-fixed-dim">90%</span>
                    </div>
                    <div class="w-full h-1 bg-surface-variant">
                        <div class="vital-bar h-full bg-secondary-fixed-dim shadow-[0_0_8px_#00dbe9]" data-width="90"></div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex justify-between font-code-snippet text-xs text-on-surface-variant mb-1">
                        <span data-key="vital_frontend"></span>
                        <span class="text-primary-fixed-dim">85%</span>
                    </div>
                    <div class="w-full h-1 bg-surface-variant">
                        <div class="vital-bar h-full bg-primary-fixed-dim shadow-[0_0_8px_#00e55b]" data-width="85"></div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex justify-between font-code-snippet text-xs text-on-surface-variant mb-1">
                        <span data-key="vital_ai"></span>
                        <span class="text-primary-fixed-dim">95%</span>
                    </div>
                    <div class="w-full h-1 bg-surface-variant">
                        <div class="vital-bar h-full bg-primary-fixed-dim shadow-[0_0_8px_#00e55b]" data-width="95"></div>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="flex justify-between font-code-snippet text-xs text-on-surface-variant mb-1">
                        <span data-key="vital_data"></span>
                        <span class="text-tertiary-fixed-dim">80%</span>
                    </div>
                    <div class="w-full h-1 bg-surface-variant">
                        <div class="vital-bar h-full bg-tertiary-fixed-dim shadow-[0_0_8px_#ffb2b8]" data-width="80"></div>
                    </div>
                </div>

                <button id="lang-toggle" class="w-full border border-primary-fixed-dim text-primary-fixed-dim font-label-sm py-2 uppercase tracking-widest clip-corner hover:bg-primary-fixed-dim hover:text-black transition-colors"></button>
            </div>

            <div class="mt-auto px-4 border-t border-outline-variant pt-4 flex gap-4">
                <a class="flex items-center gap-2 font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary-fixed-dim" href="https://github.com/juanda137" target="_blank" rel="noopener noreferrer">
                    <span class="material-symbols-outlined text-[16px]">code</span>
                    GITHUB
                </a>
                <a class="flex items-center gap-2 font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary-fixed-dim" href="https://www.linkedin.com/in/juan-david-benavides" target="_blank" rel="noopener noreferrer">
                    <span class="material-symbols-outlined text-[16px]">hub</span>
                    LINKEDIN
                </a>
            </div>
        </aside>

        <!-- CENTER CONSOLE -->
        <section class="flex-1 bg-black/60 relative overflow-y-auto scroll-hidden border-r border-outline-variant p-6 flex flex-col" id="main-content">
            <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,255,102,0.02)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none z-0"></div>
            <div class="mb-8 border-b border-outline-variant pb-2 relative z-10">
                <h1 class="font-headline-md text-headline-md text-primary-fixed-dim typewriter inline-block" id="view-title">&gt; INIT_SEQUENCE_COMPLETE</h1>
                <p class="font-code-snippet text-code-snippet text-on-surface-variant mt-2" id="view-subtitle"></p>
            </div>

            <!-- OVERVIEW VIEW -->
            <div class="view-content active relative z-10 flex-1" id="view-overview">
                <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-6 mb-6">
                    <h2 class="font-headline-md text-xl text-primary-fixed-dim mb-1" data-key="name"></h2>
                    <p class="font-label-sm text-label-sm uppercase text-secondary-fixed-dim mb-4" data-key="hero_title"></p>
                    <p class="font-code-snippet text-sm text-inverse-surface leading-relaxed" data-key="hero_subtitle"></p>
                    <div class="mt-4 flex flex-wrap items-center gap-4 font-code-snippet text-xs text-on-surface-variant">
                        <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px] text-primary-fixed-dim">location_on</span><span data-key="hero_location"></span></span>
                        <a class="flex items-center gap-1 hover:text-primary-fixed-dim" href="mailto:juanda.benavidesf@gmail.com"><span class="material-symbols-outlined text-[16px] text-primary-fixed-dim">mail</span>juanda.benavidesf@gmail.com</a>
                    </div>
                </div>

                <h2 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-4 border-b border-outline-variant pb-2" data-key="skills_title"></h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4">
                        <h3 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-3" data-key="ai_skills_title"></h3>
                        <div class="flex flex-wrap gap-2 font-code-snippet text-xs">
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Claude Code</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Gemini</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">n8n</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Cursor</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Copilot</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Antigravity</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Spec-driven Dev</span>
                        </div>
                    </div>
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4">
                        <h3 class="font-label-sm text-label-sm uppercase text-secondary-fixed-dim mb-3" data-key="frontend_skills_title"></h3>
                        <div class="flex flex-wrap gap-2 font-code-snippet text-xs">
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">React.js</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">React Router</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">Context API</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">JavaScript ES6+</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">HTML5</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">CSS3</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim">Fetch API</span>
                        </div>
                    </div>
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4">
                        <h3 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-3" data-key="backend_skills_title"></h3>
                        <div class="flex flex-wrap gap-2 font-code-snippet text-xs">
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Go (Golang)</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Node.js</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Express.js</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">Python</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">RESTful APIs</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">JWT</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim">bcrypt</span>
                        </div>
                    </div>
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4">
                        <h3 class="font-label-sm text-label-sm uppercase text-tertiary-fixed-dim mb-3" data-key="db_skills_title"></h3>
                        <div class="flex flex-wrap gap-2 font-code-snippet text-xs">
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">MongoDB</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">MySQL</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">SQL</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">Git</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">GitHub</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">Agile / Scrum</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim">MVC</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- EXPERIENCE VIEW (filled in Task 6) -->
            <div class="view-content relative z-10 flex-1" id="view-experience"></div>

            <!-- EDUCATION VIEW (filled in Task 7) -->
            <div class="view-content relative z-10 flex-1" id="view-education"></div>

            <!-- CONTACT VIEW (filled in Task 8) -->
            <div class="view-content relative z-10 flex-1" id="view-contact"></div>
        </section>

        <!-- RIGHT INSPECTOR -->
        <aside class="hidden xl:flex flex-col h-full py-panel-margin bg-surface-container-low w-1/4 shrink-0 overflow-y-auto scroll-hidden px-4">
            <div class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-4 border-b border-outline-variant pb-2" data-key="inspector_title"></div>

            <div class="space-y-4 mb-8">
                <div class="border border-outline-variant p-2 clip-corner">
                    <div class="font-label-sm text-xs text-on-surface-variant uppercase mb-1" data-key="stat_projects"></div>
                    <div class="font-headline-md text-2xl text-primary-fixed-dim count-up" data-count="3">0</div>
                </div>
                <div class="border border-outline-variant p-2 clip-corner">
                    <div class="font-label-sm text-xs text-on-surface-variant uppercase mb-1" data-key="stat_certs"></div>
                    <div class="font-headline-md text-2xl text-secondary-fixed-dim count-up" data-count="4">0</div>
                </div>
                <div class="border border-outline-variant p-2 clip-corner">
                    <div class="font-label-sm text-xs text-on-surface-variant uppercase mb-1" data-key="stat_languages"></div>
                    <div class="font-headline-md text-2xl text-tertiary-fixed-dim count-up" data-count="2">0</div>
                </div>
            </div>

            <div class="mt-auto border border-outline-variant bg-[#0a0a0a] clip-corner p-4 flex-1 flex flex-col min-h-[200px]">
                <div class="font-label-sm text-label-sm uppercase text-secondary-fixed-dim mb-2 border-b border-outline-variant/50 pb-1" data-key="logs_title"></div>
                <div class="font-code-snippet text-xs text-on-surface-variant space-y-2 overflow-y-auto flex-1 scroll-hidden" id="realtime-logs"></div>
            </div>
        </aside>
    </main>

    <!-- BOTTOM TERMINAL / MOBILE NAV -->
    <footer class="fixed bottom-0 left-0 w-full bg-surface-container-highest border-t border-primary-container/30 drop-shadow-[0_-4px_12px_rgba(0,229,91,0.2)] z-50">
        <!-- Desktop terminal bar -->
        <div class="hidden md:flex h-12 w-full items-center px-4 bg-black border-t border-outline-variant font-code-snippet text-sm">
            <span class="text-primary-fixed-dim mr-2">guest@JDB-OS:~$</span>
            <input autocomplete="off" class="flex-1 bg-transparent border-none outline-none text-inverse-surface placeholder:text-on-surface-variant/50 focus:ring-0 focus:outline-none caret-primary-fixed-dim" id="cmd-input" data-key-placeholder="cmd_placeholder" spellcheck="false" type="text" />
        </div>
        <!-- Mobile bottom nav -->
        <nav class="md:hidden grid grid-cols-4 items-stretch h-16 w-full bg-black" id="mobile-nav">
            <a class="nav-btn flex flex-col items-center justify-center text-on-primary-fixed bg-primary-container p-1 border-t-2 border-primary-fixed-dim" data-target="view-overview">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
                <span class="font-code-snippet text-[9px] mt-0.5 uppercase" data-key="nav_overview"></span>
            </a>
            <a class="nav-btn flex flex-col items-center justify-center text-primary-fixed-dim p-1 opacity-70 border-t-2 border-transparent" data-target="view-experience">
                <span class="material-symbols-outlined">terminal</span>
                <span class="font-code-snippet text-[9px] mt-0.5 uppercase" data-key="nav_logs"></span>
            </a>
            <a class="nav-btn flex flex-col items-center justify-center text-primary-fixed-dim p-1 opacity-70 border-t-2 border-transparent" data-target="view-education">
                <span class="material-symbols-outlined">school</span>
                <span class="font-code-snippet text-[9px] mt-0.5 uppercase" data-key="nav_academy"></span>
            </a>
            <a class="nav-btn flex flex-col items-center justify-center text-primary-fixed-dim p-1 opacity-70 border-t-2 border-transparent" data-target="view-contact">
                <span class="material-symbols-outlined">connect_without_contact</span>
                <span class="font-code-snippet text-[9px] mt-0.5 uppercase" data-key="nav_contact"></span>
            </a>
        </nav>
    </footer>

    <script src="./script/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify the shell renders**

Run a static server from the project root: `python -m http.server 8080`
Open `http://localhost:8080/` in a browser.
Expected:
- Dark background with a faint green grid and scanline overlay.
- Left panel shows `JDB-OS v2.0`, the real profile photo, 4 nav items (text empty until JS — that is OK), 4 vital bars (collapsed to 0 width until JS), an empty-text language button, GITHUB/LINKEDIN links.
- Center shows the typewriter title and the Overview card area with skill tag groups (Claude Code, React.js, Go, MongoDB, etc. are visible because they are literal text, not `data-key`).
- Right panel (only at ≥1280px width) shows 3 stat boxes reading `0` and an empty logs box.
- Bottom shows the terminal prompt `guest@JDB-OS:~$`.
- Browser console: the only error allowed is `404 main.js` (created in Task 3). No other errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: JDB-OS SPA shell with left/center/right panels and overview view"
```

---

## Task 3: main.js — translations object (EN/ES)

**Files:**
- Create: `script/main.js`

- [ ] **Step 1: Create `script/main.js` with the full translations object and a DOMContentLoaded wrapper**

Create `script/main.js` with exactly this content (logic is added in Tasks 4–5; for now it defines translations and a no-op bootstrap so the page has no JS errors):

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // --- UI chrome ---
            ui_status_line: "STATUS: ONLINE · OPEN TO WORK",
            nav_overview: "Overview",
            nav_logs: "Project_Logs",
            nav_academy: "Academy_Data",
            nav_contact: "Contact",
            vitals_title: "System_Vitals",
            vital_backend: "BACKEND (Go/Node/Py)",
            vital_frontend: "FRONTEND (React/JS)",
            vital_ai: "AI & AUTOMATION",
            vital_data: "DATA (SQL/Mongo)",
            lang_toggle: "LANG: EN",
            inspector_title: "Sys_Inspector",
            stat_projects: "Projects_Logged",
            stat_certs: "Certs_Unlocked",
            stat_languages: "Languages",
            logs_title: "Realtime_Logs",
            cmd_placeholder: "Type 'help' or use the menu...",
            // --- View titles / subtitles ---
            title_overview: "> INIT_SEQUENCE_COMPLETE",
            subtitle_overview: "Welcome to JDB-OS Core. Profile loaded.",
            title_experience: "> PROJECT_LOGS.EXE",
            subtitle_experience: "Executing timeline data retrieval...",
            title_education: "> ACADEMY_DATA.BIN",
            subtitle_education: "Decrypting academic records...",
            title_contact: "> COMM_LINK.SH",
            subtitle_contact: "Establishing secure communication protocols...",
            // --- Profile / hero ---
            name: "Juan David Benavides",
            hero_title: "Full Stack Developer & AI Data Engineer",
            hero_subtitle: "Software Developer and AI Data Analyst specializing in AI-First solutions. I design and deploy AI agents, build high-scale architectures with Go (Golang), and develop full-stack applications with the MERN stack — delivering scalable, data-driven products in Agile environments.",
            hero_location: "Bogotá, Colombia",
            // --- Skills ---
            skills_title: "Skills & Technologies",
            ai_skills_title: "AI & Automation",
            frontend_skills_title: "Frontend",
            backend_skills_title: "Backend",
            db_skills_title: "Databases & Tools",
            // --- Experience (Project_Logs) ---
            experience_title: "Professional Experience",
            responsibilities_title: "Responsibilities",
            achievements_title: "Key Achievements",
            tech_title: "Technologies",
            current_badge: "Current",
            view_github: "View on GitHub",
            job_1_title: "Growth, Automation & Data Architecture Platform",
            job_1_company: "Bia",
            job_1_period: "Nov 2025 – Present · Hybrid",
            job_1_description: "Technical leadership in software and analytics solutions focused on business growth, process automation, and corporate data governance.",
            job_1_resp_1: "Designed the platform architecture using Go (Golang) for the backend and React for the frontend, ensuring high availability and performance.",
            job_1_resp_2: "Led the design and construction of a corporate Data Warehouse with a layered structure to centralize company-wide databases.",
            job_1_resp_3: "Integrated real-time data streams and utilized Claude Code to optimize business logic and accelerate the SDLC.",
            job_1_resp_4: "Developed advanced analytics modules transforming raw data into strategic daily performance insights.",
            job_1_ach_1: "Built an automated business analysis system that significantly reduced data interpretation time for the Growth team.",
            job_1_ach_2: "Created an interactive dashboard to detect anomalies and daily performance variations, enabling data-driven decision-making.",
            job_2_title: "Cinema Management Platform",
            job_2_company: "Campuslands",
            job_2_period: "Nov 2024 – Aug 2025 · Bogotá",
            job_2_description: "Full-stack web application to manage cinema operations — movies, users, and showtimes.",
            job_2_resp_1: "Responsible for the full-stack development of the web application.",
            job_2_resp_2: "Designed and implemented the backend with Node.js and Express, including a RESTful API for CRUD operations.",
            job_2_resp_3: "Integrated JWT for user authentication and endpoint protection.",
            job_2_resp_4: "Managed the database schema and data models in MongoDB.",
            job_2_ach_1: "Launched a fully functional platform capable of managing all core cinema operations.",
            job_2_ach_2: "Delivered a secure and scalable backend ensuring data integrity and controlled access.",
            job_3_title: "Bakery E-commerce Platform",
            job_3_company: "Coderhouse",
            job_3_period: "Jan 2024 – Jan 2025 · Virtual",
            job_3_description: "E-commerce application for a bakery with a focus on frontend development.",
            job_3_resp_1: "Designed and built an interactive, responsive UI to display a product catalog.",
            job_3_resp_2: "Implemented React Router for seamless SPA client-side navigation.",
            job_3_resp_3: "Built global cart state management (add, remove, summarize) using the React Context API.",
            job_3_ach_1: "Developed a complete and functional shopping cart, improving the purchasing experience.",
            job_3_ach_2: "Created a modular and maintainable codebase using React's component-based architecture.",
            // --- Education (Academy_Data) ---
            education_title: "Education & Training",
            degree_1: "Technical Degree in Software Programming",
            degree_1_place: "Campuslands · Bogotá, Colombia",
            degree_1_period: "Nov 2024 – Aug 2025",
            degree_2: "Web and Backend Development",
            degree_2_place: "Coderhouse · Virtual",
            degree_2_period: "Jan 2024 – Jan 2025",
            diplomas_title: "Certificates",
            diplomas_text: "Certified across the full web development stack — from frontend to backend.",
            // --- Contact (Comm_Link) ---
            contact_links_title: "Network Link Terminal",
            contact_form_title: "Transmission Port",
            contact_github: "GITHUB_REPO",
            contact_linkedin: "LINKEDIN_PROFILE",
            contact_email: "SECURE_EMAIL",
            form_name_placeholder: "SENDER_ID",
            form_msg_placeholder: "PAYLOAD_DATA...",
            form_submit: "Send Transmission",
            form_sent: "TRANSMISSION SENT — I'll reply soon.",
            // --- Footer copy (kept for parity) ---
            footer_copy: `© ${new Date().getFullYear()} Juan David Benavides. All Rights Reserved.`
        },
        es: {
            ui_status_line: "ESTADO: EN LÍNEA · DISPONIBLE",
            nav_overview: "General",
            nav_logs: "Registro_Proyectos",
            nav_academy: "Datos_Academia",
            nav_contact: "Contacto",
            vitals_title: "Constantes_Sistema",
            vital_backend: "BACKEND (Go/Node/Py)",
            vital_frontend: "FRONTEND (React/JS)",
            vital_ai: "IA & AUTOMATIZACIÓN",
            vital_data: "DATOS (SQL/Mongo)",
            lang_toggle: "IDIOMA: ES",
            inspector_title: "Inspector_Sis",
            stat_projects: "Proyectos",
            stat_certs: "Certificados",
            stat_languages: "Idiomas",
            logs_title: "Logs_En_Vivo",
            cmd_placeholder: "Escribe 'help' o usa el menú...",
            title_overview: "> SECUENCIA_INICIO_COMPLETA",
            subtitle_overview: "Bienvenido al núcleo JDB-OS. Perfil cargado.",
            title_experience: "> REGISTRO_PROYECTOS.EXE",
            subtitle_experience: "Recuperando datos de la línea de tiempo...",
            title_education: "> DATOS_ACADEMIA.BIN",
            subtitle_education: "Descifrando registros académicos...",
            title_contact: "> ENLACE_COM.SH",
            subtitle_contact: "Estableciendo protocolos de comunicación segura...",
            name: "Juan David Benavides",
            hero_title: "Desarrollador Full Stack & AI Data Engineer",
            hero_subtitle: "Desarrollador de Software y AI Data Analyst especializado en soluciones IA-First. Diseño y despliego agentes de IA, construyo arquitecturas de alta escala con Go (Golang), y desarrollo aplicaciones full-stack con el stack MERN — entregando productos escalables y basados en datos en entornos ágiles.",
            hero_location: "Bogotá, Colombia",
            skills_title: "Habilidades y Tecnologías",
            ai_skills_title: "IA & Automatización",
            frontend_skills_title: "Frontend",
            backend_skills_title: "Backend",
            db_skills_title: "Bases de Datos & Herramientas",
            experience_title: "Experiencia Profesional",
            responsibilities_title: "Roles y Responsabilidades",
            achievements_title: "Logros Clave",
            tech_title: "Tecnologías",
            current_badge: "Actual",
            view_github: "Ver en GitHub",
            job_1_title: "Plataforma de Growth, Automatización y Arquitectura de Datos",
            job_1_company: "Bia",
            job_1_period: "Nov 2025 – Presente · Híbrido",
            job_1_description: "Liderazgo técnico en el desarrollo de soluciones de software y analítica, centradas en el crecimiento del negocio, la automatización de procesos y la gobernanza de datos corporativos.",
            job_1_resp_1: "Diseñé la arquitectura de la plataforma usando Go (Golang) para el backend y React para el frontend, garantizando alta disponibilidad y rendimiento.",
            job_1_resp_2: "Lideré el diseño y construcción de un Data Warehouse corporativo con estructura por capas para centralizar las bases de datos de la compañía.",
            job_1_resp_3: "Integré flujos de datos en tiempo real y utilicé Claude Code para optimizar la lógica de negocio y acelerar el ciclo de vida de desarrollo.",
            job_1_resp_4: "Desarrollé módulos de analítica avanzada para transformar datos crudos en insights estratégicos de rendimiento diario.",
            job_1_ach_1: "Desarrollé un sistema de análisis automático que redujo significativamente el tiempo de interpretación de datos para el equipo de Growth.",
            job_1_ach_2: "Creé un panel de control interactivo para detectar anomalías y variaciones de rendimiento diario, facilitando la toma de decisiones basada en datos.",
            job_2_title: "Plataforma de Gestión de Cines",
            job_2_company: "Campuslands",
            job_2_period: "Nov 2024 – Ago 2025 · Bogotá",
            job_2_description: "Aplicación web full-stack para gestionar operaciones de un cine — películas, usuarios y horarios.",
            job_2_resp_1: "Responsable del desarrollo full-stack de la aplicación web.",
            job_2_resp_2: "Diseñé e implementé el backend con Node.js y Express, incluyendo una API RESTful para operaciones CRUD.",
            job_2_resp_3: "Integré JWT para la autenticación de usuarios y protección de endpoints.",
            job_2_resp_4: "Gestioné el esquema de la base de datos y modelos de datos en MongoDB.",
            job_2_ach_1: "Lancé una plataforma completamente funcional capaz de gestionar todas las operaciones principales del cine.",
            job_2_ach_2: "Entregué un backend seguro y escalable garantizando la integridad de los datos y el acceso controlado.",
            job_3_title: "Plataforma de E-commerce para Pastelería",
            job_3_company: "Coderhouse",
            job_3_period: "Ene 2024 – Ene 2025 · Virtual",
            job_3_description: "Aplicación de e-commerce para una pastelería con enfoque en el desarrollo frontend.",
            job_3_resp_1: "Diseñé y construí una interfaz de usuario interactiva y responsiva para mostrar un catálogo de productos.",
            job_3_resp_2: "Implementé React Router para la navegación del lado del cliente, creando una experiencia SPA fluida.",
            job_3_resp_3: "Construí la gestión de estado global del carrito (añadir, eliminar, resumir) usando la Context API de React.",
            job_3_ach_1: "Desarrollé un sistema de carrito de compras completo y funcional, mejorando la experiencia de compra.",
            job_3_ach_2: "Creé una base de código modular y mantenible aprovechando la arquitectura de componentes de React.",
            education_title: "Formación Académica",
            degree_1: "Técnico en Programación de Software",
            degree_1_place: "Campuslands · Bogotá, Colombia",
            degree_1_period: "Nov 2024 – Ago 2025",
            degree_2: "Desarrollo Web y Backend",
            degree_2_place: "Coderhouse · Virtual",
            degree_2_period: "Ene 2024 – Ene 2025",
            diplomas_title: "Certificados",
            diplomas_text: "Certificado en el stack completo de desarrollo web — frontend y backend.",
            contact_links_title: "Terminal de Enlace de Red",
            contact_form_title: "Puerto de Transmisión",
            contact_github: "REPO_GITHUB",
            contact_linkedin: "PERFIL_LINKEDIN",
            contact_email: "EMAIL_SEGURO",
            form_name_placeholder: "ID_REMITENTE",
            form_msg_placeholder: "DATOS_MENSAJE...",
            form_submit: "Enviar Transmisión",
            form_sent: "TRANSMISIÓN ENVIADA — responderé pronto.",
            footer_copy: `© ${new Date().getFullYear()} Juan David Benavides. Todos los derechos reservados.`
        }
    };

    // Expose for the logic added in Tasks 4–5.
    window.__JDBOS__ = { translations };
});
```

- [ ] **Step 2: Verify no JS errors and the script loads**

Reload `http://localhost:8080/`.
Expected: Browser console shows **no errors** (the previous `404 main.js` is gone). Run in the console: `window.__JDBOS__.translations.en.nav_logs` → returns `"Project_Logs"`. The UI text is still empty (wiring happens in Task 4) — that is expected.

- [ ] **Step 3: Commit**

```bash
git add script/main.js
git commit -m "feat: add bilingual translations object for JDB-OS"
```

---

## Task 4: main.js — i18n wiring, language toggle, view switching, hash routing

**Files:**
- Modify: `script/main.js` (replace the `window.__JDBOS__` line near the end)

- [ ] **Step 1: Replace the expose line with the i18n + SPA logic**

In `script/main.js`, find this line:

```javascript
    // Expose for the logic added in Tasks 4–5.
    window.__JDBOS__ = { translations };
```

Replace it with:

```javascript
    // ===== i18n =====
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    let currentLang = localStorage.getItem('lang') || 'en';

    const setLanguage = (lang) => {
        const dict = translations[lang];
        document.querySelectorAll('[data-key]').forEach(el => {
            const text = dict[el.getAttribute('data-key')];
            if (text !== undefined) el.innerHTML = text;
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(el => {
            const text = dict[el.getAttribute('data-key-placeholder')];
            if (text !== undefined) el.setAttribute('placeholder', text);
        });
        document.documentElement.lang = lang;
        const label = lang === 'en' ? 'LANG: EN » ES' : 'IDIOMA: ES » EN';
        if (langToggle) langToggle.textContent = label;
        if (langToggleMobile) langToggleMobile.textContent = lang.toUpperCase();
        localStorage.setItem('lang', lang);
        currentLang = lang;
        // Refresh the active view's typewriter title/subtitle in the new language.
        refreshViewHeader(getActiveViewId());
    };

    const toggleLang = () => setLanguage(currentLang === 'en' ? 'es' : 'en');
    if (langToggle) langToggle.addEventListener('click', toggleLang);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);

    // ===== SPA view switching =====
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view-content');
    const viewTitle = document.getElementById('view-title');
    const viewSubtitle = document.getElementById('view-subtitle');

    const titleKey = (viewId) => 'title_' + viewId.replace('view-', '');
    const subtitleKey = (viewId) => 'subtitle_' + viewId.replace('view-', '');

    const getActiveViewId = () => {
        const active = document.querySelector('.view-content.active');
        return active ? active.id : 'view-overview';
    };

    const refreshViewHeader = (viewId) => {
        const dict = translations[currentLang];
        viewTitle.textContent = dict[titleKey(viewId)] || '> JDB-OS';
        viewTitle.classList.remove('typewriter');
        void viewTitle.offsetWidth; // reflow to restart the animation
        viewTitle.classList.add('typewriter');
        viewSubtitle.textContent = dict[subtitleKey(viewId)] || '';
    };

    const activeNavClasses = "nav-btn flex items-center gap-3 font-label-sm text-label-sm uppercase text-on-primary-container bg-primary-container border-l-4 border-primary-fixed-dim p-2 w-full clip-corner crt-flicker cursor-pointer";
    const idleNavClasses = "nav-btn flex items-center gap-3 font-label-sm text-label-sm uppercase text-on-surface-variant p-2 w-full hover:bg-surface-variant hover:text-primary-fixed-dim transition-all duration-75 clip-corner border-l-4 border-transparent hover:border-outline-variant cursor-pointer";

    const switchView = (viewId, updateHash = true) => {
        if (!document.getElementById(viewId)) viewId = 'view-overview';

        views.forEach(v => v.classList.toggle('active', v.id === viewId));

        // Desktop sidebar nav styling (the mobile nav keeps its grid classes).
        document.querySelectorAll('#nav-menu .nav-btn').forEach(btn => {
            const isActive = btn.dataset.target === viewId;
            btn.className = isActive ? activeNavClasses : idleNavClasses;
            const icon = btn.querySelector('.material-symbols-outlined');
            if (icon) icon.style.fontVariationSettings = isActive ? "'FILL' 1" : "'FILL' 0";
        });

        // Mobile nav active state.
        document.querySelectorAll('#mobile-nav .nav-btn').forEach(btn => {
            const isActive = btn.dataset.target === viewId;
            btn.classList.toggle('bg-primary-container', isActive);
            btn.classList.toggle('text-on-primary-fixed', isActive);
            btn.classList.toggle('border-primary-fixed-dim', isActive);
            btn.classList.toggle('text-primary-fixed-dim', !isActive);
            btn.classList.toggle('opacity-70', !isActive);
            btn.classList.toggle('border-transparent', !isActive);
        });

        refreshViewHeader(viewId);
        document.getElementById('main-content').scrollTop = 0;
        if (updateHash) history.replaceState(null, '', '#' + viewId.replace('view-', ''));
        if (window.addSystemLog) window.addSystemLog('Switched view to ' + viewId.replace('view-', '').toUpperCase());
    };
    window.switchView = switchView;

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(btn.dataset.target);
        });
    });

    // ===== boot =====
    setLanguage(currentLang);
    const initialView = location.hash ? 'view-' + location.hash.slice(1) : 'view-overview';
    switchView(document.getElementById(initialView) ? initialView : 'view-overview', false);
    window.addEventListener('hashchange', () => {
        switchView('view-' + location.hash.slice(1), false);
    });
```

- [ ] **Step 2: Verify i18n + view switching**

Reload `http://localhost:8080/`.
Expected:
- All nav items, vitals labels, the language button (`LANG: EN » ES`), inspector labels and Overview copy now show **English** text.
- Click each left-panel nav item → the center view switches (Project_Logs / Academy_Data / Contact will be empty bodies for now, but the typewriter title + subtitle change and re-animate, and the URL hash updates to `#experience`, `#education`, `#contact`).
- Click the language button → all copy flips to **Spanish** and the active view header re-types in Spanish. Reload → Spanish persists (localStorage).
- Manually visit `http://localhost:8080/#education` → loads with Academy_Data active.

- [ ] **Step 3: Commit**

```bash
git add script/main.js
git commit -m "feat: wire i18n, language toggle, view switching and hash routing"
```

---

## Task 5: main.js — terminal, realtime logs, animated counters

**Files:**
- Modify: `script/main.js` (append before the closing `});` of the `DOMContentLoaded` callback)

- [ ] **Step 1: Append terminal + logs + counters logic**

In `script/main.js`, locate the final two lines of the `DOMContentLoaded` callback:

```javascript
    window.addEventListener('hashchange', () => {
        switchView('view-' + location.hash.slice(1), false);
    });
```

Immediately **after** those lines (still inside the `DOMContentLoaded` callback, before its closing `});`), add:

```javascript

    // ===== realtime logs =====
    const logsContainer = document.getElementById('realtime-logs');
    function addSystemLog(message, type = 'info') {
        if (!logsContainer) return;
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const p = document.createElement('p');
        let prefix = '[INFO]';
        if (type === 'error') { prefix = '[ERR ]'; p.className = 'text-error'; }
        else if (type === 'ok') { prefix = '[ OK ]'; p.className = 'text-primary-fixed-dim'; }
        else if (message.startsWith('>')) { prefix = '[USER]'; p.className = 'text-secondary-fixed-dim'; }
        p.textContent = `${prefix} ${time} - ${message}`;
        logsContainer.appendChild(p);
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }
    window.addSystemLog = addSystemLog;

    // Real boot sequence (honest facts about the profile).
    const bootLines = [
        ['Loading profile: Juan David Benavides', 'info'],
        ['Role: Full Stack Developer & AI Data Engineer', 'info'],
        ['Location: Bogotá, Colombia', 'info'],
        ['Stack: Go · React · Node · Python · MongoDB', 'info'],
        ['Status: Open to opportunities', 'ok']
    ];
    bootLines.forEach((line, i) => setTimeout(() => addSystemLog(line[0], line[1]), 350 * (i + 1)));

    // Ambient terminal flavor.
    const ambientEvents = [
        'Scanning incoming packets...',
        'Cache matrix updated.',
        'Ping received from 192.168.1.104',
        'Garbage collection executed. 12MB freed.',
        'CPU thermal levels normal.'
    ];
    setInterval(() => {
        if (Math.random() > 0.7) addSystemLog(ambientEvents[Math.floor(Math.random() * ambientEvents.length)]);
    }, 5000);

    // ===== animated counters =====
    function animateCount(el, target, duration = 1000) {
        const start = performance.now();
        const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            el.textContent = Math.round(p * target);
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }
    document.querySelectorAll('.count-up').forEach(el => {
        animateCount(el, parseInt(el.dataset.count, 10) || 0);
    });
    // Vital bars grow to their data-width after a tick so the transition runs.
    requestAnimationFrame(() => {
        document.querySelectorAll('.vital-bar').forEach(bar => {
            bar.style.width = (bar.dataset.width || '0') + '%';
        });
    });

    // ===== terminal command line =====
    const cmdInput = document.getElementById('cmd-input');
    const commandMap = {
        home: 'view-overview', overview: 'view-overview',
        experience: 'view-experience', logs: 'view-experience', projects: 'view-experience',
        education: 'view-education', academy: 'view-education',
        contact: 'view-contact'
    };
    if (cmdInput) {
        cmdInput.addEventListener('keypress', function (e) {
            if (e.key !== 'Enter') return;
            const cmd = this.value.trim().toLowerCase();
            this.value = '';
            if (cmd === '') return;
            addSystemLog('> ' + cmd);
            if (cmd === 'help') {
                addSystemLog("COMMANDS: overview, experience, education, contact, lang, clear, github, linkedin, help");
            } else if (cmd === 'clear') {
                logsContainer.innerHTML = '';
                addSystemLog('Console cleared.', 'ok');
            } else if (cmd === 'lang') {
                toggleLang();
                addSystemLog('Language switched.', 'ok');
            } else if (cmd === 'github') {
                window.open('https://github.com/juanda137', '_blank');
            } else if (cmd === 'linkedin') {
                window.open('https://www.linkedin.com/in/juan-david-benavides', '_blank');
            } else if (commandMap[cmd]) {
                switchView(commandMap[cmd]);
            } else {
                addSystemLog(`Command not found: ${cmd}. Type 'help'.`, 'error');
            }
        });
    }
```

- [ ] **Step 2: Verify terminal, logs and counters**

Reload `http://localhost:8080/`.
Expected:
- Right panel: the 3 stat numbers count up from 0 to **3**, **4**, **2**. The 4 vital bars animate from 0 to 90/85/95/80% width.
- Right panel logs print the boot sequence (`Loading profile: Juan David Benavides` … `Status: Open to opportunities`), then occasional ambient lines appear over time.
- In the bottom terminal, type `help` + Enter → command list logged. Type `experience` + Enter → switches to Project_Logs view. Type `lang` + Enter → language flips. Type `clear` + Enter → logs reset. Type `asdf` + Enter → red "Command not found" line.
- No console errors.

- [ ] **Step 3: Commit**

```bash
git add script/main.js
git commit -m "feat: terminal commands, real boot logs and animated counters"
```

---

## Task 6: Project_Logs view content (real experience)

**Files:**
- Modify: `index.html` — fill the empty `#view-experience` div

- [ ] **Step 1: Replace the empty experience view with the 3 real job logs**

In `index.html`, find:

```html
            <!-- EXPERIENCE VIEW (filled in Task 6) -->
            <div class="view-content relative z-10 flex-1" id="view-experience"></div>
```

Replace it with:

```html
            <!-- EXPERIENCE VIEW -->
            <div class="view-content relative z-10 flex-1" id="view-experience">
                <div class="space-y-6">

                    <!-- SYS_LOG_01 : Bia (current) -->
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4 relative group hover:border-primary-fixed-dim transition-colors">
                        <div class="flex items-start justify-between gap-3 mb-2 border-b border-outline-variant/50 pb-1">
                            <span class="font-label-sm text-label-sm uppercase text-primary-fixed-dim">SYS_LOG_01</span>
                            <span class="font-label-sm text-[10px] uppercase border border-primary-fixed-dim text-primary-fixed-dim px-2 py-0.5 clip-corner" data-key="current_badge"></span>
                        </div>
                        <h3 class="font-headline-md text-lg text-inverse-surface mt-2" data-key="job_1_title"></h3>
                        <div class="font-code-snippet text-xs text-primary-fixed-dim mb-1"><span data-key="job_1_company"></span> · <span data-key="job_1_period"></span></div>
                        <p class="font-code-snippet text-xs text-on-surface-variant italic mb-4" data-key="job_1_description"></p>

                        <div class="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2" data-key="responsibilities_title"></div>
                        <ul class="space-y-1 mb-4 font-code-snippet text-xs text-inverse-surface">
                            <li class="flex gap-2"><span class="text-primary-fixed-dim">→</span><span data-key="job_1_resp_1"></span></li>
                            <li class="flex gap-2"><span class="text-primary-fixed-dim">→</span><span data-key="job_1_resp_2"></span></li>
                            <li class="flex gap-2"><span class="text-primary-fixed-dim">→</span><span data-key="job_1_resp_3"></span></li>
                            <li class="flex gap-2"><span class="text-primary-fixed-dim">→</span><span data-key="job_1_resp_4"></span></li>
                        </ul>

                        <div class="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2" data-key="achievements_title"></div>
                        <ul class="space-y-1 mb-4 font-code-snippet text-xs text-inverse-surface">
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">★</span><span data-key="job_1_ach_1"></span></li>
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">★</span><span data-key="job_1_ach_2"></span></li>
                        </ul>

                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim text-[10px] font-label-sm">Go (Golang)</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim text-[10px] font-label-sm">React</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim text-[10px] font-label-sm">Data Warehouse</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim text-[10px] font-label-sm">Claude Code</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim text-[10px] font-label-sm">n8n</span>
                            <span class="px-2 py-1 bg-surface-variant text-primary-fixed-dim text-[10px] font-label-sm">SQL</span>
                        </div>
                    </div>

                    <!-- SYS_LOG_02 : Campuslands cinema -->
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4 relative group hover:border-secondary-fixed-dim transition-colors">
                        <div class="font-label-sm text-label-sm uppercase text-secondary-fixed-dim mb-2 border-b border-outline-variant/50 pb-1 inline-block">SYS_LOG_02</div>
                        <h3 class="font-headline-md text-lg text-inverse-surface mt-2" data-key="job_2_title"></h3>
                        <div class="font-code-snippet text-xs text-secondary-fixed-dim mb-1"><span data-key="job_2_company"></span> · <span data-key="job_2_period"></span></div>
                        <p class="font-code-snippet text-xs text-on-surface-variant italic mb-4" data-key="job_2_description"></p>

                        <div class="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2" data-key="responsibilities_title"></div>
                        <ul class="space-y-1 mb-4 font-code-snippet text-xs text-inverse-surface">
                            <li class="flex gap-2"><span class="text-secondary-fixed-dim">→</span><span data-key="job_2_resp_1"></span></li>
                            <li class="flex gap-2"><span class="text-secondary-fixed-dim">→</span><span data-key="job_2_resp_2"></span></li>
                            <li class="flex gap-2"><span class="text-secondary-fixed-dim">→</span><span data-key="job_2_resp_3"></span></li>
                            <li class="flex gap-2"><span class="text-secondary-fixed-dim">→</span><span data-key="job_2_resp_4"></span></li>
                        </ul>

                        <div class="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2" data-key="achievements_title"></div>
                        <ul class="space-y-1 mb-4 font-code-snippet text-xs text-inverse-surface">
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">★</span><span data-key="job_2_ach_1"></span></li>
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">★</span><span data-key="job_2_ach_2"></span></li>
                        </ul>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim text-[10px] font-label-sm">Node.js</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim text-[10px] font-label-sm">Express.js</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim text-[10px] font-label-sm">MongoDB</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim text-[10px] font-label-sm">JWT</span>
                            <span class="px-2 py-1 bg-surface-variant text-secondary-fixed-dim text-[10px] font-label-sm">JavaScript</span>
                        </div>
                        <a class="inline-flex items-center gap-1 font-code-snippet text-xs text-secondary-fixed-dim hover:underline" href="https://github.com/juanda137/proyecto_gestion_cine_benavidesfiallo_juandavid" target="_blank" rel="noopener noreferrer">
                            <span class="material-symbols-outlined text-[16px]">code</span><span data-key="view_github"></span>
                        </a>
                    </div>

                    <!-- SYS_LOG_03 : Coderhouse bakery -->
                    <div class="border border-outline-variant bg-[#0a0a0a] clip-corner p-4 relative group hover:border-tertiary-fixed-dim transition-colors">
                        <div class="font-label-sm text-label-sm uppercase text-tertiary-fixed-dim mb-2 border-b border-outline-variant/50 pb-1 inline-block">SYS_LOG_03</div>
                        <h3 class="font-headline-md text-lg text-inverse-surface mt-2" data-key="job_3_title"></h3>
                        <div class="font-code-snippet text-xs text-tertiary-fixed-dim mb-1"><span data-key="job_3_company"></span> · <span data-key="job_3_period"></span></div>
                        <p class="font-code-snippet text-xs text-on-surface-variant italic mb-4" data-key="job_3_description"></p>

                        <div class="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2" data-key="responsibilities_title"></div>
                        <ul class="space-y-1 mb-4 font-code-snippet text-xs text-inverse-surface">
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">→</span><span data-key="job_3_resp_1"></span></li>
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">→</span><span data-key="job_3_resp_2"></span></li>
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">→</span><span data-key="job_3_resp_3"></span></li>
                        </ul>

                        <div class="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2" data-key="achievements_title"></div>
                        <ul class="space-y-1 mb-4 font-code-snippet text-xs text-inverse-surface">
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">★</span><span data-key="job_3_ach_1"></span></li>
                            <li class="flex gap-2"><span class="text-tertiary-fixed-dim">★</span><span data-key="job_3_ach_2"></span></li>
                        </ul>

                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim text-[10px] font-label-sm">React.js</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim text-[10px] font-label-sm">React Router</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim text-[10px] font-label-sm">Context API</span>
                            <span class="px-2 py-1 bg-surface-variant text-tertiary-fixed-dim text-[10px] font-label-sm">JavaScript ES6+</span>
                        </div>
                    </div>

                </div>
            </div>
```

- [ ] **Step 2: Verify the experience view**

Reload, then click **Project_Logs** (or type `experience`).
Expected: 3 cards (SYS_LOG_01 Bia with the "Current" badge, SYS_LOG_02 Campuslands cinema with a working GitHub link, SYS_LOG_03 Coderhouse bakery). All responsibilities/achievements/tech show real text. Toggle language → all card copy flips EN/ES.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: populate Project_Logs view with real experience"
```

---

## Task 7: Academy_Data view content (education + certificates)

**Files:**
- Modify: `index.html` — fill the empty `#view-education` div

- [ ] **Step 1: Replace the empty education view**

In `index.html`, find:

```html
            <!-- EDUCATION VIEW (filled in Task 7) -->
            <div class="view-content relative z-10 flex-1" id="view-education"></div>
```

Replace it with:

```html
            <!-- EDUCATION VIEW -->
            <div class="view-content relative z-10 flex-1" id="view-education">
                <h2 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-4 border-b border-outline-variant pb-2" data-key="education_title"></h2>
                <div class="space-y-4 font-code-snippet text-sm text-inverse-surface mb-10">
                    <div class="flex items-start gap-4 border-l-2 border-primary-fixed-dim pl-4 py-2 hover:bg-surface-variant/30 transition-colors">
                        <span class="material-symbols-outlined text-primary-fixed-dim mt-1">school</span>
                        <div>
                            <div class="font-bold text-primary-fixed-dim" data-key="degree_1"></div>
                            <div class="text-xs text-on-surface-variant mt-1" data-key="degree_1_place"></div>
                            <div class="text-xs text-on-surface-variant/70" data-key="degree_1_period"></div>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 border-l-2 border-secondary-fixed-dim pl-4 py-2 hover:bg-surface-variant/30 transition-colors">
                        <span class="material-symbols-outlined text-secondary-fixed-dim mt-1">terminal</span>
                        <div>
                            <div class="font-bold text-secondary-fixed-dim" data-key="degree_2"></div>
                            <div class="text-xs text-on-surface-variant mt-1" data-key="degree_2_place"></div>
                            <div class="text-xs text-on-surface-variant/70" data-key="degree_2_period"></div>
                        </div>
                    </div>
                </div>

                <h2 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-2 border-b border-outline-variant pb-2" data-key="diplomas_title"></h2>
                <p class="font-code-snippet text-xs text-on-surface-variant mb-4" data-key="diplomas_text"></p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img src="./images/desarrolloWeb.png" alt="Certificado de Desarrollo Web" class="w-full h-auto border border-outline-variant clip-corner hover:border-primary-fixed-dim transition-colors" />
                    <img src="./images/javascript.png" alt="Certificado de JavaScript" class="w-full h-auto border border-outline-variant clip-corner hover:border-primary-fixed-dim transition-colors" />
                    <img src="./images/backend.png" alt="Certificado de Backend" class="w-full h-auto border border-outline-variant clip-corner hover:border-primary-fixed-dim transition-colors" />
                    <img src="./images/reactDiploma.png" alt="Certificado de React.js" class="w-full h-auto border border-outline-variant clip-corner hover:border-primary-fixed-dim transition-colors" />
                </div>
            </div>
```

- [ ] **Step 2: Verify the education view**

Reload, click **Academy_Data** (or type `education`).
Expected: 2 education entries (Campuslands, Coderhouse) with place + period, then the 4 certificate images render from `./images/`. Language toggle flips the labels. Note: image paths are root-relative (`./images/...`) because the SPA lives at the project root.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: populate Academy_Data view with education and certificates"
```

---

## Task 8: Contact view content (links + transmission form)

**Files:**
- Modify: `index.html` — fill the empty `#view-contact` div

- [ ] **Step 1: Replace the empty contact view**

In `index.html`, find:

```html
            <!-- CONTACT VIEW (filled in Task 8) -->
            <div class="view-content relative z-10 flex-1" id="view-contact"></div>
```

Replace it with:

```html
            <!-- CONTACT VIEW -->
            <div class="view-content relative z-10 flex-1" id="view-contact">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-4 border-b border-outline-variant pb-2" data-key="contact_links_title"></h2>
                        <div class="space-y-3 font-code-snippet text-sm">
                            <a class="flex items-center gap-3 p-3 border border-outline-variant hover:border-primary-fixed-dim hover:text-primary-fixed-dim bg-[#0a0a0a] transition-colors clip-corner text-on-surface-variant" href="https://github.com/juanda137" target="_blank" rel="noopener noreferrer">
                                <span class="material-symbols-outlined">code</span><span data-key="contact_github"></span>
                            </a>
                            <a class="flex items-center gap-3 p-3 border border-outline-variant hover:border-secondary-fixed-dim hover:text-secondary-fixed-dim bg-[#0a0a0a] transition-colors clip-corner text-on-surface-variant" href="https://www.linkedin.com/in/juan-david-benavides" target="_blank" rel="noopener noreferrer">
                                <span class="material-symbols-outlined">work</span><span data-key="contact_linkedin"></span>
                            </a>
                            <a class="flex items-center gap-3 p-3 border border-outline-variant hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim bg-[#0a0a0a] transition-colors clip-corner text-on-surface-variant" href="mailto:juanda.benavidesf@gmail.com">
                                <span class="material-symbols-outlined">mail</span><span data-key="contact_email"></span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-label-sm text-label-sm uppercase text-primary-fixed-dim mb-4 border-b border-outline-variant pb-2" data-key="contact_form_title"></h2>
                        <form class="space-y-4" id="contact-form" action="mailto:juanda.benavidesf@gmail.com" method="post" enctype="text/plain">
                            <input class="w-full bg-[#0a0a0a] border border-outline-variant focus:border-primary-fixed-dim text-inverse-surface font-code-snippet text-xs p-3 outline-none focus:ring-0 clip-corner" data-key-placeholder="form_name_placeholder" name="sender" type="text" required />
                            <textarea class="w-full bg-[#0a0a0a] border border-outline-variant focus:border-primary-fixed-dim text-inverse-surface font-code-snippet text-xs p-3 outline-none focus:ring-0 clip-corner resize-none" data-key-placeholder="form_msg_placeholder" name="payload" rows="4" required></textarea>
                            <button class="w-full bg-primary-container/10 border border-primary-fixed-dim text-primary-fixed-dim font-label-sm py-3 uppercase tracking-widest clip-corner hover:bg-primary-fixed-dim hover:text-black transition-colors" type="submit" data-key="form_submit"></button>
                        </form>
                    </div>
                </div>
            </div>
```

- [ ] **Step 2: Wire the form submit to a confirmation log in `script/main.js`**

In `script/main.js`, inside the `DOMContentLoaded` callback (a good spot is right after the `cmdInput` block from Task 5), add:

```javascript

    // ===== contact form =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            // The mailto action opens the user's mail client; log a confirmation too.
            addSystemLog(translations[currentLang].form_sent, 'ok');
        });
    }
```

- [ ] **Step 3: Verify the contact view**

Reload, click **Contact** (or type `contact`).
Expected: left column shows GITHUB_REPO / LINKEDIN_PROFILE / SECURE_EMAIL links (GitHub + LinkedIn open in a new tab, email opens mail client). Right column shows the transmission form with translated placeholders. Submitting with both fields filled opens the mail client and logs the confirmation line in the right panel. Language toggle flips all labels/placeholders.

- [ ] **Step 4: Commit**

```bash
git add index.html script/main.js
git commit -m "feat: populate Contact view with real links and transmission form"
```

---

## Task 9: Old pages → redirects

The SPA now owns all content. Convert the two old pages to redirects so existing bookmarks/links resolve to the matching view.

**Files:**
- Modify (full rewrite): `pages/experience.html`
- Modify (full rewrite): `pages/education.html`

- [ ] **Step 1: Overwrite `pages/experience.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=../index.html#experience" />
    <link rel="canonical" href="../index.html" />
    <title>Redirecting… — Juan David Benavides</title>
    <script>location.replace('../index.html#experience');</script>
</head>
<body style="background:#000;color:#00e55b;font-family:monospace;padding:2rem;">
    Redirecting to JDB-OS… <a href="../index.html#experience" style="color:#00ff66;">click here</a>.
</body>
</html>
```

- [ ] **Step 2: Overwrite `pages/education.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=../index.html#education" />
    <link rel="canonical" href="../index.html" />
    <title>Redirecting… — Juan David Benavides</title>
    <script>location.replace('../index.html#education');</script>
</head>
<body style="background:#000;color:#00e55b;font-family:monospace;padding:2rem;">
    Redirecting to JDB-OS… <a href="../index.html#education" style="color:#00ff66;">click here</a>.
</body>
</html>
```

- [ ] **Step 3: Verify redirects**

Visit `http://localhost:8080/pages/experience.html` → lands on the SPA with the **Project_Logs** view active. Visit `http://localhost:8080/pages/education.html` → lands on **Academy_Data**.

- [ ] **Step 4: Commit**

```bash
git add pages/experience.html pages/education.html
git commit -m "refactor: redirect legacy pages into the JDB-OS SPA views"
```

---

## Task 10: Final integration & responsive pass

**Files:**
- Verify only (no new code unless a defect is found).

- [ ] **Step 1: Desktop full sweep (≥1280px)**

With `python -m http.server 8080` running, open `http://localhost:8080/` at a wide window. Confirm:
- Three panels visible; grid + scanlines present; typewriter title animates on each view switch.
- All four nav items switch views, hash updates, active styles move (sidebar + that the crt-flicker active state is on the current item).
- Vitals animate once on load; right-panel counters reach 3 / 4 / 2; boot logs print in order.
- Terminal: `help`, `overview`, `experience`, `education`, `contact`, `lang`, `clear`, `github`, `linkedin`, and an invalid command all behave per Task 5.
- Language toggle flips every visible string including the active view header; reload preserves the language.

- [ ] **Step 2: Tablet (md, ~800px)**

Resize to ~800px. Confirm: right inspector panel is hidden (`xl` only), left panel + center still shown, bottom terminal bar present and usable.

- [ ] **Step 3: Mobile (<768px)**

Resize to ~375px. Confirm:
- Mobile top bar shows `JDB-OS` + language button (toggles EN/ES).
- Left/right desktop panels hidden; center console fills width between top bar and bottom nav.
- Bottom 4-icon nav switches views and shows the active item highlighted; hash updates.
- No horizontal scroll; content scrolls vertically inside the console.

- [ ] **Step 4: Cross-check for regressions**

- View page source / DevTools: every human-readable string in the four views resolves (no empty `data-key` elements left blank after load).
- Console has zero errors across all views and both languages.
- Profile photo and all 4 certificate images load (paths `./images/...`).

If any check fails, fix the specific file and re-verify that step before committing.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "test: verify JDB-OS SPA across desktop, tablet and mobile"
```

---

## Self-Review (already performed against the spec)

- **Spec coverage:** SPA layout (Tasks 2,4), real telemetry (vitals Task 2 + counters Task 5), terminal (Task 5), all 4 views with real content (Tasks 2,6,7,8), i18n preserved + extended (Tasks 3,4), redirects (Task 9), responsive (Task 10). ✅
- **Placeholder scan:** no "TBD"/"add error handling"/"similar to Task N" — every code step is complete and literal. ✅
- **Type/identifier consistency:** `switchView`, `addSystemLog`, `setLanguage`, `toggleLang`, `refreshViewHeader`, `getActiveViewId`, the view IDs (`view-overview/experience/education/contact`), `data-key`, `data-key-placeholder`, `data-width`, `data-count`, and the `.nav-btn`/`.vital-bar`/`.count-up` class hooks are used consistently across HTML and JS. The title/subtitle keys (`title_*`, `subtitle_*`) used by `refreshViewHeader` all exist in both `en` and `es`. ✅

## Notes / follow-ups for the user (optional, not in scope)

- The contact form uses a `mailto:` action (no backend exists). If you later want real inbox delivery without a server, a Formspree/Web3Forms endpoint can replace the `action` — that would be a separate small task.
- `SEC-LEVEL`/`LOG_ID` flavor from the mock was dropped in favor of the honest `STATUS: ONLINE · OPEN TO WORK` line; say the word if you want the sci-fi badges back.
```