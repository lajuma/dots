
function animateLogo() {
  const tl = new TimelineLite();
  const dots = animateDots();
  const letters = animateLetters();
  tl
    .add(letters)
    .add(dots, '-=0.7');
}

function animateLetters() {
  const logo = $('.logoText');
  const tl = new TimelineLite();
  tl
    .from(logo, 1, {x: 300, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.4)});
  return tl;
}

function animateDots() {
  const dots = $('.logoDot');
  const colors = ['#CB4335','#F39C12','#F4D03F', '#27AE60','#3498DB'];

  // get dots a random color each, but never the same
  dots.each(function() {
    const i = Math.floor(Math.random()*colors.length);
    $(this).css('background-color', colors[i]);
    colors.splice(i, 1);
  });

  // animation dots to pop in
  const tl = new TimelineLite();
  tl
    .staggerFromTo(dots, 0.5, {y: -10, autoAlpha: 0, scale: 0.3, ease: Power2.easeInOut}, {y: 0, autoAlpha: 1, scale: 2, ease: Power2.easeInOut}, 0.1)
    .staggerTo(dots, 0.5, {scale:1, ease: Power1.easeOut}, 0.1, '-=0.3');
  return tl;
}

function drawAnimation(dot) {
  const tl = new TimelineLite();
  tl.fromTo(dot, 0.3, {scale: 1.5, ease: Back.easeOut}, {scale: 1});
}

function rubAnimation(dot) {
  const tl = new TimelineLite();
  tl.to(dot, 0.2, {scale: 0, ease: Power2.easeIn})
    .to(dot, 0, {scale: 1, backgroundColor: 'transparent'});
}

function resetAnimation() {
  const tl = new TimelineLite({ onComplete: fillCanvas });
  const dots = $('.dot');
  tl.to(dots, 0.3, {scale: 0.3, ease: Power2.easeIn, autoAlpha: 0})
    .to(dots, 0, {scale: 1, backgroundColor: 'transparent'});
}
