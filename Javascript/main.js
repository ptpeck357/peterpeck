$(document).ready(function() {

    $('.crossfade').crossfade({
        backgroundPosition: 'center top'
    });

    $('.crossfade-small').crossfade({
        backgroundPosition: 'center center'
    });

    ScrollReveal().reveal('.bio');

});
