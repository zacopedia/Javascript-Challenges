const btn = document.querySelector(".btn")
const diceNumber = document.querySelector(".dice-number")
const diceResult = document.querySelector(".dice-result")
const diceImages = document.querySelector(".dice-images")




btn.addEventListener('click', (e) => {
    e.preventDefault()
    // Convert dice number string to number
    const dicenum = Number(diceNumber.value)
    if (isNaN(dicenum) || dicenum <= 0) {
        diceResult.textContent = `Please Enter Valide Number`
        diceImages.innerHTML = ''
        return
    }

    const values = []
    const images = []
    //  when click button loop in each dice number
    for (let i = 0; i < dicenum; i++) {
    // Generate Random Number between 1 and 6
    const value = Math.floor(Math.random() * 6) + 1
     values.push(value)
     // push image to Array images
     images.push(`<img src="./images/${value}.png" alt="dice ${value}">`)
    
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join(' ')
    
})





//  when click button loop in each dice number 
// Generate Random Number between 1 and 6
// push the value to Array values
// push image to Array images
// Display dice result from the random number 
// Display dice images  