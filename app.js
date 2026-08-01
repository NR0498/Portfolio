// Cursor Glow Effect
(function initCursorGlow() {
    const cursorGlow = document.getElementById('cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.classList.add('active');
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('active');
    });
})();

// Parallax Effect
(function initParallax() {
    const parallaxIcon = document.querySelector('.parallax-icon');
    
    if (parallaxIcon) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            parallaxIcon.style.transform = `translateY(${rate}px)`;
        });
    }
})();

// Sidebar Navigation
(function initNavigation() {
    const navButtons = document.querySelectorAll('.sidebar-nav .mc-button');
    const scrollButtons = document.querySelectorAll('[data-scroll-to]');
    
    // Sidebar navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Update active state
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Scroll to section
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Hero button scrolling
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-scroll-to');
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Update active nav button
                navButtons.forEach(btn => {
                    if (btn.getAttribute('data-section') === sectionId) {
                        navButtons.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                    }
                });
                
                // Scroll to section
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Update active section on scroll
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-section') === current) {
                button.classList.add('active');
            }
        });
    });
})();

// Scroll Reveal Animation
(function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay if specified
                const delay = entry.target.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, parseInt(delay));
                
                // Unobserve after revealing
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-100px'
    });
    
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
})();

// Skill Item Hover Effects
(function initSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s ease';
        });
    });
})();

// Form Submission
(function initForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            // Show success message (you can replace this with actual form submission)
            alert('Message sent! Thanks for reaching out, ' + name + '!');
            
            // Reset form
            form.reset();
        });
    }
})();

// Page Load Animations
(function initPageLoad() {
    // Ensure all fade-in-up elements are visible
    window.addEventListener('load', () => {
        // Small delay to ensure smooth animation
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
})();

// Smooth scroll for all internal links
(function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy functions
const parallaxIcon = document.querySelector('.parallax-icon');
if (parallaxIcon) {
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        parallaxIcon.style.transform = `translateY(${rate}px)`;
    }, 10));
}

// Add keyboard navigation support
(function initKeyboardNav() {
    const navButtons = document.querySelectorAll('.sidebar-nav .mc-button');
    
    document.addEventListener('keydown', (e) => {
        // Get currently active button index
        let currentIndex = -1;
        navButtons.forEach((btn, index) => {
            if (btn.classList.contains('active')) {
                currentIndex = index;
            }
        });
        
        // Arrow up - go to previous section
        if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            navButtons[currentIndex - 1].click();
        }
        
        // Arrow down - go to next section
        if (e.key === 'ArrowDown' && currentIndex < navButtons.length - 1) {
            e.preventDefault();
            navButtons[currentIndex + 1].click();
        }
        
        // Home key - go to first section
        if (e.key === 'Home') {
            e.preventDefault();
            navButtons[0].click();
        }
        
        // End key - go to last section
        if (e.key === 'End') {
            e.preventDefault();
            navButtons[navButtons.length - 1].click();
        }
    });
})();

// Add hover sound effect simulation (visual feedback)
(function initHoverEffects() {
    const buttons = document.querySelectorAll('.mc-button, .project-card, .certificate-card');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Add subtle scale effect
            button.style.transition = 'all 0.2s ease';
        });
    });
})();

// Preload images for better performance
(function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
})();

// Add easter egg - Konami code
(function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                const title = document.querySelector('.hero-title');
                if (title) {
                    title.style.animation = 'none';
                    setTimeout(() => {
                        title.style.animation = 'avatarRotate 0.5s ease-out';
                        title.style.color = '#FF0000';
                        setTimeout(() => {
                            title.style.color = '#FFD700';
                        }, 2000);
                    }, 10);
                }
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
})();

// Console message for developers
console.log('%c🎮 Welcome to Nayan\'s Minecraft Portfolio! 🎮', 'color: #FFD700; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 0px rgba(0,0,0,0.5);');
console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #4A9D4A; font-size: 14px;');
console.log('%cTry the Konami code for a secret! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'color: #00CED1; font-size: 12px;');

// Analytics placeholder (replace with your analytics code)
(function initAnalytics() {
    // Track page view
    console.log('Page viewed:', window.location.href);
    
    // Track button clicks
    document.querySelectorAll('.mc-button').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked:', button.textContent);
        });
    });
})();

// Service Worker registration (for PWA support - optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js').then(() => {
    //     console.log('Service Worker registered');
    // });
}

// Add loading state management
(function initLoadingState() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Fade in hero elements
        const heroElements = document.querySelectorAll('.fade-in-up');
        heroElements.forEach((element, index) => {
            element.style.animationDelay = (index * 0.2 + 0.2) + 's';
        });
    });
})();

// Viewport height fix for mobile browsers
(function initViewportFix() {
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', throttle(setVH, 100));
})();

// Add touch support for mobile
(function initTouchSupport() {
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        // Custom touch handling if needed
    }, { passive: true });
})();

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized! 🎮');
});
