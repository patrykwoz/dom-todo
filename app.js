// Function to generate a random RGB color.
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Function to change body background color based on mouse position.
function changeBodyColorOnMouseMove(event) {
    const r = Math.round(event.pageY * 255 / window.innerHeight);
    const b = Math.round(event.pageX * 255 / window.innerWidth);
    document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`;
}

// Function to handle todo item interactions.
function handleTodoItemClick(event) {
    const clickedItem = event.target;
    if (clickedItem.tagName === 'BUTTON') {
        clickedItem.parentElement.remove();
         // save to localStorage
        savedTodos.pop({ todo: todoItem.value, isCompleted: false });
        localStorage.setItem("todos", JSON.stringify(savedTodos));

    } else if (clickedItem.tagName === 'LI') {
        clickedItem.classList.add('todo-done');
        clickedItem.isCompleted = true;
        let index = savedTodos.find(todo => todo.tId === clickedItem.id);
        index.isCompleted = true;
        console.log(savedTodos);


        localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
    

}

// Function to handle addition of a new todo item.
function handleTodoFormSubmit(event) {
    event.preventDefault();

    const newTodo = document.createElement('li');
    const removeTodo = document.createElement('button');
    const todoId = Math.random().toString(36).substring(2,9);

    removeTodo.innerText = 'Remove Todo';
    removeTodo.classList.add('todo-button');
    
    currentTodo = todoItem.value;
    newTodo.innerText = currentTodo;
    newTodo.isCompleted = false;
    newTodo.id = todoId;

    newTodo.appendChild(removeTodo);
    todoList.appendChild(newTodo);

    todoItem.value = ''; // Clear the input.

    
    // save to localStorage
    savedTodos.push({ todo: currentTodo, isCompleted: false, tId: todoId });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

// DOM Element References
const todoForm = document.querySelector('#todo-add');
const todoItem = document.querySelector('#todo-item');
const todoList = document.querySelector('#todo-list');
const letters = document.querySelectorAll('.letter');

// Load todos from localStorage and display them
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let todo of savedTodos) {
    const newTodo = document.createElement("li");
    const removeTodo = document.createElement('button');

    removeTodo.innerText = 'Remove Todo';
    removeTodo.classList.add('todo-button');

    newTodo.innerText = todo.todo;
    newTodo.isCompleted = todo.isCompleted ? true : false;
    newTodo.id = todo.tId;
    console.log(todo.isCompleted)
    
    if (newTodo.isCompleted) {
        newTodo.classList.add('todo-done');
    }
    todoList.appendChild(newTodo);
    newTodo.appendChild(removeTodo);
}

// Add event listeners
document.addEventListener("mousemove", changeBodyColorOnMouseMove);
todoList.addEventListener('click', handleTodoItemClick);
todoForm.addEventListener('submit', handleTodoFormSubmit);

// Change the color of letters at a regular interval.
setInterval(() => {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 500);
