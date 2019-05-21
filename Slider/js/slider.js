let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

function start() {
	reset();
	sliderImages[current].style.backgroundImage = 'url("img/slides/slide-' + current + '.jpg")';
	sliderImages[current].style.opacity = '1';
}
	
function reset() {
    for(let i=0; i<sliderImages.length; i++) {
        //sliderImages[i].style.display = "none";
        sliderImages[i].style.opacity = "0";
    }
}

function slideLeft() {
    reset();
    if(current == 0) {
       //console.log("current<0");
        current = sliderImages.length;
    }
    sliderImages[current-1].style.backgroundImage = 'url("img/slides/slide-' + (current-1) + '.jpg")';

    sliderImages[current-1].style.opacity = "1";
    current--;
}

function slideRight() {
    reset();
   // console.log(current);
    if(current >= sliderImages.length-1) {
        //console.log("current > all img");
        current = -1;
        sliderImages[0].style.backgroundImage = 'url("img/slides/slide-0.jpg")';
    }
    sliderImages[current+1].style.backgroundImage = 'url("img/slides/slide-' + (current+1) + '.jpg")';
    //sliderImages[current+1].style.display = "block";
	
    sliderImages[current+1].style.opacity = "1";
    current++;
}


function startSlide() {
    sliderImages[0].style.display = "block";
}

arrowRight.addEventListener("click", function() {
    clearInterval(timerSlider);
    timerSlider = setInterval(function() {
        slideRight();
    }, 4000);

    slideRight();
}, false);

arrowLeft.addEventListener("click", function() {
    clearInterval(timerSlider);
    timerSlider = setInterval(function() {
        slideRight();
    }, 4000);
    slideLeft();
}, false);

start();


var timerSlider = setInterval(function() {
    slideRight();
}, 10000);