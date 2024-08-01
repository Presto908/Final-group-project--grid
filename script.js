document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    navLinks.forEach(link => {
        link.addEventListener("dblclick", function(event) {
            event.preventDefault();
            window.location.href = this.href;
        });
    });
});
