function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

$(document).ready(function(){

  
  var myScreenOrientation = window.screen.orientation;
  myScreenOrientation.lock("portrait");

  console.log("fucker");
  const stars = document.querySelector('.stars');
  const canvasSize = document.body.offsetWidth * (document.body.offsetHeight/2);
  const starsFraction = canvasSize / 2000;

  for(let i = 0; i < starsFraction; i++) {
    // Set up random elements
    let xPos = random(0, 100);
    let yPos = random(0, 100);
    let alpha = random(0.5, 1);
    let size = random(1, 2);
    let colour = '#ffffff';
      
    // Add them to the body
    const star = document.createElement('div');
    star.style.position = 'relative';
    star.style.left = xPos + '%';
    star.style.top = yPos + '%';
    star.style.opacity = alpha;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = colour;
    star.className = "star";
    stars.appendChild(star);
  }
  

  var $elements = $('.animation');

  var isMobileDeviceScreen = window.matchMedia("only screen and (max-width: 768px)").matches;
  if (isMobileDeviceScreen.matches) {
      $elements.removeClass('animation');
  }

  const   observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
              entry.target.classList.add('viewed');
          }else {
              entry.target.classList.remove('viewed');
          }
      });
  });

  const elementTarget = document.querySelectorAll('.animation');
  elementTarget.forEach((el)=> observer.observe(el));

});

