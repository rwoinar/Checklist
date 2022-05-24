window.addEventListener('load', () => {
    
    let addTaskButton = document.getElementById('addTaskButton');
    let addButton = document.getElementById('add');
    let currentDiv2 = document.getElementById('done');
    
    addTaskButton.addEventListener('click', () => {
        document.getElementsByClassName('addTask')[0].classList.toggle('visible-addTask');
        if(addTaskButton.innerHTML == 'Add Task'){
            addTaskButton.innerHTML = 'Cancel';
        }
        else{
            document.getElementById('newTaskInput').value = '';
            addTaskButton.innerHTML = 'Add Task';
        }
    })


    addButton.addEventListener('click', () => {
        
        const newDiv = document.createElement('div');
        const newTask = document.createElement('input');
        let taskType = document.createAttribute('type');
        let newTaskLabel = document.createElement('label');
        let newTaskContent = document.createTextNode(document.getElementById('newTaskInput').value);
        
        const newCancel = document.createElement('button');
        let cancelClass = document.createAttribute('class');
        newCancel.innerHTML = 'x';

        const currentDiv1 = document.getElementById("toDo");

        const main = document.getElementById('toDo').parentNode;

        taskType.value = 'checkbox';
        newTask.setAttributeNode(taskType);
        newTaskLabel.appendChild(newTaskContent);

        cancelClass.value = 'cancel';
        newCancel.setAttributeNode(cancelClass);
    
        if(document.getElementById('newTaskInput').value != ''){
            newDiv.appendChild(newTask);
            newDiv.appendChild(newTaskLabel);
            newDiv.appendChild(newCancel);
            main.insertBefore(newDiv, currentDiv1);
        }

        document.getElementsByClassName('addTask')[0].classList.remove('visible-addTask');
        document.getElementById('newTaskInput').value = ''
        addTaskButton.innerHTML = 'Add Task';

        newCancel.addEventListener('click', () => {
            newDiv.remove();
        })

        newTask.addEventListener('change', () => {
            if(newTask.checked){
                currentDiv2.appendChild(newDiv);
            }
            else{
                currentDiv1.appendChild(newDiv);
            }
        })


        
    })   

})