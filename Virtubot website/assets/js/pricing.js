// assets/js/pricing.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const pricingSections = document.querySelectorAll('.pricing-section');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all pricing sections
            pricingSections.forEach(section => section.classList.remove('active'));
            // Show selected pricing section
            const targetSection = document.getElementById(`${this.dataset.target}-plans`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});