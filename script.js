document.addEventListener('DOMContentLoaded', function () {

    // 1. Lógica para mudar o fundo do Header ao rolar a página
    const header = document.getElementById('header');
    if (header) {
        function scrollHeader() {
            // Quando a rolagem for maior que 50 pixels, adiciona a classe .scrolled
            if (window.scrollY >= 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', scrollHeader);
    }

    // 2. Lógica para animar elementos ao aparecerem na tela (efeito reveal)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento está visível
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

});
