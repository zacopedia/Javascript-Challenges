const btn = document.querySelector(".btn");
const containerNotes = document.querySelector(".container-notes")
let notes = document.querySelectorAll("input-box")
// let icon = document.querySelector(".trash")

function showStorage () {

    let storeNotes = localStorage.getItem("notes")
    if(storeNotes) {
        containerNotes.innerHTML = storeNotes
    }
    
}

 function updateStorage () {
    localStorage.setItem("notes", containerNotes.innerHTML)
}


showStorage ()
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let inputBox = document.createElement("p")
    let icon = document.createElement("i")

    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")

    icon.classList.add("fa-solid", "fa-trash", "trash")
    containerNotes.appendChild(inputBox).appendChild(icon)
    
})

containerNotes.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.className == "fa-solid fa-trash trash") {
        e.target.parentElement.remove()
        updateStorage()
    } else if (e.target.tagName = "P") {
        notes.forEach(nts => {
            nts.onkeyup = function () {
                updateStorage()
        }
        })
    }
})
console.log(updateStorage())