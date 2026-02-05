document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Floating Button Visibility Control
    const floatingBtnContainer = document.querySelector('.floating-btn-container');
    const footer = document.querySelector('.footer');

    if (floatingBtnContainer && footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    floatingBtnContainer.classList.add('hidden');
                } else {
                    floatingBtnContainer.classList.remove('hidden');
                }
            });
        }, {
            root: null,
            threshold: 0.1
        });

        footerObserver.observe(footer);
    }

    // Fade-in Animation with IntersectionObserver
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length > 0) {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            root: null,
            threshold: 0.1
        });

        fadeInElements.forEach(el => fadeInObserver.observe(el));
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
