// assets/js/pricing.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const pricingSections = document.querySelectorAll('.pricing-section');

    // Function to format prices in AED
    function formatPrices() {
        const prices = document.querySelectorAll(".amount");

        prices.forEach(price => {
            let value = parseFloat(price.textContent.replace(/,/g, ""));
            if (!isNaN(value)) {
                price.textContent = new Intl.NumberFormat("en-AE", {
                    style: "currency",
                    currency: "AED",
                    minimumFractionDigits: 2,
                }).format(value);
            }
        });
    }

    // Toggle pricing sections
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
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

    // Format prices on page load
    formatPrices();
});
