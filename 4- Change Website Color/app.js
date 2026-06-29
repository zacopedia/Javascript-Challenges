// Add Default Data to Local Storage
document.body.classList.add(localStorage.getItem('pageColor') || 'first')
const element = document.querySelectorAll('.color-switcher li')
const classesList = [];


   element.forEach(item => {
           // Loop On Elements
   const colorClass = item.getAttribute("data-color")
   classesList.push(colorClass)

item.addEventListener('click', ()=> {
       // Remove Old Classes
       document.body.classList.remove(...classesList);

       // Add Current Classes From Li Get Attribute
       document.body.classList.add(colorClass);
       // Add Data to Local Storage 
       localStorage.setItem('pageColor', colorClass)
})

     
    
   })
   









































