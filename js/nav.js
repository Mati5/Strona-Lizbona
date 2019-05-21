var btnNav = document.querySelector("#btn-hamburger");
    primaryMenu = document.querySelector("#primary-menu");
//console.log(btnNav, primaryMenu);

btnNav.addEventListener("click", function() {
    primaryMenu.classList.toggle("active");
}, true);