var size=16;
var squareSize=960/size;

$(document).ready(function(){





     for (var i = 0; i < size; i++) {
       $('.wrapper').append("<div class='square'></div>");
       $(".square").css({
         "display": "inline-block",
      "width": squareSize + "px",
      "height": squareSize + "px",

      "background-color": "#999999",

       });
     }


     for (var i = 0; i < size; i++) {
       $('.square').append("<div class='squarec'></div>");
       $(".squarec").css({
         "display": "inline-block",
      "width": squareSize + "px",
      "height": squareSize + "px",
      "outline": "1px solid",
      "background-color": "#999999",

       });
     }


     $('.squarec').hover(function(){
         $(this).css('background-color','black');

     });

    $('#butt').click(function(){

        killGrid();
        var size=prompt("ENTER new size:");
        var squareSize=960/size;

        for (var i = 0; i < size; i++) {
          $('.wrapper').append("<div class='square'></div>");
          $(".square").css({
            "display": "inline-block",
         "width": squareSize + "px",
         "height": squareSize + "px",

         "background-color": "#999999",

          });
        }


        for (var i = 0; i < size; i++) {
          $('.square').append("<div class='squarec'></div>");
          $(".squarec").css({
            "display": "inline-block",
         "width": squareSize + "px",
         "height": squareSize + "px",
         "outline": "1px solid",
         "background-color": "#999999",

          });
        }

        $('.squarec').hover(function(){
            $(this).css('background-color','black');

        });

    });

    function killGrid() {
     $('.wrapper').children().remove();
   }

    $('#butt2').click(function(){
      $('.squarec').hover(function(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    $(this).css('background-color',randomColor);

  });

  });
});
