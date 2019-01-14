$(document).ready(function() {

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Crossfade
  $('.crossfade').crossfade({
    backgroundPosition: 'center top'
  });

  $('.crossfade-small').crossfade({
    backgroundPosition: 'center center'
  });

  //Scroll Reveal
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
