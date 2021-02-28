$( document ).ready(function() {
    $('.img_item').click(function(event) {
        var img_path = $(this).attr('src');
        $('body').append('<div id="shade"></div><div id="pop-up"><img src="'+img_path+'"><div id="close-popup"><i></i></div></div>');
        $('#pop-up').css({
            left: ($(document).width() - $('#pop-up').outerWidth())/2,
            top: ($(window).height() - $('#pop-up').outerHeight())/2
        });
        $('#shade, #pop-up').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #shade', function(event) {
        event.preventDefault();
        $('#shade, #pop-up').fadeOut('fast', function() {
            $('#close-popup, #pop-up, #shade').remove();
        });
    });
   var sumImg = $('.img_item').length;
    $('.count').text('On this page are ' +sumImg+  ' images');

    var todey = new Date();
    $('.data').text('Today is ' +todey);

});

let date = newDate();

