const heading = document.querySelectorAll(".btn")
let desc = document.querySelectorAll(".desc")

for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active")

        if (desc[i].style.display == "none") {
            desc[i].style.display = "block"
        } else {
            desc[i].style.display = "none"
        }
    }) 
}

