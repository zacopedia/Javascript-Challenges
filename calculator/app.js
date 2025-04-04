const inputScreen = document.querySelector(".input-screen")
const btns = document.querySelectorAll(".btn")
const btnClear = document.querySelector(".btn-clear")
const equal = document.querySelector(".equal")

btns.forEach(btn => {
    if(!btn.classList.contains("equal") && !btn.classList.contains("btn-clear")) {
        btn.addEventListener('click', () => {
            inputScreen.value += btn.textContent
        })
    }

})

equal.addEventListener('click', () => {
    inputScreen.value = eval(inputScreen.value)
})

btnClear.addEventListener('click', () => {
    inputScreen.value = ''
})






// console.log(btn.value)

// display inputScreen value 

// Click Event for each btn to inputScreen
// Click Event for each multiplcationOperators btn-operator to inputScreen
// Claculate what in inputScreen with Eval()



