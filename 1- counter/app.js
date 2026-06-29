const numberLabel = document.querySelector(".number-label")
const btnIncrement = document.querySelector(".increment")
const btnDecrement = document.querySelector(".decrement")
const btnReset = document.querySelector(".reset")
let count = 0

function updateCounter () {
    numberLabel.textContent = count
}
btnIncrement.addEventListener("click", () => {
    count++
    updateCounter ()
})

btnDecrement.addEventListener("click", () => {
    if (count > 0) {
        count--
    }
    updateCounter ()

    
})

btnReset.addEventListener("click", () => {
    count = 0
    updateCounter ()
})




