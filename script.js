// ===============================
// MENU MOBILE
// ===============================
const botaoMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

// ===============================
// FECHAR MENU AO CLICAR EM LINK
// ===============================
const links = document.querySelectorAll(".menu a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });
});

// ===============================
// MENU CASCATA NO CELULAR
// ===============================
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {
    const botao = dropdown.querySelector("button");

    botao.addEventListener("click", function (event) {
        event.stopPropagation();

        dropdowns.forEach(function (item) {
            if (item !== dropdown) {
                item.classList.remove("aberto");
            }
        });

        dropdown.classList.toggle("aberto");
    });
});

// ===============================
// ANIMAÇÃO DAS SEÇÕES
// ===============================
const secoes = document.querySelectorAll("section");

const observador = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

secoes.forEach(function (secao) {
    secao.style.opacity = "0";
    secao.style.transform = "translateY(20px)";
    secao.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observador.observe(secao);
});