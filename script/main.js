document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            name: "Juan David Benavides",
            nav_home: "Home",
            nav_education: "Education",
            nav_experience: "Experience",
            hero_title: "Full Stack Developer & AI Data Engineer",
            hero_subtitle: "Software Developer and AI Data Analyst specializing in AI-First solutions. I design and deploy AI agents, build high-scale architectures with Go (Golang), and develop full-stack applications with the MERN stack — delivering scalable, data-driven products in Agile environments.",
            hero_location: "Bogotá, Colombia",
            skills_title: "Skills & Technologies",
            ai_skills_title: "AI & Automation",
            frontend_skills_title: "Frontend",
            backend_skills_title: "Backend",
            db_skills_title: "Databases & Tools",
            soft_skills_title: "Professional Strengths",
            soft_skill_1: "AI-Powered Problem Solving",
            soft_skill_2: "Adaptability & Technological Evolution",
            soft_skill_3: "Innovation in Automation",
            soft_skill_4: "Data Communication & Insights",
            soft_skill_5: "Results-Oriented & Efficiency",
            soft_skill_6: "Hybrid Environment Collaboration",
            languages_title: "Languages",
            education_title: "Education & Training",
            degree_1: "Technical Degree in Software Programming",
            degree_2: "Web and Backend Development",
            diplomas_title: "Certificates",
            diplomas_text: "Certified across the full web development stack — from frontend to backend.",
            experience_title: "Professional Experience",
            responsibilities_title: "Responsibilities",
            achievements_title: "Key Achievements",
            tech_title: "Technologies",
            current_badge: "Current",
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
            footer_contact: "Get in touch:",
            footer_copy: `&copy; ${new Date().getFullYear()} Juan David Benavides. All Rights Reserved.`
        },
        es: {
            name: "Juan David Benavides",
            nav_home: "Inicio",
            nav_education: "Educación",
            nav_experience: "Experiencia",
            hero_title: "Desarrollador Full Stack & AI Data Engineer",
            hero_subtitle: "Desarrollador de Software y AI Data Analyst especializado en soluciones IA-First. Diseño y despliego agentes de IA, construyo arquitecturas de alta escala con Go (Golang), y desarrollo aplicaciones full-stack con el stack MERN — entregando productos escalables y basados en datos en entornos ágiles.",
            hero_location: "Bogotá, Colombia",
            skills_title: "Habilidades y Tecnologías",
            ai_skills_title: "IA & Automatización",
            frontend_skills_title: "Frontend",
            backend_skills_title: "Backend",
            db_skills_title: "Bases de Datos & Herramientas",
            soft_skills_title: "Fortalezas Profesionales",
            soft_skill_1: "Resolución de Problemas con IA",
            soft_skill_2: "Adaptabilidad y Evolución Tecnológica",
            soft_skill_3: "Innovación en Automatización",
            soft_skill_4: "Comunicación de Datos e Insights",
            soft_skill_5: "Orientación a Resultados y Eficiencia",
            soft_skill_6: "Colaboración en Entornos Híbridos",
            languages_title: "Idiomas",
            education_title: "Formación Académica",
            degree_1: "Técnico en Programación de Software",
            degree_2: "Desarrollo Web y Backend",
            diplomas_title: "Certificados",
            diplomas_text: "Certificado en el stack completo de desarrollo web — frontend y backend.",
            experience_title: "Experiencia Profesional",
            responsibilities_title: "Roles y Responsabilidades",
            achievements_title: "Logros Clave",
            tech_title: "Tecnologías",
            current_badge: "Actual",
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
            footer_contact: "Ponte en contacto:",
            footer_copy: `&copy; ${new Date().getFullYear()} Juan David Benavides. Todos los derechos reservados.`
        }
    };

    const langToggleButton = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const text = translations[lang][key];
            if (text !== undefined) {
                element.innerHTML = text;
            }
        });
        document.documentElement.lang = lang;
        if (langToggleButton) {
            langToggleButton.textContent = lang === 'en' ? 'English' : 'Español';
        }
        localStorage.setItem('lang', lang);
    };

    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            setLanguage(currentLang);
        });
    }
    setLanguage(currentLang);

    // --- ANIMACIONES AL HACER SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // --- MENÚ MÓVIL ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const navMenu = document.getElementById('nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const body = document.body;

    const openMenu = () => {
        navMenu.classList.add('is-open');
        menuOverlay.classList.add('is-visible');
        body.classList.add('overflow-hidden');
    };

    const closeMenu = () => {
        navMenu.classList.remove('is-open');
        menuOverlay.classList.remove('is-visible');
        body.classList.remove('overflow-hidden');
    };

    if (mobileMenuButton && navMenu && closeMenuButton && menuOverlay) {
        mobileMenuButton.addEventListener('click', openMenu);
        closeMenuButton.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }
});
