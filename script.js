document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scroll for single click on navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigate to the href on double click
    navLinks.forEach(link => {
        link.addEventListener("dblclick", function(event) {
            event.preventDefault();
            window.location.href = this.href;
        });
    });
});
