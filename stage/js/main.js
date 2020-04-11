$(function(){

  /* Start widow prelpader
  -------------------------------------*/
  // const preloader = document.querySelector('.loader');
  // console.log(preloader);
  const preloaderDiv = document.querySelector('.loader');
  setTimeout(function () {
    preloaderDiv.className += " fade";
  }, 7000);

  $('#menu').slicknav();
});
