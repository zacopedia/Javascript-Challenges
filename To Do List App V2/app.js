const btn = document.querySelector(".btn");
const containerNotes = document.querySelector(".container-notes")
const trash =document.querySelector(".trash")

btn.addEventListener('click', () => {
    let inputBox = document.createElement("p")
    let icon = document.createElement("i")

    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")

    icon.classList.add("fa-solid", "fa-trash", "trash")

    containerNotes.appendChild(inputBox)
   containerNotes.appendChild(icon)
})
