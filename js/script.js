const todoList = document.getElementById("todoList");
const totalTodos = document.getElementById("totalTodos");
const completedTodos = document.getElementById("completedTodos");
const removeTask = document.getElementById("removeTask");
const addTask = document.getElementById("addTask");
const todoform = document.getElementById("todoform");

function addTodo() {
	const todoInput = document.getElementById("todoInput");
	const todoText = todoInput.value.trim();

	if (todoText !== "") {
		const li = document.createElement("li");
		li.innerHTML = `<input type="checkbox" onclick="updateCompletedCount()">${todoText} <button onclick="removeTodo(this)">Remove</button>`;
		todoList.appendChild(li);
		todoInput.value = "";
		updateTotalCount();
	}
}

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function updateTotalCount() {
	totalTodos.textContent = todoList.children.length;
}

function updateCompletedCount() {
	completedTodos.textContent = Array.from(todoList.children).filter(li => li.firstChild.checked).length;
}

function removeTodo(button) {
	const listItem = button.parentElement;
	listItem.remove();
	updateTotalCount();
	updateCompletedCount();
}

function removeCompletedTodos() {
	const completedItems = Array.from(todoList.children).filter(li => li.firstChild.checked);
	completedItems.forEach(li => li.remove());
	updateTotalCount();
	updateCompletedCount();
}

removeTask.addEventListener("click", () => {
  removeCompletedTodos();
});


