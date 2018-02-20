
function fillCanvas() {
  const box = $('#dot-box');

  // width and height for dot-box
  const boxWidth = getDotBoxWidth();
  const boxHeight = getDotBoxHeight();
  box.css('width', boxWidth).css('height', boxHeight);

  // count dots per row and column
  const dotsPerRow = boxWidth/12;
  const dotsPerColumn = boxHeight/12;

   for (let i=1; i<=dotsPerColumn; i++) {
     box.append('<tr>');
     for (let j=1; j<=dotsPerRow; j++) {
       box.append('<td><div class="dot"></div></td>');
     }
     box.append('</tr');
   }
}

function getDotBoxWidth() {
  return Math.floor((window.innerWidth*0.90));
}

function getDotBoxHeight() {
  /*
  ** take window inner height
  ** minus 2% of height (margin of dot-box)
  ** minus header height (+ 20px header margin)
  ** minus 10px as buffer for bottom margin
  */
  return Math.floor((window.innerHeight*0.95 - $("header").height() - 30));
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
