$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [{
                        breakpoint: 992,
                        settings: {
                            dots: true,
                            arrows: false
                        }
                    }]
      });
  });

// let slider = tns({
//     container: '.carusel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     nav:false,
//     controls: false
// });

// document.querySelector('.prev').onclick = function () {
//     slider.goTo("prev");
// };

// document.querySelector('.next').onclick = function () {
//     slider.goTo("next");
// };