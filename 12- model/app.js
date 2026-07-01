// Get The Model Div
var model = document.querySelector('.model');

// Get The Image
var img = document.querySelector('.the-img');

// When Click On The Image
img.addEventListener("click", function() {
     model.style.display = "block";
    //  Get Model Image
    var modelImage = document.querySelector('.model-image');
    modelImage.src = this.src;

    // Get Caption Image
    var caption = document.querySelector('.caption');
    caption.innerHTML = this.alt;
})

 // Get The Close Btn
 var close = document.querySelector('.close');
   
 // When Click On Close Hide The Model 
 close.addEventListener("click", function() {
     model.style.display = "none";
 })

// When Press ESC Hide The Model
document.onkeydown = function (eve) {
    if (eve.keyCode == "27") {
      model.style.display = "none";
    }
}


