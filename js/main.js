// CodiXQR - Ana JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        navToggle?.setAttribute('aria-label', 
            navMenu?.classList.contains('active') ? 'Menüyü kapat' : 'Menüyü aç');
    });

    // Close nav when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => navMenu?.classList.remove('active'));
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Contact form submit
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Şimdilik alert - gerçek projede API'ye gönderilebilir
        console.log('Form verileri:', data);
        alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });

    // Tech slider arrows
    const techTrack = document.querySelector('.tech-track');
    const techPrev = document.querySelector('.tech-prev');
    const techNext = document.querySelector('.tech-next');

    if (techTrack && techPrev && techNext) {
        const cardWidth = 200;
        techPrev.addEventListener('click', () => {
            techTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
        techNext.addEventListener('click', () => {
            techTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
    }

    // Floating button toggle
    const floatingBtn = document.getElementById('floatingBtn');
    const floatingMenu = document.getElementById('floatingMenu');
    
    floatingBtn?.addEventListener('click', () => {
        floatingMenu?.classList.toggle('active');
    });

    // Close floating menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!floatingBtn?.contains(e.target) && !floatingMenu?.contains(e.target)) {
            floatingMenu?.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
