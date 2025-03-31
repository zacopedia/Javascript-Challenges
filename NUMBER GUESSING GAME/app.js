const numberGessing = document.querySelector(".number-gessing")
const numberDisplay = document.querySelector(".number-display")
const btn = document.querySelector(".btn")
const reset = document.querySelector(".try-again")
const correctSound = document.querySelector(".correct-sound")
const incorrectSound = document.querySelector(".incorrect-sound")


numGenerate = 30


// User enters guess → clicks "Check"
btn.addEventListener('click', (e) => {
    e.preventDefault()
    // Generate random number between 1–100
    // const numGenerate = Math.floor(Math.random() * 100) + 1
    const userInput = document.querySelector(".user-gessing")
    const inputUser = Number(userInput.value)
     numberGessing.style.display = "inline-block"
       numberDisplay.style.display = "inline-block"
       numberGessing.textContent = numGenerate 

    // If guess === number → show “Correct!” 
    if (inputUser === numGenerate) {
        numberDisplay.textContent = `Correct`
        correctSound.play()
         // If guess > number → show “Too high”
    } else if (inputUser > numGenerate) {
        numberDisplay.textContent = `Too high`
        incorrectSound.play()
        // If guess < number → show “Too low”
    } else if (inputUser < numGenerate) {
        numberDisplay.textContent = `Too low`
    }
})
// Reset option
reset.addEventListener('click', (e) => {
    e.preventDefault()
    // Generate random number between 1–100
     const numGenerate = Math.floor(Math.random() * 100) + 1
     numberGessing.style.display = "none"
     numberDisplay.style.display = "none"
})




