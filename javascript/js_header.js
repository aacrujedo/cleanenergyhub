const headerEl = document.querySelector('nav.top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    }
    else if (window.scrollY <= 50) {
        headerEl.classList.remove('header-scrolled');
    }
});

