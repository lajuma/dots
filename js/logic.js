function fillCanvas() {
  const box = $('#dot-box');
  const canvas = $('.canvas');

  // width and height for dot-box
  const canvasWidth = getDotBoxWidth();
  const canvasHeight = getDotBoxHeight();
  canvas.css('max-width', canvasWidth).css('max-height', canvasHeight);

  // count dots per row and column
  const dotsPerRow = canvasWidth/12;
  const dotsPerColumn = canvasHeight/12;

  box.empty();
  // set in table to preserve dimensions
   for (let i=1; i<=dotsPerColumn; i++) {
     box.append('<tr>');
     for (let j=1; j<=dotsPerRow; j++) {
       box.append('<td><div class="dot"></div></td>');
     }
     box.append('</tr');
   }
}

function getDotBoxWidth() {
  /*
  ** window inner width minus 10% of canvas margin
  */
  return Math.floor((window.innerWidth*0.90));
}

function getDotBoxHeight() {
  /*
  ** window inner height minus header height minus 18%
  */
  return Math.floor((window.innerHeight - $('header').height())*0.82);
}

function setColorPresets(color) {
  var colorDesc = '';
  switch (color) {
     case '#CB4335': colorDesc = 'red'; break;
     case '#F39C12': colorDesc = 'orange'; break;
     case '#F4D03F': colorDesc = 'yellow'; break;
     case '#27AE60': colorDesc = 'green'; break;
     case '#3498DB': colorDesc = 'blue'; break;
     case '#000000': colorDesc = 'black'; break;
  }
  $('#colorDesc').text(colorDesc).css('color', color);
}

function getMessage(action) {
  let message = '';
  switch (action) {
    case 'beforeDraw' :
      message = 'Click into canvas to start drawing.';
      $('.currentColor').css('visibility', 'visible');
      break;
    case 'draw' :
      message = 'Click again to stop drawing.';
      $('.currentColor').css('visibility', 'visible');
      break;
    case 'continueDraw' :
      message = 'Click again to continue drawing.';
      $('.currentColor').css('visibility', 'visible');
      break;
    case 'beforeRub' :
      message = 'Click into canvas to start rubbing.';
      $('.currentColor').css('visibility', 'hidden');
      break;
    case 'rub' :
      message = 'Yeah, get rid of those dots!';
      $('.currentColor').css('visibility', 'hidden');
      break;
    case 'continueRub' :
      message = 'Click again to continue rubbing.';
      $('.currentColor').css('visibility', 'hidden');
      break;
    case 'errorRub' :
      message = 'No draw no rub! Please draw first.';
      $('.currentColor').css('visibility', 'hidden');
      break;
    case 'reset' :
      message = 'This was fuck? Try again!';
      $('.currentColor').css('visibility', 'hidden');
      break;
    case 'start' :
    default :
      message = 'Click draw to choose your color.';
      $('.currentColor').css('visibility', 'hidden');
      break;
  }
  $('#whatAction').text(message);
}
