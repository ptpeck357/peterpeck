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
  $('.thumbs').portfolio({
    cols: 3,
    transition: 'slideDown'
  });

});
