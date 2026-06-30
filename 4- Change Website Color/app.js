const color = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.querySelector(".btn")
const body = document.querySelector("body")
const showHex = document.querySelector(".show-hex")

// user clicks color
btn.addEventListener("click", () => {
   let hex = "#"
   for (let i = 0; i < 6; i++) {
      // generate random color
      let randomIndex = Math.floor(Math.random() * color.length)
      hex += color[randomIndex]
      // show the color code
      showHex.textContent = hex
   }
   // change the page background
   body.style.backgroundColor = hex
})













































