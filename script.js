// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all features and case studies
document.querySelectorAll('.feature, .case-study').forEach((el) => observer.observe(el));

// Add loading state to CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('loading');
        // Remove loading state after 2 seconds (simulate loading)
        setTimeout(() => {
            this.classList.remove('loading');
        }, 2000);
    });
});
