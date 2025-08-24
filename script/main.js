document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE TRADUCCIÓN ---

    const translations = {
        // Textos en Inglés
        en: {
            name: "Juan David Benavides",
            nav_home: "Home",
            nav_education: "Education",
            nav_experience: "Experience",
            // Home Page
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
            // Education Page
            education_title: "Education & Training",
            degree_1: "Technical Degree in Software Programming Skills",
            degree_2: "Web and Backend Development",
            degree_3: "High School",
            diplomas_title: "Diplomas & Certificates",
            diplomas_text: "This is a great place to showcase your diplomas. You can add images of your certificates or link to verifiable credentials.",
            diploma_placeholder: "Certificate Placeholder",
            // Experience Page
            experience_title: "Professional Experience",
            job_1_title: "Payroll Management Platform",
            job_1_desc_1: "Developed a web application for payroll administration, allowing for company registration and employee management.",
            job_1_desc_2: "Implemented a robust backend using Node.js and Express to handle business logic and database CRUD operations.",
            tech_title: "Technologies:",
            job_2_title: "Medical Appointment Management System",
            job_2_desc_1: "Designed and implemented a complete system to schedule, consult, and manage medical appointments, improving a hospital's operational efficiency.",
            job_2_desc_2: "Built a RESTful API to connect the frontend with the server and the MongoDB database.",
            // Footer (común)
            footer_contact: "Get in touch:",
            footer_copy: `&copy; ${new Date().getFullYear()} Juan David Benavides. All Rights Reserved.`
        },
        // Textos en Español
        es: {
            name: "Juan David Benavides",
            nav_home: "Inicio",
            nav_education: "Educación",
            nav_experience: "Experiencia",
            // Home Page
            hero_title: "Soy Desarrollador de Software",
            hero_subtitle: "Apasionado por transformar ideas en soluciones funcionales y eficientes. Soy una persona proactiva y resolutiva que prospera en entornos colaborativos, en búsqueda activa de una oportunidad para aportar valor y crecer profesionalmente dentro de un equipo de desarrollo innovador.",
            skills_title: "Habilidades y Competencias",
            tech_skills_title: "Habilidades Técnicas",
            soft_skills_title: "Competencias Profesionales",
            soft_skill_1: "Resolución de Problemas",
            soft_skill_2: "Proactividad y Orientación a Resultados",
            soft_skill_3: "Trabajo en Equipo y Colaboración",
            soft_skill_4: "Comunicación Efectiva",
            soft_skill_5: "Adaptabilidad",
            // Education Page
            education_title: "Formación Académica",
            degree_1: "Técnico Laboral en Programación de Software",
            degree_2: "Desarrollo Web y Backend",
            degree_3: "Bachiller",
            diplomas_title: "Diplomas y Certificados",
            diplomas_text: "Este es un excelente lugar para mostrar tus diplomas. Puedes agregar imágenes de tus certificados o enlaces a credenciales verificables.",
            diploma_placeholder: "Espacio para Certificado",
            // Experience Page
            experience_title: "Experiencia Profesional",
            job_1_title: "Plataforma de Gestión de Nómina",
            job_1_desc_1: "Desarrollé una aplicación web para la administración de nóminas, gestionando el registro de empresas y empleados.",
            job_1_desc_2: "Implementé un backend con Node.js y Express para lógica de negocio y operaciones CRUD en la base de datos.",
            tech_title: "Tecnologías:",
            job_2_title: "Sistema de Gestión de Citas Médicas",
            job_2_desc_1: "Diseñé e implementé un sistema completo para la gestión de citas médicas en un hospital, mejorando la eficiencia operativa.",
            job_2_desc_2: "Construí una API RESTful para la comunicación entre el frontend y el servidor con la base de datos MongoDB.",
            // Footer (común)
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
        if(langToggleButton) {
            // --- LÍNEA CORREGIDA ---
            // Ahora el botón muestra el idioma actual
            langToggleButton.textContent = lang === 'en' ? 'English' : 'Español';
        }
        localStorage.setItem('lang', lang);
    };

    if(langToggleButton){
        langToggleButton.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            setLanguage(currentLang);
        });
    }

    // Establecer idioma inicial al cargar
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
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Alterna las clases de Tailwind para mostrar/ocultar el menú
            navMenu.classList.toggle('hidden');
            // También alterna nuestras clases personalizadas para el estilo móvil
            navMenu.classList.toggle('mobile-menu');
        });
    }
});