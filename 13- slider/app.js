

// Get Slider Items 
let sliderImage = Array.from(document.querySelectorAll('.slide-container img'));

// Get Number Of slide
let slideCount = sliderImage.length;

// Current Slide
let currentSlide = 1;

// Next and Previous Button
let nextButton = document.querySelector('#next');
let prevButton = document.getElementById('previous');

// Hundle Click On Next and Previous

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Triger Checker Function
checker();

// Next Slide Function
function nextSlide() {

    if (currentSlide >= slideCount) {
        return currentSlide = 0;
    }
    else {
        currentSlide++;
        checker();
    }
    
}

// Previous Slide Function
function prevSlide() {
  
    if (currentSlide >= slideCount) {
        return false;
    }
    else {
        currentSlide--;
        checker();
    }
    
}

// Creat The Checker Function
function checker() {
    removeClasses()
    sliderImage[currentSlide - 1].classList.add("active");
}

// Remove All Classes From Images 
 function removeClasses() {
    //  Loop Through Images
    sliderImage.forEach(function(image){
         image.classList.remove("active");
    })

 }










console.log(sliderImage);