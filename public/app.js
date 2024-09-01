
//search function
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    searchButton.addEventListener('click', function() {
        const keyword = searchInput.value.toLowerCase();
        if (keyword) {
            // Remove previous highlights
            document.querySelectorAll('.highlight').forEach(function(el) {
                el.innerHTML = el.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
                el.classList.remove('highlight');
            });

            // Highlight new search results
            highlightText(document.body, keyword);
        }
    });

    function highlightText(element, text) {
        if (element.hasChildNodes()) {
            element.childNodes.forEach(function(child) {
                if (child.nodeType === Node.TEXT_NODE) {
                    const parent = child.parentNode;
                    const regex = new RegExp(`(${text})`, 'gi');
                    const newHTML = child.textContent.replace(regex, '<span class="highlight">$1</span>');
                    if (newHTML !== child.textContent) {
                        parent.innerHTML = parent.innerHTML.replace(child.textContent, newHTML);
                        parent.classList.add('highlight');
                    }
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    highlightText(child, text);
                }
            });
        }
    }
});




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
