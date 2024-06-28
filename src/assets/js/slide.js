var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var slideTimer;

function showSlide() {
    slides[0].classList.remove("initial-slide")
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
        slides[i].classList.remove("previous-slide");
        slides[i].classList.remove("next-slide");
    }
    slides[slideIndex].classList.add("active-slide");
    addprevSlide(slideIndex);
    addnextSlide(slideIndex);
    var slideWidth = slides[slideIndex].offsetWidth;
    var container = document.getElementsByClassName("slideshow-container")[0];
    container.scrollLeft = slides[slideIndex].offsetLeft - (container.offsetWidth - slideWidth) / 2;
}

function prevSlide() {

    clearInterval(slideTimer);

    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

function nextSlide() {

    clearInterval(slideTimer);

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide();
}


function addprevSlide(slideIndex1) {
    slideIndex1--;
    if (slideIndex1 < 0) {
        slideIndex1 = slides.length - 1;
    }
    slides[slideIndex1].classList.add("previous-slide");
}

function addnextSlide(slideIndex1) {
    slideIndex1++;
    if (slideIndex1 >= slides.length) {
        slideIndex1 = 0;
    }
    slides[slideIndex1].classList.add("next-slide");
}

function startSlide() {
    slideTimer = setInterval(function () {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide();
    }, 3000);
}

startSlide();