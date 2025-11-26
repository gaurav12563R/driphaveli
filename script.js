// ========================================
// DRIP HAVELI - MAIN JAVASCRIPT
// ========================================

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add to Cart Button Animation
document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Store original text
        const originalText = this.textContent;
        
        // Change button state
        this.textContent = 'Added! ✓';
        this.style.background = '#4CAF50';
        this.style.transform = 'scale(1.1)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
            this.style.transform = '';
        }, 2000);
    });
});

// Navbar Hide/Show on Scroll
let lastScroll = 0;
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > navHeight) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        
        // Toggle hamburger icon
        mobileMenuBtn.textContent = mobileMenuBtn.textContent === '☰' ? '✕' : '☰';
        
        // If menu is shown, position it correctly
        if (navLinks.style.display === 'flex') {
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.flexDirection = 'column';
            navLinks.style.background = 'rgba(26, 26, 29, 0.98)';
            navLinks.style.padding = '2rem';
            navLinks.style.gap = '1.5rem';
            navLinks.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });
}

// Product Card Hover Effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Collection Card Hover Effect
document.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Animate Elements on Scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .collection-card, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Nav Icons Interactive Effects
document.querySelectorAll('.nav-icons span').forEach(icon => {
    icon.addEventListener('click', function() {
        // Add pulse animation
        this.style.animation = 'pulse 0.5s';
        
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Search Icon Functionality (placeholder)
const searchIcon = document.querySelectorAll('.nav-icons span')[0];
if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        alert('🔍 Search functionality coming soon!');
    });
}

// User Account Icon (placeholder)
const userIcon = document.querySelectorAll('.nav-icons span')[1];
if (userIcon) {
    userIcon.addEventListener('click', () => {
        alert('👤 Account page coming soon!');
    });
}

// Cart Icon (placeholder)
const cartIcon = document.querySelectorAll('.nav-icons span')[2];
if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        alert('🛒 Your cart is empty. Start shopping!');
    });
}

// Social Icons Interaction
document.querySelectorAll('.social-icons span').forEach(social => {
    social.addEventListener('click', function() {
        const icons = ['📷', '🐦', '📘', '📺'];
        const platforms = ['Instagram', 'Twitter', 'Facebook', 'YouTube'];
        const index = icons.indexOf(this.textContent);
        
        if (index !== -1) {
            alert(`Follow us on ${platforms[index]}!`);
        }
    });
});

// Lazy Loading for Images (when you add real images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console Welcome Message
console.log('%c DRIP HAVELI 🔥', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
console.log('%c Where Culture Meets Hype', 'color: #F7B801; font-size: 14px;');
console.log('%c Designed with ❤️ in India', 'color: #ffffff; font-size: 12px;');

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});