$(function(){

  /* Start widow prelpader
  -------------------------------------*/
  // const preloader = document.querySelector('.loader');
  // console.log(preloader);
  const preloaderDiv = document.querySelector('.loader');
  setTimeout(function () {
    preloaderDiv.className += " fade";
  }, 7000);

    $('.nav_links nav').slicknav({
        label: '',
        duration: 300,
        prependTo:'.mobile_menu',
        closedSymbol: '&#43;',
        openedSymbol: '&#8722;'
    });
});
