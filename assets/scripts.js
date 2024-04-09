function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

const jmk = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cDp1XJoMTDPov6SqIpFIs23hwGptMPL_h9HWUT12IQ&s',
            'https://i.pinimg.com/236x/3c/3a/d2/3c3ad2371c25000d72a7b3b4b7157603.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCAJluHP6dkY4K1rsLk8WHHT8KiZWnjTgntur9HKpCg&s',
            'https://i.pinimg.com/236x/54/89/94/548994c6b206c3e2d29a13d9737a9ce0.jpg',
            'https://www.youtube.com/watch?v=WmmINrVg1_Y',
            'https://www.youtube.com/watch?v=50f-zYortkU',
            'https://i.pinimg.com/236x/58/47/0c/58470cbb4c0632fddb55931dfa991ba2.jpg',
            'https://images.tokopedia.net/img/JFrBQq/2022/4/28/d2d51cc4-e097-427c-8e23-879d18cf6a56.jpg',
            'https://www.youtube.com/shorts/JqEXXeZSzTg'
          ]

const generateMemeEvent = 'memeJMK'

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

  const imageMeme = document.querySelector('.lamp');
  imageMeme.addEventListener("click", function(){
    const numberRandom = Math.floor(Math.random()*10)
    alert("Selamat Anda menemukan EasterEGG :) lop u");
    window.open(jmk[numberRandom]);
  });

});

