$(document).ready(function() {

    $('.crossfade').crossfade({
        backgroundPosition: 'center top'
    });

    $('.crossfade-small').crossfade({
        backgroundPosition: 'center center'
    });

    ScrollReveal().reveal('.reveal',
    {
        duration: 1000,
        delay: 100,
        reset: true
    });
});
