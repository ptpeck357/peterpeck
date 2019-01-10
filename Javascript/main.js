$(document).ready(function() {

  // Crossfade
  $('.crossfade').crossfade({
    backgroundPosition: 'center top'
  });

  $('.crossfade-small').crossfade({
    backgroundPosition: 'center center'
  });

  //SCroll Reveal
  ScrollReveal().reveal('.reveal',
    {
      duration: 1000
    });

  //jQuery Portfolio
  $(".grid").portfolio({
    cols: 3, // Number of columns you want your thumbnails to take. Default is 3
    transition: 'slideDown' // What jQuery transition effect you want. Default is slideDown
  });

});
