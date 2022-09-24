
//ToDo-List//

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);


function formHandler (event) {
    event.preventDefault();

    const taskText = todoInput.value; 
    
    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '15px';

    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);

    function deleteTask(){
        newTask.remove();
    }

    todoList.append(newTask);

    todoInput.value = '';

    todoInput.focus();

}


//Timer//

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;



const btnStart = document.querySelector('#start');
btnStart.onclick = function () {

    timerID = setInterval(function(){
        counter = counter + 1;
        //counter++;
    
        counterElement.innerText = counter;
    
    }, 1000); 
}


const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
    clearInterval (timerID);
}


const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0; 
    clearInterval (timerID);
    counterElement.innerText = counter;
}
