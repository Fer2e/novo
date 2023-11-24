
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');

        // Verifica a posição da rolagem
        if (window.scrollY > 100) { // Ajuste o valor conforme necessário
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    });

