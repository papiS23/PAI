const mainInput = document.querySelector('.header__main-input');
const timeInput = document.querySelector('.header__time');
const submit = document.querySelector('.header__submit');
const todoList = document.querySelector('.main__todo-list');

submit.addEventListener('click', e=>{
    e.preventDefault();
    //nie przeladowuje strony

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('main__todo-div');

    const todoText = document.createElement('p');
    todoText.innerText = mainInput.value;
    todoText.classList.add('main__todo-text');
    todoDiv.appendChild(todoText);

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
        // todoDiv.remove();
    });

    todoList.appendChild(todoDiv);
});
