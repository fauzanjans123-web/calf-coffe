const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


// Buka / tutup menu
hamburger.addEventListener("click", function () {

    menu.classList.toggle("active");

});


// Tutup menu setelah klik link
document.querySelectorAll(".menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});