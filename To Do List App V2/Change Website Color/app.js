// Add Default Data to Local Storage
document.body.classList.add(localStorage.getItem('pageColor') || 'first')
var element = document.querySelectorAll('.color-switcher li')
var classesList = [];

for(var i = 0; i < element.length; i++) {
    // Loop On Elements
    classesList.push(element[i].getAttribute("data-color"));

    element[i].addEventListener("click", function(){

        // Remove Old Classes
        document.body.classList.remove(...classesList);

        // Add Current Classes From Li Get Attribute
        document.body.classList.add(this.getAttribute("data-color"));
        // Add Data to Local Storage 
        localStorage.setItem('pageColor', this.getAttribute("data-color"))
    },false);
}








































