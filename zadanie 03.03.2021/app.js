const mainInput = document.querySelector('.header__main-input');
const timeInput = document.querySelector('.header__time');
const submit = document.querySelector('.header__container');
const todoList = document.querySelector('.main__todo-list');

document.addEventListener('DOMContentLoaded', getTodos);

submit.addEventListener('submit', e=>{
    e.preventDefault();
    //nie przeladowuje strony

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('main__todo-div');

    const todoText = document.createElement('p');
    let text = `${mainInput.value}     ${timeInput.value}`;
    todoText.innerText = text;
    todoText.classList.add('main__todo-text');
    todoDiv.appendChild(todoText);

    saveLocalTodos(text);//zapisanie w localstorage
    mainInput.value = '';

    const todoChechBtn = document.createElement('button');
    todoChechBtn.classList.add('main__check-btn');
    const todoCheckIcon = document.createElement('img');
    todoCheckIcon.src = './img/check-icon.svg';
    todoCheckIcon.classList.add('main__check-icon');
    todoChechBtn.appendChild(todoCheckIcon);
    todoDiv.appendChild(todoChechBtn);


    todoChechBtn.addEventListener('click',()=>{
        todoDiv.classList.toggle('main__todo-div--completed');
    });

    const todoTrashBtn = document.createElement('button');
    todoTrashBtn.classList.add('main__trash-btn');
    const todoTrashIcon = document.createElement('img');
    todoTrashIcon.src = './img/trash-icon.svg';
    todoTrashIcon.classList.add('main__trash-icon');
    todoTrashBtn.appendChild(todoTrashIcon);
    todoDiv.appendChild(todoTrashBtn);

    todoTrashBtn.addEventListener('click',()=>{
        todoDiv.classList.add('main__todo-div--fall');
        removeLocalTodos(todoDiv);
        todoDiv.addEventListener('transitionend',()=>{
            todoDiv.remove();
        });
    });

    todoList.appendChild(todoDiv);
});

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('main__todo-div');

        const todoText = document.createElement('p');
        todoText.innerText = todo;
        todoText.classList.add('main__todo-text');
        todoDiv.appendChild(todoText);


        const todoChechBtn = document.createElement('button');
        todoChechBtn.classList.add('main__check-btn');
        const todoCheckIcon = document.createElement('img');
        todoCheckIcon.src = './img/check-icon.svg';
        todoCheckIcon.classList.add('main__check-icon');
        todoChechBtn.appendChild(todoCheckIcon);
        todoDiv.appendChild(todoChechBtn);


        todoChechBtn.addEventListener('click',()=>{
            todoDiv.classList.toggle('main__todo-div--completed');
        });

        const todoTrashBtn = document.createElement('button');
        todoTrashBtn.classList.add('main__trash-btn');
        const todoTrashIcon = document.createElement('img');
        todoTrashIcon.src = './img/trash-icon.svg';
        todoTrashIcon.classList.add('main__trash-icon');
        todoTrashBtn.appendChild(todoTrashIcon);
        todoDiv.appendChild(todoTrashBtn);

        todoTrashBtn.addEventListener('click',()=>{
            todoDiv.classList.add('main__todo-div--fall');
            removeLocalTodos(todoDiv);
            todoDiv.addEventListener('transitionend',()=>{
                todoDiv.remove();
            });
        });

        todoList.appendChild(todoDiv);
    });
}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    console.log(todo.children[0]);
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
