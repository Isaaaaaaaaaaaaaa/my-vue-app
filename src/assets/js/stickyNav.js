// stickyNav.js

export function initializeStickyNav(headerElement) {
    window.addEventListener('scroll', () => stickyNav(headerElement));
    let sticky = headerElement.offsetTop;
  
    function stickyNav(navbar) {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scrolled");
      }
    }
  }
  