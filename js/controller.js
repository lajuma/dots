
$(document).ready(function () {

   switchView("start");

   $("#btn-start").on("click", function() {
      switchView("play");
      fillCanvas();
      $('#whatAction').text("Click draw to choose your color");
   });

   $("#btn-draw").on("click", pickColor(), function() {
      $(".dot").on("mouseover", function() {
         var pickedColor = $("#colorResult").text();
         $(this).css("background-color", pickedColor);
      });
      var clicks = 0;
      $("#dot-box").on("click", function() {
         if (clicks % 2 === 0) {
            $(".dot").unbind("mouseover");
            if (pickedColor !== 'transparent') {
               $('#whatAction').text("Click again to continue drawing");
            }
            clicks++;
         } else {
            var pickedColor = $("#colorResult").text();
            $(".dot").on("click", function() {
               $('#whatAction').text("Currently drawing");
               $(this).css("background-color", pickedColor);
            });
            $(".dot").on("mouseover", function() {
               $('#whatAction').text("Currently drawing");
               $(this).css("background-color", pickedColor);
            });
            clicks++;
         }
      });
   });

   $('#btn-rub').on("click", function() {
      var pickedColor = "transparent";
      $('#whatAction').text("Yeah. Get rid of those dots!");
      $('#colorDesc').hide();
      $('.dot').on("mouseover", function() {
         $(this).css("background-color", pickedColor);
      });
      $("#dot-box").on("click", function() {
         $('#whatAction').text("Nice!");
         $(".dot").unbind("mouseover");
         $(".dot").unbind("click");
      });
   });

   $("#btn-reset").on("click", function() {
      $(".dot").remove();
      fillCanvas();
      $(".dot").unbind("mouseover");
      $('#whatAction').text("This was fuck? Try again!");
      $('#colorDesc').hide();
      });

});

function switchView (view) {
   if (view === "play") {
      $("#play").show();
      $("#start").hide();
   } else {
      $("#play").hide();
      $("#start").show();
   }
}
