window.addEventListener('load', () => {
    
    let addTaskButton = document.getElementById('addTaskButton');
    let addButton = document.getElementById('add');
    let currentDiv1 = document.getElementById("toDo");
    let currentDiv2 = document.getElementById('done');
    let main = document.getElementById('toDo').parentNode;
    let cancelButton = document.getElementById('cancel');
    let randomColor = document.getElementById('randomColor');
    let chooseColor = document.getElementById('chooseColor');
    let reset = document.getElementById('resetColor');
    let cursorPos = document.getElementById('cursorPosition');
    let change = true;
    
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

    function getColorCode(){
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
        for (var i = 0; i < 6; i++) {
            code = code + makeColorCode[Math.floor(Math.random() * 16)];
        }
        return code;
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
    })  

    cancelButton.addEventListener('click', () => {
        document.getElementById('newTaskInput').value = '';
        visibility(document.getElementsByClassName('addTask')[0], false);
        visibility(document.getElementById('cover'), false);
    })

    randomColor.addEventListener('click', () => {
        let color = getColorCode();        
        document.getElementById('body').style.backgroundColor = color;
        change = false;
        cursorPos.classList.remove('cursorPosition-clicked');
    })

    cursorPos.addEventListener('click', () => {
        cursorPos.classList.add('cursorPosition-clicked');
        change = true;
        alert('Move your mouse around! \r\n Double-Click anywhere to set color.')
        document.getElementById('body').addEventListener('mousemove', function(e) {
            if(change == true){
                console.log('ai miscat mouse-ul');
                x = e.offsetX;
                y = e.offsetY;
                document.getElementById('body').style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
                document.getElementById('body').addEventListener('dblclick', () => {
                    change = false;
                    cursorPos.classList.remove('cursorPosition-clicked');
                })
            }
        })
    })

    chooseColor.addEventListener('change', () => {
            document.getElementById('body').style.backgroundColor = chooseColor.value;
            change = false;
            cursorPos.classList.remove('cursorPosition-clicked');
    })

    reset.addEventListener('click', () => {
        document.getElementById('body').style.backgroundColor = '#f3f2ff';
        change = false;
        cursorPos.classList.remove('cursorPosition-clicked');
    })

})