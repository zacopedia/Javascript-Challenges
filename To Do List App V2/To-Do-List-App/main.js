let addForm = document.getElementById('add');
let list = document.getElementById('todos');


let genrateTemplate = todo => {
  let  html = `
  <li class="list-group"><span>${todo}</span>
    <i class="far fa-trash-alt delete icon"></i>
 </li>
    `

    list.innerHTML += html;

}

addForm.addEventListener('submit', e=> {
    e.preventDefault();

    let todo = addForm.add.value.trim();

    if(todo.length) {
        genrateTemplate(todo);
    }

    addForm.reset();


});


list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})