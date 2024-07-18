"use strict";

$(document).ready(function(){
  AOS.init({
    duration: 500,
    easing: 'ease-in-out-quart',
    once: true
  });

  const typingText = function(index = 0) {
    setTimeout(function() {
      const text = "Junior Web Developer";

      if (text.length >= index) {
        $('#typingText').append(text.charAt(index));

        typingText(++index);
      }
    }, 100);
  }
  typingText();

  $('#currentYear').text(new Date().getFullYear());
})

$(document).on('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#scrollTop').fadeIn('fast');
  } else {
    $('#scrollTop').fadeOut('fast');
  }
})