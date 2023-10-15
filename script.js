
let newTask = document.getElementById("newTask")
let list = document.getElementById("list")
let todo = []



function insert() {

    todo.push(newTask.value)
    generateList(todo)

}

function deleteAll() {

    todo.splice(0,todo.length)
    generateList(todo)

}

function generateList(todo) { 

    list.innerHTML=""
    todo.forEach((element, key)=> {
        const task = `<div class="card" style="width: 18rem;" id="task${key}">
        <div class="card-body">
          <p class="card-text">${element}</p>
          <button class="btn btn-primary" id="${key}" onclick="delItem(this.id)">DONE</button>
        </div>
        </div>`
        list.insertAdjacentHTML("beforeend", task)
    })
}

function delItem(id){

    var childElem = document.getElementById ("task"+id);
    var parent = document.getElementById (list);
    parent = childElem.parentNode
    parent.removeChild(childElem);
    todo.splice(id,1)

}