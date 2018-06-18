/*
Everything goes inside of document.ready ()
In this way Javascript will only be fired once the DOM is loaded
*/

$(document).ready(function() {

  // JavaScript
window.sr = ScrollReveal();

// Customizing a reveal set
sr.reveal('.show-me', { duration: 2000 });


});
