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
            vital_ai: "AI ENGINEERING (LLM/RAG)",
            vital_data: "DATA (PostgreSQL/SQL)",
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
            hero_title: "AI Engineer | Full Stack Developer",
            hero_subtitle: "AI Engineer and Full Stack Developer focused on building production-oriented LLM systems: RAG pipelines, multi-agent architectures, multimodal document processing, and AI evaluation and observability. Trained in AI Engineering at SoyHenry, where I delivered four end-to-end projects with Python, LangChain, the OpenAI and Gemini APIs, ChromaDB, Pydantic and Langfuse — each with validated JSON contracts, offline test suites, and token and cost tracking.",
            hero_about_2: "At Bia, I combine this with backend engineering in Go (Golang), a multi-layered corporate Data Warehouse in PostgreSQL, and React business intelligence platforms, and I embed agentic coding tools such as Claude Code and Codex into the daily SDLC. I build AI that is measurable, testable, and safe rather than a demo: guardrails against prompt injection, self-consistency for calibrated confidence, and LLM-as-judge evaluation.",
            hero_location: "Bogotá, Colombia",
            // --- Skills ---
            skills_title: "Technical Skills",
            ai_eng_skills_title: "AI Engineering",
            vector_skills_title: "Vector DBs & Observability",
            ai_skills_title: "AI Dev Tools & Automation",
            frontend_skills_title: "Frontend",
            backend_skills_title: "Backend",
            db_skills_title: "Data",
            testing_skills_title: "Testing & Tools",
            method_skills_title: "Methodologies",
            // --- Experience (Project_Logs) ---
            experience_title: "Professional Experience",
            responsibilities_title: "Responsibilities",
            achievements_title: "Key Achievements",
            tech_title: "Technologies",
            current_badge: "Latest",
            view_github: "View on GitHub",
            job_1_title: "Full Stack Developer & Data Analyst",
            job_1_company: "Bia",
            job_1_period: "Nov 2025 – Oct 2026 · Hybrid",
            job_1_project: "Project: Growth, Automation & Data Architecture Platform",
            job_1_description: "Technical leadership in the development of software and analytics solutions, focused on business growth, process automation, and corporate data governance.",
            job_1_resp_1: "<strong>Backend & Architecture Design:</strong> Designed and deployed scalable microservices in Go (Golang) for high-throughput, real-time data processing pipelines and concurrent service communication.",
            job_1_resp_2: "<strong>Data Architecture & Management:</strong> Engineered a multi-layered corporate Data Warehouse in PostgreSQL, centralizing and structuring fragmented datasets from all core business departments.",
            job_1_resp_3: "<strong>Frontend Engineering:</strong> Built an enterprise business intelligence platform in React, with dedicated sections and nested sub-pages for every business unit, a global overview dashboard, and real-time data visualizations.",
            job_1_resp_4: "<strong>AI Integration & SDLC Optimization:</strong> Embedded AI tools such as Claude Code and Codex into the daily development lifecycle to accelerate sprints, automate unit testing, and carry out deep codebase refactorings.",
            job_1_ach_1: "<strong>Single Source of Truth:</strong> Eliminated enterprise-wide data silos by establishing a unified \"Gold Layer\" data architecture, a trusted source for corporate decision-making and cross-departmental alignment.",
            job_1_ach_2: "<strong>Multi-Tiered Operational Visibility:</strong> Consolidated scattered corporate metrics into one platform, with macro overviews and granular per-department deep dives that speed up data-driven planning.",
            job_1_ach_3: "<strong>Client Value Automation:</strong> Built an end-to-end data pipeline that ingests real-time energy consumption metrics, runs automated analytical calculations, and generates client-ready PDF reports.",
            henry_title: "AI Engineering Career",
            henry_company: "SoyHenry",
            henry_period: "Sep 2026 – Nov 2026 · Virtual",
            henry_description: "Four end-to-end LLM projects, one per module.",
            ai_p1_title: "Multimodal Contract Comparison System",
            ai_p1_b1: "Built a two-agent pipeline (Contextualization → Extraction) that reads scanned contracts and amendments with GPT-4o Vision and returns a validated JSON of additions, deletions, and modifications.",
            ai_p1_b2: "Added a Pydantic validation loop that feeds errors back to the agent (up to 3 retries) and fails explicitly instead of returning an ambiguous empty result; guards reject non-legal documents and flag illegible text instead of guessing.",
            ai_p1_b3: "Full Langfuse tracing with nested spans per stage (image parsing, each agent, each validation attempt).",
            ai_p2_title: "Multi-Agent Support System with RAG",
            ai_p2_b1: "Designed an orchestrator agent with structured output that classifies queries (HR, IT, Finance, out-of-domain) and routes them with RunnableBranch to department-specific RAG agents, each with its own Chroma collection.",
            ai_p2_b2: "Implemented an LLM-as-judge evaluator that scores relevance, completeness, and accuracy and logs them through the Langfuse Score API; measured routing accuracy on a 15-query test set.",
            ai_p3_title: "HR FAQ Chatbot with Hybrid RAG",
            ai_p3_b1: "Built a RAG pipeline from scratch: Q&A-aware chunking, gemini-embedding-001 embeddings, and hybrid retrieval (cosine similarity + BM25 fused with Reciprocal Rank Fusion).",
            ai_p3_b2: "Answers cite their source chunks and follow a strict JSON contract; switching providers (OpenAI ↔ Gemini) is a configuration change thanks to an OpenAI-compatible client.",
            ai_p4_title: "IT Ticket Triage with Self-Consistency",
            ai_p4_b1: "LLM classifier that turns incident descriptions into structured tickets (severity, system, category, runbook), with confidence computed by majority vote across N samples instead of model self-assessment.",
            ai_p4_b2: "Three-layer safety (prompt-injection and PII detection, output leak checks), per-run token, latency, and cost metrics, and 36 offline unit tests.",
            job_2_title: "Cinema Management Platform",
            job_2_company: "Campuslands",
            job_2_period: "Nov 2024 – Aug 2025 · Bogotá",
            job_2_description: "Academic full-stack web application to manage cinema operations.",
            job_2_resp_1: "Built the backend with Node.js and Express, exposing a RESTful API for CRUD operations on movies, users, and showtimes.",
            job_2_resp_2: "Secured endpoints with JWT authentication and designed the data models in MongoDB.",
            job_3_title: "Bakery E-commerce Platform",
            job_3_company: "Coderhouse",
            job_3_period: "Jan 2024 – Jan 2025 · Virtual",
            job_3_description: "Academic e-commerce application for a bakery, focused on the frontend.",
            job_3_resp_1: "Built a responsive React SPA with a product catalog and client-side navigation using React Router.",
            job_3_resp_2: "Implemented global shopping-cart state (add, remove, summarize) with the React Context API in a modular, component-based codebase.",
            // --- Education (Academy_Data) ---
            education_title: "Education & Training",
            degree_0: "AI Engineering Career",
            degree_0_place: "SoyHenry · Virtual",
            degree_0_period: "2026",
            degree_1: "Technical Degree in Software Programming",
            degree_1_place: "Campuslands · Bogotá, Colombia",
            degree_1_period: "2024 – 2025",
            degree_2: "Web and Backend Development",
            degree_2_place: "Coderhouse · Virtual",
            degree_2_period: "2024 – 2025",
            diplomas_title: "Certificates",
            diplomas_text: "Web Development · JavaScript · Backend Development · React.js (2024).",
            languages_title: "Languages",
            lang_english: "English — Advanced (C1)",
            lang_spanish: "Spanish — Native",
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
            vital_ai: "AI ENGINEERING (LLM/RAG)",
            vital_data: "DATOS (PostgreSQL/SQL)",
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
            hero_title: "AI Engineer | Desarrollador Full Stack",
            hero_subtitle: "AI Engineer y Desarrollador Full Stack enfocado en construir sistemas con LLMs orientados a producción: pipelines RAG, arquitecturas multiagente, procesamiento multimodal de documentos y evaluación y observabilidad de IA. Formado en AI Engineering en SoyHenry, donde desarrollé cuatro proyectos de punta a punta con Python, LangChain, las APIs de OpenAI y Gemini, ChromaDB, Pydantic y Langfuse — cada uno con contratos JSON validados, suites de tests offline y medición de tokens y costos.",
            hero_about_2: "En Bia combino esto con ingeniería backend en Go (Golang), un Data Warehouse corporativo multicapa en PostgreSQL y plataformas de inteligencia de negocios en React, e integro herramientas de desarrollo agéntico como Claude Code y Codex en el SDLC diario. Construyo IA medible, testeable y segura, no solo demos: guardrails contra prompt injection, self-consistency para una confianza calibrada y evaluación con LLM-as-judge.",
            hero_location: "Bogotá, Colombia",
            skills_title: "Habilidades Técnicas",
            ai_eng_skills_title: "AI Engineering",
            vector_skills_title: "Bases vectoriales y observabilidad",
            ai_skills_title: "Herramientas IA y automatización",
            frontend_skills_title: "Frontend",
            backend_skills_title: "Backend",
            db_skills_title: "Datos",
            testing_skills_title: "Testing y herramientas",
            method_skills_title: "Metodologías",
            experience_title: "Experiencia Profesional",
            responsibilities_title: "Roles y Responsabilidades",
            achievements_title: "Logros Clave",
            tech_title: "Tecnologías",
            current_badge: "Reciente",
            view_github: "Ver en GitHub",
            job_1_title: "Desarrollador Full Stack & Data Analyst",
            job_1_company: "Bia",
            job_1_period: "Nov 2025 – Oct 2026 · Híbrido",
            job_1_project: "Proyecto: Plataforma de Growth, Automatización y Arquitectura de Datos",
            job_1_description: "Liderazgo técnico en el desarrollo de soluciones de software y analítica, centradas en el crecimiento del negocio, la automatización de procesos y la gobernanza de datos corporativos.",
            job_1_resp_1: "<strong>Diseño de Arquitectura y Backend:</strong> Diseñé y desplegué microservicios escalables en Go (Golang) para pipelines de procesamiento de datos en tiempo real de alto rendimiento y comunicación concurrente entre servicios.",
            job_1_resp_2: "<strong>Gestión y Arquitectura de Datos:</strong> Construí un Data Warehouse corporativo multicapa en PostgreSQL, centralizando y estructurando datos fragmentados de todos los departamentos principales del negocio.",
            job_1_resp_3: "<strong>Ingeniería Frontend:</strong> Desarrollé una plataforma empresarial de inteligencia de negocios en React, con secciones y subpáginas anidadas para cada unidad de negocio, un panel general (macro) y visualizaciones de datos en tiempo real.",
            job_1_resp_4: "<strong>Integración de IA y Optimización del SDLC:</strong> Integré herramientas de IA como Claude Code y Codex en el ciclo de desarrollo diario para acelerar los sprints, automatizar pruebas unitarias y realizar refactorizaciones profundas del código.",
            job_1_ach_1: "<strong>Fuente Única de Verdad:</strong> Eliminé los silos de datos a nivel empresarial con una arquitectura unificada de \"Capa Oro\" (Gold Layer), fuente confiable para la toma de decisiones y la alineación entre departamentos.",
            job_1_ach_2: "<strong>Visibilidad Operativa Multinivel:</strong> Consolidé métricas corporativas dispersas en una sola plataforma, con visiones macro y análisis granulares por departamento que agilizan la planeación basada en datos.",
            job_1_ach_3: "<strong>Automatización de Valor para el Cliente:</strong> Construí un pipeline de datos de extremo a extremo que ingiere métricas de consumo de energía en tiempo real, ejecuta cálculos analíticos automáticos y genera informes PDF listos para el cliente.",
            henry_title: "Carrera de AI Engineering",
            henry_company: "SoyHenry",
            henry_period: "Sep 2026 – Nov 2026 · Virtual",
            henry_description: "Cuatro proyectos de LLMs de punta a punta, uno por módulo.",
            ai_p1_title: "Comparador multimodal de contratos",
            ai_p1_b1: "Construí un pipeline de dos agentes (Contextualización → Extracción) que lee contratos y adendas escaneados con GPT-4o Vision y devuelve un JSON validado con adiciones, eliminaciones y modificaciones.",
            ai_p1_b2: "Implementé un ciclo de validación con Pydantic que devuelve el error al agente (hasta 3 reintentos) y falla de forma explícita en vez de entregar un resultado vacío ambiguo; controles que rechazan documentos no legales y marcan el texto ilegible en vez de inventarlo.",
            ai_p1_b3: "Trazabilidad completa en Langfuse con spans anidados por etapa (lectura de imágenes, cada agente, cada intento de validación).",
            ai_p2_title: "Sistema multiagente de soporte con RAG",
            ai_p2_b1: "Diseñé un agente orquestador con structured output que clasifica consultas (RR. HH., TI, Finanzas, fuera de dominio) y las enruta con RunnableBranch a agentes RAG por departamento, cada uno con su colección en Chroma.",
            ai_p2_b2: "Implementé un agente evaluador LLM-as-judge que puntúa relevancia, completitud y precisión y los registra en la Score API de Langfuse; medí el acierto de enrutamiento sobre 15 consultas de prueba.",
            ai_p3_title: "Chatbot de FAQs de RR. HH. con RAG híbrido",
            ai_p3_b1: "Desarrollé un pipeline RAG desde cero: chunking por pregunta/respuesta, embeddings con gemini-embedding-001 y búsqueda híbrida (similitud coseno + BM25 fusionados con Reciprocal Rank Fusion).",
            ai_p3_b2: "Las respuestas citan sus fragmentos fuente y siguen un contrato JSON estricto; cambiar de proveedor (OpenAI ↔ Gemini) es solo un cambio de configuración gracias a un cliente compatible con OpenAI.",
            ai_p4_title: "Triage de tickets de TI con self-consistency",
            ai_p4_b1: "Clasificador con LLM que convierte incidentes en tickets estructurados (severidad, sistema, categoría, runbook), con una confianza calculada por voto mayoritario entre N corridas en vez de la autoevaluación del modelo.",
            ai_p4_b2: "Seguridad en tres capas (detección de prompt injection y datos personales, control de fugas en la salida), métricas de tokens, latencia y costo por ejecución, y 36 tests unitarios offline.",
            job_2_title: "Plataforma de gestión de cine",
            job_2_company: "Campuslands",
            job_2_period: "Nov 2024 – Ago 2025 · Bogotá",
            job_2_description: "Aplicación web full-stack académica para gestionar las operaciones de un cine.",
            job_2_resp_1: "Construí el backend con Node.js y Express, con una API RESTful para operaciones CRUD de películas, usuarios y horarios.",
            job_2_resp_2: "Protegí los endpoints con autenticación JWT y diseñé los modelos de datos en MongoDB.",
            job_3_title: "E-commerce para pastelería",
            job_3_company: "Coderhouse",
            job_3_period: "Ene 2024 – Ene 2025 · Virtual",
            job_3_description: "Aplicación académica de comercio electrónico para una pastelería, con enfoque en el frontend.",
            job_3_resp_1: "Desarrollé una SPA responsiva en React con catálogo de productos y navegación del lado del cliente con React Router.",
            job_3_resp_2: "Implementé el estado global del carrito (añadir, eliminar, resumir) con la React Context API en una base de código modular basada en componentes.",
            education_title: "Formación Académica",
            degree_0: "Carrera de AI Engineering",
            degree_0_place: "SoyHenry · Virtual",
            degree_0_period: "2026",
            degree_1: "Técnico en Programación de Software",
            degree_1_place: "Campuslands · Bogotá, Colombia",
            degree_1_period: "2024 – 2025",
            degree_2: "Desarrollo Web y Backend",
            degree_2_place: "Coderhouse · Virtual",
            degree_2_period: "2024 – 2025",
            diplomas_title: "Certificados",
            diplomas_text: "Desarrollo Web · JavaScript · Desarrollo Backend · React.js (2024).",
            languages_title: "Idiomas",
            lang_english: "Inglés — Avanzado (C1)",
            lang_spanish: "Español — Nativo",
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
        ['Role: AI Engineer | Full Stack Developer', 'info'],
        ['Location: Bogotá, Colombia', 'info'],
        ['Stack: Python · LangChain · RAG · Go · React · PostgreSQL', 'info'],
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
                addSystemLog('guest@JDB-OS — operated by Juan David Benavides · AI Engineer | Full Stack Developer.', 'ok');
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
