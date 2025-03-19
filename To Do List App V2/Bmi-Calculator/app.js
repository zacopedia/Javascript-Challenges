let btn = document.getElementById("btn");
let result = document.getElementById("result");


//  btn.addEventListener("click", function (){
//     var weight = document.getElementById("weight").value;
//     var height = document.getElementById("height").value;
    

//     let bmi = weight / (height * height).value;

//     result.textContent = bmi;
// })

btn.addEventListener("click", e=> {

   e.preventDefault();
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    

    let calculate = (weight / (height * height));

    result.value = calculate;
})

