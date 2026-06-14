// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact Form Submission
const contactForms = document.querySelectorAll('.contact-form, .newsletter-form');
contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 229, 255, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in';
        imageObserver.observe(img);
    });
}

// Add active class to nav link based on current page
const currentLocation = location.pathname;
const menuItems = document.querySelectorAll('.nav-menu a');

menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation || 
        item.getAttribute('href') === currentLocation.split('/').pop()) {
        item.classList.add('active');
    }
});

// Counter animation for stats
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItems = document.querySelectorAll('.stat-item h3');
                statItems.forEach(item => {
                    animateCounter(item);
                });
                observer.unobserve(statsSection);
            }
        });
    });
    observer.observe(statsSection);
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#ff4444';
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Apply button functionality
const applyButtons = document.querySelectorAll('.btn-apply');
applyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Please fill out the contact form with your details.');
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            cardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const cards = document.querySelectorAll('.feature-card, .service-card, .blog-post, .job-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = (index * 0.1) + 's';
    cardObserver.observe(card);
});

console.log('Zentrox website loaded successfully!');
