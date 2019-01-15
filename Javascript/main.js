$(document).ready(function() {

  $(".arrow").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  // Crossfade
  $('.crossfade').crossfade({
    backgroundPosition: 'center top',
    threshold: 0.2
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
