document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE TRADUCCIÓN ---
    const translations = {
        en: {
            name: "Juan David Benavides",
            nav_home: "Home",
            nav_education: "Education",
            nav_experience: "Experience",
            hero_title: "I'm a Software Developer",
            hero_subtitle: "Passionate about transforming ideas into functional and efficient solutions. I am a proactive problem-solver who thrives in collaborative environments, actively seeking an opportunity to add value and grow professionally within an innovative development team.",
            skills_title: "Skills & Abilities",
            tech_skills_title: "Technical Skills",
            soft_skills_title: "Professional Abilities",
            soft_skill_1: "Problem Solving",
            soft_skill_2: "Proactive and Results Oriented",
            soft_skill_3: "Teamwork and Collaboration",
            soft_skill_4: "Effective Communication",
            soft_skill_5: "Adaptability",
            education_title: "Education & Training",
            degree_1: "Technical Degree in Software Programming Skills",
            degree_2: "Web and Backend Development",
            degree_3: "High School",
            diplomas_title: "Diplomas & Certificates",
            diplomas_text: "This is a great place to showcase your diplomas. You can add images of your certificates or link to verifiable credentials.",
            diploma_placeholder: "Certificate Placeholder",
            experience_title: "Professional Experience",
            tech_title: "Technologies:",
            job_3_title: "Acme Movie Theater Management",
            job_3_company: "Personal Project",
            job_3_desc_1: "Full-stack web application designed for comprehensive management of a movie theater chain.",
            job_3_desc_2: "Developed a robust backend with Node.js and Express, with a dynamic single-page frontend (SPA) using native HTML, CSS, and JavaScript.",
            footer_contact: "Get in touch:",
            footer_copy: `&copy; ${new Date().getFullYear()} Juan David Benavides. All Rights Reserved.`
        },
        es: {
            name: "Juan David Benavides",
            nav_home: "Inicio",
            nav_education: "Educación",
            nav_experience: "Experiencia",
            hero_title: "Soy un Desarrollador de Software",
            hero_subtitle: "Apasionado por transformar ideas en soluciones funcionales y eficientes. Soy una persona proactiva y resolutiva que prospera en entornos colaborativos, en búsqueda activa de una oportunidad para aportar valor y crecer profesionalmente dentro de un equipo de desarrollo innovador.",
            skills_title: "Habilidades y Competencias",
            tech_skills_title: "Habilidades Técnicas",
            soft_skills_title: "Competencias Profesionales",
            soft_skill_1: "Resolución de Problemas",
            soft_skill_2: "Proactividad y Orientación a Resultados",
            soft_skill_3: "Trabajo en Equipo y Colaboración",
            soft_skill_4: "Comunicación Efectiva",
            soft_skill_5: "Adaptabilidad",
            education_title: "Formación Académica",
            degree_1: "Técnico Laboral en Programación de Software",
            degree_2: "Desarrollo Web y Backend",
            degree_3: "Bachiller",
            diplomas_title: "Diplomas y Certificados",
            diplomas_text: "Este es un excelente lugar para mostrar tus diplomas. Puedes agregar imágenes de tus certificados o enlaces a credenciales verificables.",
            diploma_placeholder: "Espacio para Certificado",
            experience_title: "Experiencia Profesional",
            tech_title: "Tecnologías:",
            job_3_title: "Gestión de Cines Acme",
            job_3_company: "Proyecto Personal",
            job_3_desc_1: "Aplicación web full-stack para la gestión integral de una cadena de cines.",
            job_3_desc_2: "Desarrollé un backend robusto con Node.js y Express, con un frontend dinámico de una sola página (SPA) usando HTML, CSS y JavaScript nativo.",
            footer_contact: "Ponte en contacto:",
            footer_copy: `&copy; ${new Date().getFullYear()} Juan David Benavides. Todos los derechos reservados.`
        }
    };

    const langToggleButton = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            const translationKey = (key.startsWith("diploma_placeholder_")) ? "diploma_placeholder" : key;
            const translationText = translations[lang][translationKey];
            if (translationText) {
                element.innerHTML = translationText;
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

    // --- LÓGICA DE ANIMACIÓN ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- LÓGICA DEL MENÚ MÓVIL (PANEL LATERAL) ---
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