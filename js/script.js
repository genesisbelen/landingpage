document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a class to the navbar when scrolling down (e.g., to make it stickier or change background)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // When scrolled down 50px
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)'; // Slightly darker/less transparent
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Simple Testimonial Slider (for demonstration, a full slider would need more logic or a library)
    // You can enhance this with actual sliding functionality or a carousel library
    const testimonialsContainer = document.querySelector('.testimonials-slider');
    if (testimonialsContainer) {
        // This is a very basic example. For a real slider, consider a library like Swiper.js or Slick Carousel.
        // For now, it just allows horizontal scrolling.
    }

    // Form Submission (client-side validation - more comprehensive validation will be on the server)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Basic client-side validation
            const name = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('mensaje').value;

            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos requeridos.');
                e.preventDefault(); // Stop form submission
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Por favor, introduce un correo electrónico válido.');
                e.preventDefault(); // Stop form submission
            }
            // If validation passes, the form will submit to send_mail.php
        });
    }
});