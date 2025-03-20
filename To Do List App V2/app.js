const btn = document.querySelector(".btn");
const containerNotes = document.querySelector(".container-notes")
let notes = document.querySelectorAll("input-box")
// let icon = document.querySelector(".trash")
 function updateStorage () {
    localStorage.setItem("notes", containerNotes.innerHTML)
}

function showStorage () {
    containerNotes.innerHTML = localStorage.getItem("notes")
}
showStorage ()
btn.addEventListener('click', () => {
    
    let inputBox = document.createElement("p")
    let icon = document.createElement("i")

    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")

    icon.classList.add("fa-solid", "fa-trash", "trash")
    containerNotes.appendChild(inputBox).appendChild(icon)
    
})

containerNotes.addEventListener('click', function (e) {
    if (e.target.className == "fa-solid fa-trash trash") {
        e.target.parentElement.remove()
        updateStorage()
    }
})
console.log(updateStorage())