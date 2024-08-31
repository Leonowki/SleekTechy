document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden'); // Toggles the 'hidden' class
});


document.addEventListener("DOMContentLoaded", function() {
    // JavaScript to handle the automatic logo slider
    let currentLogoIndex = 0;
    const logoSlider = document.getElementById('logo-slider');
    const logoSlides = logoSlider.children;
    const totalLogoSlides = logoSlides.length;

    function showNextLogoSlide() {
        currentLogoIndex = (currentLogoIndex + 1) % totalLogoSlides;
        logoSlider.style.transform = `translateX(-${currentLogoIndex * 100}%)`;
    }

    // Automatically show the next logo every 2 seconds
    setInterval(showNextLogoSlide, 2000);
});
