let btn = document.getElementById("btn");
let result = document.getElementById("result");
let display = document.querySelector(".display")


//  btn.addEventListener("click", function (){
//     var weight = document.getElementById("weight").value;
//     var height = document.getElementById("height").value;
    

//     let bmi = weight / (height * height).value;

//     result.textContent = bmi;
// })

btn.addEventListener("click", e=> {

   e.preventDefault();
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat( document.getElementById("height").value);
  

    let calculate = (weight / (height * height));

    result.value = calculate.toFixed(2);
    display.textContent = `your BMI is ${calculate.toFixed(2)}`
})

