window.onscroll = function () {
    stickyNav();
}
let navbar = document.getElementsByTagName("header")[0];
let sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scrolled");
    }
}