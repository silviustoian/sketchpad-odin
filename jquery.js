

$(document).ready(function(){
     for (var i = 0; i < 16; i++) {
       $('.wrapper').append("<div class='square'></div>");
     }

     for (var i = 0; i < 16; i++) {
       $('.square').append("<div class='squarec'></div>");
     }




     $('.squarec').hover(function(){
         $(this).css('background-color','black');

     });

    $('#butt').click(function(){
        $('.squarec').css('background-color','#999999');
        var what=prompt("ENTER new size:");

    });



});
