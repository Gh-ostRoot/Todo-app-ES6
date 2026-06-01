console.log('ToDO App Loaded');
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
addBtn.addEventListener('click', function appenditems() {
    const task = todoInput.value.trim();
    if (task) {
        todoInput.addEventListener('keypress', function(event){
            if(event.key === 'Enter') {
                addBtn.click();
            }
        });
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.textContent = task;
        li.insertBefore(checkbox, li.firstChild);
        const deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete';
        li.appendChild(deletebtn);
        deletebtn.classList.add('deletebtn');
        deletebtn.addEventListener('click', function () {
            li.remove(); //li.remove is responsible for removing the task when delete is pressed
        });
        const checkbox = document.createElement('input'); //creating the checkbox 
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) { //if the checkbox is checked the task will be lined-through and the opacity means greyed
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.5';
            } else {
                li.style.textDecoration = 'none';
                li.style.opacity = '1';
            }
        });
        li.appendChild(checkbox);
        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
