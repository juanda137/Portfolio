document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // --- UI chrome ---
            ui_status_line: "STATUS: ONLINE · OPEN TO WORK",
            nav_overview: "Overview",
            nav_logs: "Project_Logs",
            nav_academy: "Academy_Data",
            nav_contact: "Contact",
            nav_logs_short: "Projects",
            nav_academy_short: "Education",
            latest_log_title: "Latest Log",
            latest_log_more: "View all logs",
            vitals_title: "System_Vitals",
            vital_backend: "BACKEND (Go/Node/Py)",
            vital_frontend: "FRONTEND (React/JS)",
            vital_ai: "AI & AUTOMATION",
            vital_data: "DATA (SQL/Mongo)",
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
            hero_title: "AI-First Software Developer & Data Analyst",
            hero_subtitle: "AI-First Software Developer and Data Analyst focused on intelligent systems and high-scale architectures — from designing autonomous AI agents and custom skills to high-performance backends with Go (Golang) and the MERN stack.",
            hero_about_2: "Currently at Bia, I architect an Enterprise Operations & Business Intelligence Platform and led the design of a multi-layered corporate Data Warehouse with a unified 'Gold Layer' single source of truth. I leverage tools like Claude Code, Gemini, and Codex to accelerate the SDLC — driven by transforming raw data into scalable corporate value.",
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
            job_1_description: "Technical leadership in the development of software and analytics solutions, focused on business growth, process automation, and corporate data governance.",
            job_1_resp_1: "Conceptualized, designed, and deployed highly scalable microservices using Go (Golang), tailored for high-throughput, real-time data processing pipelines and concurrent service communication.",
            job_1_resp_2: "Engineered a comprehensive, multi-layered corporate Data Warehouse using PostgreSQL, centralizing and structuring complex, fragmented datasets from all core business departments.",
            job_1_resp_3: "Developed a robust enterprise business intelligence platform using React, architecting a modular interface with dedicated sections and nested sub-pages for every business unit, paired with a global overview dashboard and real-time data visualizations.",
            job_1_resp_4: "Deeply embedded cutting-edge AI tools like Claude Code and Codex into the daily software development lifecycle to drastically accelerate sprint velocity, automate unit testing, and perform deep codebase refactorings.",
            job_1_ach_1: "Eliminated enterprise-wide data silos by establishing a unified 'Gold Layer' data architecture, providing a single, trusted source of truth for all corporate decision-making and cross-departmental alignment.",
            job_1_ach_2: "Consolidated scattered corporate metrics into a single, cohesive platform, delivering high-level macro overviews alongside granular, nested deep dives for every department, significantly accelerating data-driven strategic planning across the organization.",
            job_1_ach_3: "Architected and automated an end-to-end data pipeline that ingests raw, real-time energy consumption metrics, performs automated analytical calculations, and dynamically generates detailed, client-ready PDF reports, directly enhancing customer value delivery.",
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
            form_sent: "TRANSMISSION SENT — I'll reply soon."
        },
        es: {
            ui_status_line: "ESTADO: EN LÍNEA · DISPONIBLE",
            nav_overview: "General",
            nav_logs: "Registro_Proyectos",
            nav_academy: "Datos_Academia",
            nav_contact: "Contacto",
            nav_logs_short: "Proyectos",
            nav_academy_short: "Estudios",
            latest_log_title: "Última Experiencia",
            latest_log_more: "Ver todos",
            vitals_title: "Constantes_Sistema",
            vital_backend: "BACKEND (Go/Node/Py)",
            vital_frontend: "FRONTEND (React/JS)",
            vital_ai: "IA & AUTOMATIZACIÓN",
            vital_data: "DATOS (SQL/Mongo)",
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
            hero_title: "Desarrollador de Software AI-First & Data Analyst",
            hero_subtitle: "Desarrollador de Software AI-First y Data Analyst enfocado en sistemas inteligentes y arquitecturas de alta escala — desde el diseño de agentes de IA autónomos y skills personalizadas hasta backends de alto rendimiento con Go (Golang) y el stack MERN.",
            hero_about_2: "Actualmente en Bia, diseño la arquitectura de una Plataforma Empresarial de Operaciones y Business Intelligence, y lideré el diseño de un Data Warehouse corporativo multicapa con una fuente única de verdad ('Capa Gold'). Aprovecho herramientas como Claude Code, Gemini y Codex para acelerar el ciclo de desarrollo — motivado por transformar datos crudos en valor corporativo escalable.",
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
            job_1_resp_1: "Conceptualicé, diseñé y desplegué microservicios altamente escalables con Go (Golang), orientados a pipelines de procesamiento de datos en tiempo real de alto rendimiento y comunicación concurrente entre servicios.",
            job_1_resp_2: "Diseñé un Data Warehouse corporativo integral de múltiples capas con PostgreSQL, centralizando y estructurando datos complejos y fragmentados de todos los departamentos clave del negocio.",
            job_1_resp_3: "Desarrollé una robusta plataforma empresarial de business intelligence con React, con una interfaz modular de secciones dedicadas y subpáginas anidadas para cada unidad de negocio, junto con un dashboard global y visualizaciones de datos en tiempo real.",
            job_1_resp_4: "Integré profundamente herramientas de IA de vanguardia como Claude Code y Codex en el ciclo de vida de desarrollo para acelerar drásticamente la velocidad de los sprints, automatizar pruebas unitarias y realizar refactorizaciones profundas del código.",
            job_1_ach_1: "Eliminé los silos de datos a nivel empresarial estableciendo una arquitectura de datos unificada de 'Capa Gold', proporcionando una fuente única y confiable de verdad para la toma de decisiones corporativas y la alineación entre departamentos.",
            job_1_ach_2: "Consolidé métricas corporativas dispersas en una única plataforma cohesiva, con vistas macro de alto nivel y análisis granulares anidados por departamento, acelerando significativamente la planificación estratégica basada en datos en toda la organización.",
            job_1_ach_3: "Diseñé y automaticé un pipeline de datos end-to-end que ingiere métricas de consumo energético en tiempo real, realiza cálculos analíticos automatizados y genera dinámicamente reportes PDF detallados listos para el cliente, mejorando directamente la entrega de valor.",
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
            form_sent: "TRANSMISIÓN ENVIADA — responderé pronto."
        }
    };

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
        const label = lang === 'en' ? 'EN » ES' : 'ES » EN';
        const langLabelEl = document.getElementById('lang-toggle-label');
        if (langLabelEl) langLabelEl.textContent = label;
        else if (langToggle) langToggle.textContent = label;
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

    // ===== realtime logs (mirrored to the side panel and the full-screen terminal) =====
    const logsContainer = document.getElementById('realtime-logs');
    function addSystemLog(message, type = 'info') {
        const targets = [logsContainer, document.getElementById('fs-logs')].filter(Boolean);
        if (!targets.length) return;
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        let prefix = '[INFO]', cls = '';
        if (type === 'error') { prefix = '[ERR ]'; cls = 'text-error'; }
        else if (type === 'ok') { prefix = '[ OK ]'; cls = 'text-primary-fixed-dim'; }
        else if (message.startsWith('>')) { prefix = '[USER]'; cls = 'text-secondary-fixed-dim'; }
        const text = `${prefix} ${time} - ${message}`;
        targets.forEach((c) => {
            const p = document.createElement('p');
            p.className = cls;
            p.textContent = text;
            c.appendChild(p);
            c.scrollTop = c.scrollHeight;
        });
    }
    window.addSystemLog = addSystemLog;

    // Real boot sequence (honest facts about the profile).
    const bootLines = [
        ['Loading profile: Juan David Benavides', 'info'],
        ['Role: AI-First Software Developer & Data Analyst', 'info'],
        ['Location: Bogotá, Colombia', 'info'],
        ['Stack: Go · React · Node · Python · MongoDB', 'info'],
        ['Status: Open to opportunities', 'ok']
    ];

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
    // Counters, vital bars and side-panel boot logs are triggered by
    // runRevealAnimations() once the full-screen boot intro finishes.

    // ===== terminal command line =====
    const commandMap = {
        home: 'view-overview', overview: 'view-overview',
        experience: 'view-experience', logs: 'view-experience', projects: 'view-experience',
        education: 'view-education', academy: 'view-education',
        contact: 'view-contact'
    };

    // Full-screen terminal
    const fsTerminal = document.getElementById('terminal-fullscreen');
    const fsLogs = document.getElementById('fs-logs');
    const fsInput = document.getElementById('fs-input');
    const isFsOpen = () => fsTerminal && fsTerminal.style.display === 'flex';

    function openTerminal() {
        if (!fsTerminal) return;
        if (fsLogs && logsContainer) fsLogs.innerHTML = logsContainer.innerHTML; // carry the backlog over
        fsTerminal.style.display = 'flex';
        if (fsLogs) fsLogs.scrollTop = fsLogs.scrollHeight;
        if (fsInput) fsInput.focus();
        addSystemLog('Terminal maximized. Type "help" for the command list.', 'ok');
    }
    function closeTerminal() {
        if (fsTerminal) fsTerminal.style.display = 'none';
    }
    function goView(viewId) {
        switchView(viewId);
        if (isFsOpen()) closeTerminal();
    }
    function triggerGlitch() {
        // Glitch the whole UI shell (both sidebars, center console, terminal bar),
        // falling back to the center panel if the shell wrapper is absent.
        const shell = document.getElementById('app-shell') || document.getElementById('main-content');
        if (!shell) return;
        shell.classList.remove('page-glitch-in');
        void shell.offsetWidth;
        shell.classList.add('page-glitch-in');
        setTimeout(() => shell.classList.remove('page-glitch-in'), 600);
    }

    // ===== color theme + interactive menu =====
    const colorThemes = [
        { key: 'green', label: 'Green (default)', accent: '#00e55b', bright: '#00ff66', ink: '#00381a', rgb: '0, 255, 102' },
        { key: 'red',   label: 'Red',             accent: '#ff4d4d', bright: '#ff1a1a', ink: '#3d0000', rgb: '255, 45, 45' },
        { key: 'blue',  label: 'Blue',            accent: '#22a7ff', bright: '#0095ff', ink: '#00233d', rgb: '0, 149, 255' }
    ];
    function applyColorTheme(t) {
        const s = document.documentElement.style;
        s.setProperty('--accent', t.accent);
        s.setProperty('--accent-bright', t.bright);
        s.setProperty('--accent-ink', t.ink);
        s.setProperty('--accent-rgb', t.rgb);
        localStorage.setItem('accent', t.key);
    }
    (function loadSavedAccent() {
        const saved = localStorage.getItem('accent');
        const t = saved && colorThemes.find((x) => x.key === saved);
        if (t) applyColorTheme(t);
    })();

    let colorMenuActive = false;
    let colorMenuIndex = 0;
    let colorMenuEl = null;
    const accentIndex = () => {
        const i = colorThemes.findIndex((t) => t.key === (localStorage.getItem('accent') || 'green'));
        return i < 0 ? 0 : i;
    };
    function renderColorMenu() {
        if (!colorMenuEl) return;
        colorMenuEl.innerHTML = '';
        const head = document.createElement('p');
        head.className = 'text-secondary-fixed-dim';
        head.textContent = 'Select primary color — ↑/↓ + Enter (or click · Esc cancels)';
        colorMenuEl.appendChild(head);
        colorThemes.forEach((t, i) => {
            const row = document.createElement('p');
            const sel = i === colorMenuIndex;
            row.className = 'cursor-pointer ' + (sel ? 'text-inverse-surface' : 'text-on-surface-variant');
            row.innerHTML = (sel ? '❯ ' : '&nbsp;&nbsp;') + '<span style="color:' + t.accent + '">●</span> ' + t.label;
            row.addEventListener('click', () => { colorMenuIndex = i; commitColorMenu(); });
            colorMenuEl.appendChild(row);
        });
        const c = colorMenuEl.parentElement;
        if (c) c.scrollTop = c.scrollHeight;
    }
    function refocusTerminalInput() {
        const inp = isFsOpen() ? fsInput : document.getElementById('cmd-input');
        if (inp) inp.focus();
    }
    function openColorMenu() {
        if (colorMenuActive) return;
        // Ensure a visible log surface: if the side panel is hidden (md/lg widths)
        // and the terminal isn't maximized, maximize it so the menu is visible.
        if (!isFsOpen() && (!logsContainer || logsContainer.offsetParent === null)) openTerminal();
        const container = isFsOpen() ? fsLogs : logsContainer;
        if (!container) return;
        colorMenuActive = true;
        colorMenuIndex = accentIndex();
        colorMenuEl = document.createElement('div');
        colorMenuEl.className = 'color-menu border-l-2 border-primary-fixed-dim pl-2 my-1';
        container.appendChild(colorMenuEl);
        if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
        renderColorMenu();
    }
    function commitColorMenu() {
        if (!colorMenuActive) return;
        const t = colorThemes[colorMenuIndex];
        applyColorTheme(t);
        colorMenuActive = false;
        colorMenuEl = null;
        addSystemLog('Primary color set to ' + t.label.replace(' (default)', '') + '. ✦', 'ok');
        refocusTerminalInput();
    }
    function cancelColorMenu() {
        if (!colorMenuActive) return;
        colorMenuActive = false;
        if (colorMenuEl && colorMenuEl.parentElement) colorMenuEl.parentElement.removeChild(colorMenuEl);
        colorMenuEl = null;
        addSystemLog('Color selection cancelled.', 'error');
        refocusTerminalInput();
    }

    function runCommand(rawValue) {
        const value = rawValue.trim();
        const cmd = value.toLowerCase();
        if (cmd === '') return;
        addSystemLog('> ' + value);

        if (cmd.startsWith('echo ')) { addSystemLog(value.slice(5)); return; }
        if (cmd.startsWith('sudo')) { addSystemLog('[sudo] password for guest: ********  ->  permission denied. Nice try. 😏', 'error'); return; }
        if (cmd.startsWith('rm -rf')) { addSystemLog('Formatting /dev/portfolio... PSYCH. 😅 This site is bulletproof.', 'error'); return; }

        switch (cmd) {
            case 'help':
                addSystemLog('COMMANDS: overview, experience, education, contact, lang, color, clear, github, linkedin, whoami, ls, date, hireme, coffee, glitch, matrix, exit, help');
                addSystemLog('psst... a few hidden ones are out there too. 🤫', 'ok');
                break;
            case 'clear':
                [logsContainer, fsLogs].forEach((c) => { if (c) c.innerHTML = ''; });
                addSystemLog('Console cleared.', 'ok');
                break;
            case 'lang':
                toggleLang();
                addSystemLog('Language switched.', 'ok');
                break;
            case 'github':
                addSystemLog('Opening GitHub...', 'ok');
                window.open('https://github.com/juanda137', '_blank');
                break;
            case 'linkedin':
                addSystemLog('Opening LinkedIn...', 'ok');
                window.open('https://www.linkedin.com/in/juan-david-benavides', '_blank');
                break;
            case 'whoami':
                addSystemLog('guest@JDB-OS — operated by Juan David Benavides · AI-First Software Developer & Data Analyst.', 'ok');
                break;
            case 'ls':
                addSystemLog('drwxr-xr-x  overview/  experience/  education/  contact/  secrets/');
                break;
            case 'secrets':
            case 'cd secrets':
                addSystemLog('Access denied. ...ok fine: I ship with AI-first workflows and way too much coffee. 🤖☕', 'ok');
                break;
            case 'date':
                addSystemLog(new Date().toString());
                break;
            case 'coffee':
                addSystemLog("☕ Brewing... ERROR 418: I'm a teapot.", 'error');
                break;
            case 'hire':
            case 'hireme':
            case 'hire me':
                addSystemLog('Excellent decision. Routing you to the contact protocol...', 'ok');
                goView('view-contact');
                break;
            case 'cv':
            case 'resume':
                addSystemLog("CV uplink pending — ping me via 'contact' for now.", 'ok');
                goView('view-contact');
                break;
            case 'glitch':
                if (isFsOpen()) closeTerminal();
                triggerGlitch();
                addSystemLog('Reality distortion engaged.', 'ok');
                break;
            case 'color':
            case 'colour':
            case 'theme':
                openColorMenu();
                break;
            case 'matrix':
                ['Wake up, Neo...', 'The Matrix has you...', 'Follow the white rabbit. 🐇'].forEach((m, i) => setTimeout(() => addSystemLog(m, 'ok'), 450 * (i + 1)));
                break;
            case 'exit':
            case 'quit':
                if (isFsOpen()) closeTerminal();
                else addSystemLog('There is no escape from JDB-OS. Use the menu. 😈', 'error');
                break;
            default:
                if (commandMap[cmd]) goView(commandMap[cmd]);
                else addSystemLog(`Command not found: ${cmd}. Type 'help'.`, 'error');
        }
    }

    function attachTerminalInput(input) {
        if (!input) return;
        input.addEventListener('keypress', function (e) {
            if (e.key !== 'Enter') return;
            if (colorMenuActive) return; // the menu handles Enter
            runCommand(this.value);
            this.value = '';
        });
    }
    attachTerminalInput(document.getElementById('cmd-input'));
    attachTerminalInput(fsInput);

    const expandBtn = document.getElementById('terminal-expand');
    const expandBtnMobile = document.getElementById('terminal-expand-mobile');
    const closeBtn = document.getElementById('terminal-close');
    if (expandBtn) expandBtn.addEventListener('click', openTerminal);
    if (expandBtnMobile) expandBtnMobile.addEventListener('click', openTerminal);
    if (closeBtn) closeBtn.addEventListener('click', closeTerminal);
    document.addEventListener('keydown', (e) => {
        if (colorMenuActive) {
            if (e.key === 'ArrowUp') { e.preventDefault(); colorMenuIndex = (colorMenuIndex - 1 + colorThemes.length) % colorThemes.length; renderColorMenu(); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); colorMenuIndex = (colorMenuIndex + 1) % colorThemes.length; renderColorMenu(); }
            else if (e.key === 'Enter') { e.preventDefault(); commitColorMenu(); }
            else if (e.key === 'Escape') { e.preventDefault(); cancelColorMenu(); }
            return;
        }
        if (e.key === 'Escape' && isFsOpen()) closeTerminal();
    });

    // ===== mobile swipe navigation (swipe left/right to change view) =====
    const swipeViews = ['view-overview', 'view-experience', 'view-education', 'view-contact'];
    const swipeSurface = document.getElementById('main-content');
    const swipeHint = document.getElementById('swipe-hint');
    let touchX = 0, touchY = 0, touchT = 0;

    function maybeShowSwipeHint() {
        if (!swipeHint || localStorage.getItem('swipeHintSeen')) return;
        if (!window.matchMedia('(max-width: 767px)').matches) return;
        swipeHint.classList.add('show');
        localStorage.setItem('swipeHintSeen', '1');
        setTimeout(() => swipeHint.classList.remove('show'), 3700);
    }
    function dismissSwipeHint() {
        if (swipeHint) swipeHint.classList.remove('show');
        localStorage.setItem('swipeHintSeen', '1');
    }

    if (swipeSurface) {
        swipeSurface.addEventListener('touchstart', (e) => {
            dismissSwipeHint();
            const t = e.changedTouches[0];
            touchX = t.clientX; touchY = t.clientY; touchT = Date.now();
        }, { passive: true });
        swipeSurface.addEventListener('touchend', (e) => {
            if (colorMenuActive || isFsOpen()) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchX;
            const dy = t.clientY - touchY;
            if (Date.now() - touchT > 700) return;         // too slow to be a swipe
            if (Math.abs(dx) < 60) return;                 // too short
            if (Math.abs(dx) < Math.abs(dy) * 1.4) return; // mostly vertical -> let it scroll
            let i = swipeViews.indexOf(getActiveViewId());
            if (i < 0) i = 0;
            if (dx < 0 && i < swipeViews.length - 1) switchView(swipeViews[i + 1]);
            else if (dx > 0 && i > 0) switchView(swipeViews[i - 1]);
        }, { passive: true });
    }

    // ===== contact form =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            // The mailto action opens the user's mail client; log a confirmation too.
            addSystemLog(translations[currentLang].form_sent, 'ok');
        });
    }

    // ===== boot / intro screen =====
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const bootScreen = document.getElementById('boot-screen');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reveal the underlying UI: count-up stats, vital bars, side-panel logs, glitch-in.
    let __revealed = false;
    function runRevealAnimations() {
        if (__revealed) return;
        __revealed = true;
        bootLines.forEach((line, i) => setTimeout(() => addSystemLog(line[0], line[1]), 220 * (i + 1)));
        document.querySelectorAll('.count-up').forEach((el) => animateCount(el, parseInt(el.dataset.count, 10) || 0));
        requestAnimationFrame(() => {
            document.querySelectorAll('.vital-bar').forEach((bar) => {
                bar.style.width = (bar.dataset.width || '0') + '%';
            });
        });
        if (!prefersReduced) triggerGlitch();
        setTimeout(maybeShowSwipeHint, 900);
    }

    async function runBootScreen() {
        const bootCmd = document.getElementById('boot-cmd');
        const bootCaret = document.getElementById('boot-caret');
        const bootOutput = document.getElementById('boot-output');
        const command = './init_portfolio.sh';
        const lines = [
            ['[ BOOT ] Initializing JDB-OS kernel...', 'dim'],
            ['[  OK  ] Mounting /dev/portfolio', 'ok'],
            ['[  OK  ] Loading profile: Juan David Benavides', 'ok'],
            ['[  OK  ] Modules: i18n · terminal · analytics', 'ok'],
            ['[  OK  ] Decrypting project logs...', 'ok'],
            ['[  OK  ] Establishing secure uplink 192.168.1.1', 'ok'],
            ['[  OK  ] Rendering interface', 'ok'],
            ['[ DONE ] Welcome. Booting UI...', 'green']
        ];
        for (let i = 0; i < command.length; i++) {
            bootCmd.textContent += command[i];
            await sleep(45);
        }
        await sleep(350);
        if (bootCaret) bootCaret.remove();
        for (const [text, kind] of lines) {
            const p = document.createElement('div');
            p.className = 'boot-line ' + (kind === 'green'
                ? 'text-primary-container'
                : kind === 'ok' ? 'text-primary-fixed-dim' : 'text-on-surface-variant');
            p.textContent = text;
            bootOutput.appendChild(p);
            await sleep(110);
        }
        await sleep(300);
        bootScreen.classList.add('boot-done');
        await sleep(750);
        bootScreen.style.display = 'none';
    }

    if (!bootScreen || prefersReduced) {
        if (bootScreen) bootScreen.style.display = 'none';
        runRevealAnimations();
    } else {
        const skip = () => {
            bootScreen.classList.add('boot-done');
            setTimeout(() => { bootScreen.style.display = 'none'; }, 750);
            runRevealAnimations();
            window.removeEventListener('keydown', skip);
            bootScreen.removeEventListener('click', skip);
        };
        window.addEventListener('keydown', skip);
        bootScreen.addEventListener('click', skip);
        runBootScreen().then(runRevealAnimations);
    }
});
