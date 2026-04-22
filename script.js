/**
 * Ahmad Hussain Portfolio
 * Vanilla JavaScript Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = mobileToggle.querySelector('i');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        
        // Toggle icon between menu and x
        if (isOpen) {
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic UI feedback
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate a delay (for actual projects, you'd use fetch() to a backend or service like EmailJS)
            setTimeout(() => {
                alert('Thank you, Ahmad! Your message has been sent successfully. (Note: This is a UI demo, integrate a backend for real functionality)');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // 6. Dynamic Hero Shadow Movement (Subtle)
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 50;
            const moveY = (clientY - window.innerHeight / 2) / 50;
            
            const heroBg = document.querySelector('.hero-bg');
            heroBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});
