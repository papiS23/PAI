//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(evt){
    evt.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add('trash-btn');
    todoDiv.appendChild(trashdButton);

    todoList.appendChild(todoDiv);

    todoInput.value = '';
}

function deleteCheck(evt){
    const item = evt.target;

    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })
    }

    if(item.classList[0]=== 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
