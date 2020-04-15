$(function(){

  /* Start widow prelpader
  -------------------------------------*/
  // const preloader = document.querySelector('.loader');
  // console.log(preloader);
  const preloaderDiv = document.querySelector('.loader');
  setTimeout(function () {
    preloaderDiv.className += " faade";
  }, 4000);


  /* Start search box overlay
  -------------------------------------*/
  const searchBoxOverlay = document.querySelector('.search-box'),
        searchBoxIcon    = document.querySelector('.search-icon'),
        searchBoxContent = document.querySelector('.search_box_content');
  searchBoxIcon.onclick = () => {
    searchBoxOverlay.classList.add('open_overlay');
  }
  searchBoxContent.onclick = () => {
    searchBoxOverlay.classList.remove('open_overlay');
  }

  /* Start fixed header top
  -------------------------------------*/
  const headerAreaBottom = document.getElementById('header_area_bottom');
  window.onscroll = () => {
    'use strict';
    if (window.pageYOffset > 150) {
      headerAreaBottom.classList.add('fixed');
    } else {
      headerAreaBottom.classList.remove('fixed')
    }
  }
/* End fixed header top
------------------------------------------*/

/* Start slick nav mobile menu
--------------------------------------------*/

  $('.nav_links nav').slicknav({
    label: '',
    duration: 300,
    prependTo:'.mobile_menu',
    closedSymbol: '&#43;',
    openedSymbol: '&#8722;'
  });

  /* End slick nav mobile menu
  --------------------------------------------*/

  /* Start owl Carousel slider
  ---------------------------------------------*/
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    dots:true,
    autoplaySpeed: 500,
  });

  /* End owl Carousel slider
  ---------------------------------------------*/
  /* Start treger wow js
  ---------------------------------------------*/
  new WOW().init();

  /* End treger wow js
  ---------------------------------------------*/
});
