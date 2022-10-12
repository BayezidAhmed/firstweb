$(document).ready(function () {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,

        },
        1200:{
            items:1,
            stagePadding: 350,

        }
    }
})
});

 // fixed nav
 $(document).ready(function () {
 $(window).scroll(function () {
    var navScroll = $(window).scrollTop();
    if (navScroll >= 80) {
      $("#header").addClass("nav-fixed");
    } else {
      $("#header").removeClass("nav-fixed");
    }
  });

});

(() =>{
var barGroup = document.querySelector(".nav-bar-toggler");
var mobileNav = document.querySelector(".navigation-area");
var bodyStyle = document.querySelector("body");

barGroup.onclick = function (){
    bodyStyle.classList.toggle('body-style')
    barGroup.classList.toggle('click-style')
    mobileNav.classList.toggle('nav-show')
  
}
})();

$(document).ready(function () {
$(".process-tab .nav-item").hover(function () {
    $(".process-tab .nav-item").removeClass("active"), $(this).prevAll().addClass("active"), $(this).addClass("active");
})
});