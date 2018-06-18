/*
Everything goes inside of document.ready ()
In this way Javascript will only be fired once the DOM is loaded
*/

$(document).ready(function() {

  // JavaScript
  window.sr = ScrollReveal();

  // Customizing a reveal set
  sr.reveal('.show-me', { duration: 2000 });


  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 250) {
      $('header').addClass('scrolled-nav');
    } else if (scrollTop < 250) {
      $('header').removeClass('scrolled-nav');
    }

  });

  $('#up, #down').on('click', function(e){
      e.preventDefault();
      var target= $(this).get(0).id == 'up' ? $('#down') : $('#up');
      $('html, body').stop().animate({
         scrollTop: target.offset().top
      }, 1000);
  });

});
