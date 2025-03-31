const numberLabel = document.querySelector(".number-label")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const rest = document.querySelector(".reset")
let count = 0


increment.addEventListener('click', () => {
      count ++;
      numberLabel.textContent = count
})

decrement.addEventListener('click', () => {
      count --;
      numberLabel.textContent = count
      if (count <= 0) {
        count = 0 + 1
      }
})

rest.addEventListener('click', () => {
        count = 0
        numberLabel.textContent = count
})

