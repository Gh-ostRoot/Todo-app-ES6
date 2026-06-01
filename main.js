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
            li.remove();
        });
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
