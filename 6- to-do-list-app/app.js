// User:
// Enter a Task
// Click Add 
// See The Task In The List
// Click Delete To Remove It
let form = document.querySelector("form")
let input = document.querySelector("input")
let todos = document.querySelector(".todos")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // Check If The Iput Is Empty
    if (input.value.trim() == "") {
        alert("Must Fill The Input")
        return
    } 

    createNewTodo ()
    clearInput ()
})

todos.addEventListener("click", (e) => {
    // Delete The Selected Item When Delete Is Clicked
    if (e.target.classList.contains("delete")) {
        deleteTodo (e)
    } 
})

function createNewTodo () {
    // Create a New Todo Item
    // Add It To The List 
        todos.innerHTML += `<li class="list-group"><span>${input.value}</span>
                        <i class="far fa-trash-alt delete icon"></i>
                    </li>`
}

function clearInput () {
    // Clear The Input
    input.value = ""
    input.focus()
}

function deleteTodo (e) {
    e.target.parentElement.remove()
}

