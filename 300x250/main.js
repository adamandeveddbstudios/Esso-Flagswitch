// Global ease setting
var easing = Power1.easeInOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new gsap.timeline({ onComplete: endTime });

  animate();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, rotation: 0.01, force3D: true });

  tl.addLabel('frame1', 0)
  tl.addLabel('frame2', 4)
  tl.addLabel('frame3', 9)
    tl.to('#text1', {autoAlpha: 1, duration: 0.5, ease: easing}, 'frame1')
  tl.to('#text1', {autoAlpha: 0, duration: 0.5, ease: easing}, 'frame2-=0.5')
  tl.to('#person1', {autoAlpha: 0, duration: 0.5, ease: easing}, 'frame2-=0.5')
  tl.to('#person2', {autoAlpha: 1, duration: 0.5, ease: easing}, 'frame2')
  tl.to('#text2', {autoAlpha: 1, duration: 0.5, ease: easing}, 'frame2')
  tl.to('#text2', {autoAlpha: 0, duration: 0.5, ease: easing}, 'frame3-=0.5')
  tl.to('#person2', {autoAlpha: 0, duration: 0.5, ease: easing}, 'frame3-=0.5')
  tl.to('#logo', {autoAlpha: 0}, '<')
  tl.to('#person3', {autoAlpha: 1, duration: 0.5, ease: easing}, 'frame3+=0.5')
  tl.to('#text3', {autoAlpha: 1, duration: 0.5, ease: easing}, 'frame3+=0.5')
  tl.to('#cta', {autoAlpha: 1, duration: 0.5, ease: easing}, 'frame3+=1')

}

// End timer

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
