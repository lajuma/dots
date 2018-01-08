
function fillContent(dots) {
   for (var i = 0; i < dots; i++) {
      $("#dot-box").append("<div class='dot'></div>");
   }
   return $("#dot-box");
}

function soManyDots() {
   var width = $(".custom-container").width();
   var height = $(".custom-container").height();
   return (width/12)*(height/12);
}

function pickColor() {
    $('#btn-draw').simpleColorPicker({ onChangeColor: function(color) {
      var colorDesc = "";
      switch (color) {
         case "#CB4335": colorDesc = "red"; break;
         case "#F39C12": colorDesc = "orange"; break;
         case "#F4D03F": colorDesc = "yellow"; break;
         case "#27AE60": colorDesc = "green"; break;
         case "#3498DB": colorDesc = "blue"; break;
         case "#000000": colorDesc = "black"; break;
      }
      $('#colorResult').text(color);
      $('#whatAction').show().text("Currently drawing ");
      $('#colorDesc').show().text(colorDesc).css("color", color); } });
}
