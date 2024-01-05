const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
},   
  { name:  'wash dishes',
   dueDate: '2022-12-22'
}];
renderTodoList();
function renderTodoList(){

let todolistHtml = '';
for(let i=0;i<todoList.length;i++){
    const todoObject = todolist[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = <p>${name} ${dueDate} <button onclick="
    
    todoList.splice(${i}, 1);
    renderTodoList();

    ">Delete</button></p>;
    todolistHtml += html;
}

document.querySelector('.js-todo-list').innerHTML = todolistHtml;
}

console.log(todolistHtml);

function addTodo(){
   const inputElement = document.querySelector(`.js-name-input`);
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dateInputElement = dateInputElement.value;
    todoList.push({
        name,
        dueDate
    });
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}