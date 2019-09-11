$(document).ready(function(){

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$('#home').click(function(){
  $.scrollTo('#top', 1000);
});

$('#flavor').click(function(){
  $.scrollTo('#flavorSection', 1500);
})
$('#about').click(function(){
  $.scrollTo('#aboutSection', 1500);
})
$('#contact').click(function(){
  $.scrollTo('#contactSection', 1500);
})

})
// scroll
// $(window).scroll(function() {
// // 100 = The point you would like to fade the nav in.
      
//     if ($(window).scrollTop() > 100 ){
        
//          $('body').addClass('show');
        
//     } else {
        
//         $('body').removeClass('show');
        
//          };   	
//     });
//     $('.scroll').on('click', function(e){		
//             e.preventDefault()
        
//       $('html, body').animate({
//           scrollTop : $(this.hash).offset().top
//         }, 1500);
//     });
    
// $('.scroll').on('click', function(e){		
//     e.preventDefault()

// $('html, body').animate({
//   scrollTop : $(this.hash).offset().top
// }, 1500);
// });

//parallex
$(document).ready(function() {
  
    // Find the initial scroll top when the page is loaded.
    var initScrollTop = $(window).scrollTop();
    
    // Set the image's vertical background position based on the scroll top when the page is loaded.
    $(parallax1).css({'background-position-y' : (initScrollTop/75)+'%'});
    
    // When the user scrolls...
    $(window).scroll(function() {
      
      // Find the new scroll top.
      var scrollTop = $(window).scrollTop();
      
      // Set the new background position.
      $(parallax1).css({'background-position-y' : (scrollTop/75)+'%'});
      
    });
    
  });
  //wow
  new WOW().init();
  
//   //smooth
//   // Select all links with hashes
// $('a[href*="#"]')
// // Remove links that don't actually link to anything
// .not('[href="#"]')
// .not('[href="#0"]')
// .click(function(event) {
//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//     && 
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000, function() {
//         // Callback after animation
//         // Must change focus!
//         var $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//           $target.focus(); // Set focus again
//         };
//       });
//     }
//   }
// });