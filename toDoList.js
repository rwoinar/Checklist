window.addEventListener('load', () => {
    
    let addTaskButton = document.getElementById('addTaskButton');
    let addButton = document.getElementById('add');
    let currentDiv1 = document.getElementById("toDo");
    let currentDiv2 = document.getElementById('done');
    let main = document.getElementById('toDo').parentNode;
    let cancelButton = document.getElementById('cancel');
    
    function createDiv(){
        newDiv = document.createElement('div');
        newDivClass = document.createAttribute('class');
        newDivClass.value = 'task';
        newDiv.setAttributeNode(newDivClass);
        return newDiv;
    }

    function createTask(){
        newTask = document.createElement('input');
        taskType = document.createAttribute('type');
        taskType.value = 'checkbox';
        newTask.setAttributeNode(taskType);
        return newTask;
    }
    
    function createTaskLabel(){
        newTaskLabel = document.createElement('label');
        newTaskContent = document.createTextNode(document.getElementById('newTaskInput').value);
        newTaskLabel.appendChild(newTaskContent);
        return newTaskLabel;
    }

    function createDel(){
        newDel = document.createElement('button');
        newDel.innerHTML = 'x';
        delClass = document.createAttribute('class');
        delClass.value = 'cancel';
        newDel.setAttributeNode(delClass);
        return newDel;
    }

    function appendAndInsert(){
        newDiv.appendChild(newTask);
        newDiv.appendChild(newTaskLabel);
        newDiv.appendChild(newDel);
        // newDiv.appendChild(editBox);
        main.insertBefore(newDiv, currentDiv1);
    }

    function visibility(elem, visibility){
        if(visibility){
            elem.style.display = 'block';
        }
        else{
            elem.style.display = 'none';
        }
    }

    function mainCode(){
        const newDiv = createDiv();
        const newTask = createTask();
        const newTaskLabel = createTaskLabel();
        const newDel = createDel();

        if(document.getElementById('newTaskInput').value != ''){
            appendAndInsert();
        }

        newDel.addEventListener('click', () => {
            newDiv.remove();
        })

        newTask.addEventListener('change', () => {
            if(newTask.checked){
                currentDiv2.appendChild(newDiv);
            }
            else{
                main.insertBefore(newDiv, currentDiv1);
            }
        })

        visibility(document.getElementById('cover'), false);
        visibility(document.getElementsByClassName('addTask')[0], false);
        document.getElementById('newTaskInput').value = '';
    }

    addTaskButton.addEventListener('click', () => {
        visibility(document.getElementsByClassName('addTask')[0], true); 
        visibility(document.getElementById('cover'), true);
        document.addEventListener('keydown', (event) => {
            if(event.code == 'Enter'){
                event.preventDefault();
                mainCode();
            } 
        })
    })

    addButton.addEventListener('click', () => {
        mainCode();
        // let editBox = document.createElement('input');
        // let editType = document.createAttribute('type');
        // let editClass = document.createAttribute('class');
        
        // editClass.value = 'editBox';
        // editType.value = 'text';
        // editBox.setAttributeNode(editClass);
        // editBox.setAttributeNode(editType);

        // newDiv.addEventListener('dblclick', () => {
        //     editBox.classList.add('editBox-visible');
        //     editBox.value = newTaskLabel.innerHTML;
        // })

        // document.addEventListener('click', () => {
            
        // })

    })  

    cancelButton.addEventListener('click', () => {
        document.getElementById('newTaskInput').value = '';
        visibility(document.getElementsByClassName('addTask')[0], false);
        visibility(document.getElementById('cover'), false);
    })

})