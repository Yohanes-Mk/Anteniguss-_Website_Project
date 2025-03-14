document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const navbarLogo = document.getElementById("navbar-logo");
    const heroBg = document.getElementById("hero-bg");

    // Initial animation on page load
    setTimeout(() => {
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 500);

    // Reveal subtitle slightly later
    setTimeout(() => {
        heroSubtitle.style.opacity = "1";
        heroSubtitle.style.transform = "translateY(0)";
    }, 1000);

    // Scroll effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
});
