/// Initialize an empty array to store todo items
let todos = [];

function addToDo() {
    /// Get input values
    const todoInput = document.getElementById("TDInput");
    const todoDate = document.getElementById("TDDate");

    /// Validate input
    if (validateInput(todoInput.value, todoDate.value)) {
        /// Add new todo to the array
        let todo = { task: todoInput.value, date: todoDate.value };
        todos.push(todo);

        /// Render the updated todo list
        renderTodo();
    }
}

function renderTodo(list = todos) {
    const todoList = document.getElementById("TDList");
    todoList.innerHTML = '';

    list.forEach((todo, index) => {
        todoList.innerHTML += `
        <li class="border w-100 p-2 mb-2 flex justify-between items-center">
            <div>
                <p class="font-bold">${todo.task}</p>
                <p class="text-sm text-gray-500">${todo.date}</p>
            </div>
        
            <button class="bg-red-500 text-white p-1 rounded" onclick="deleteTodo(${index})">Delete</button>
        </li>`;
    });
}

function deleteTodo(index) {
    /// Remove the todo at given index
    todos.splice(index, 1);

    /// Re-render the updated list
    renderTodo();
}

function deleteAll() {
    /// Clear the todos array
    todos = [];

    /// Render the empty todo list
    renderTodo();
}


function filterTodo() {
    const filterDate = document.getElementById("TDFilter").value;

    if (filterDate === '') {
        alert("Please select a date to filter");
        return;
    }

    const filtered = todos.filter(todo => todo.date === filterDate);

    if (filtered.length === 0) {
        alert("No todos found for this date");
    }

    renderTodo(filtered);
}

/// Validate input fields
function validateInput(todo, date) {
    /// Check if fields are empty
    if (todo === '' || date === '') {
        /// Show an alert if validation fails
        alert("Please fill in all fields");
        return false;
    }

    /// Input is valid
    return true;
}