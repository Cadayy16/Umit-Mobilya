const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    })
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');

    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

window.addEventListener('scroll', blurHeader);


var typed = new Typed('#typed span', {
    strings: ['Home Style', 'Living Space', 'Interior Design'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 70,
    loop: true,
    showCursor: false
});


const lambDiv = document.querySelector('.lamb');
const bodyElement = document.body;
const modal = document.getElementById('darkModeModal');
const closeModal = document.querySelector('.close');


const darkModeSetting = localStorage.getItem('darkMode');

if (darkModeSetting === 'enabled') {
    bodyElement.classList.add('dark-mode');
    bodyElement.classList.remove('light-mode');
    modal.style.display = "none";
} else {
    bodyElement.classList.add('light-mode');
    bodyElement.classList.remove('dark-mode');
    // modal.style.display = "block";
}

lambDiv.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        modal.style.display = "none";
    } else {
        localStorage.setItem('darkMode', 'disabled');
        modal.style.display = "none";
    }
});
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: false,
    });
    $('.slider-01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: false,
    });
    $('.slider-02').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: false,
    });
});


$(document).ready(function () {
    $('.marquee ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 1500,
        cssEase: 'linear',
        variableWidth: true,
        centerMode: true,
        arrows: false,
        dots: false,
    });
});


$(document).ready(function () {
    $('.details').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: true,
        autoplay: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="arrow-left"></i></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="arrow-right"></i></button>'
    });
});


$(document).ready(function(){
    $('.comments').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: true,
      arrows: false,
      infinite: true,
      loop: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  








