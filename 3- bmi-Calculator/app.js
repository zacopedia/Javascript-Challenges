const form = document.querySelector("form")
let result = document.querySelector("#result")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let height = parseFloat(document.querySelector("#height").value)
    let weight = parseFloat(document.querySelector("#weight").value)
    // Number Validation
    if (height <= 0 || weight <= 0) {
        alert("Please Enter a Valid Number")
        return
    } 
    let bmiResult = weight / (height * height)
    result.value = bmiResult.toFixed(2)
    
})