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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    floatingBtnContainer.classList.add('hidden');
                } else {
                    floatingBtnContainer.classList.remove('hidden');
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.1 // Trigger when 10% of footer is visible
        });

        observer.observe(footer);
    }
});
