window.addEventListener('load', onLoad)

var tasks = [
{ id: 1, name: "Ruxi's task", isDone: false},
{ id: 2, name: "Ruxi's task", isDone: false},
{ id: 3, name: "Ruxi's task", isDone: false},
{ id: 4, name: "Ruxi's task", isDone: false},
{ id: 5, name: "Ruxi's task", isDone: false},
{ id: 6, name: "Ruxi's task", isDone: false},
]


const nextId = nextIdGen()
function nextIdGen(){
    var id = 1
    return function(){
        return id++
    }
}
console.log("Nid", nextId())
console.log("Nid", nextId())
console.log("Nid", nextId())
console.log("Nid", nextId())
console.log("Nid", nextId())
console.log("Nid", nextId())

function refreshTasks(){
    clearTasks()
    for ( task of tasks) {
        if ( task.isDone){
            addDone(task.name)
        }else {
            addToDo(task.name)
        }
    }
}

function deleteToDo(taskName){
}


function deleteDone(taskName){
}

function addToDo(taskName){
    // get todo task list
    // create task
}
function addDone( taskName){
    // get task list element
    // append new task
}

function onLoad() {
    
    let addTaskButton = document.getElementById('addTaskButton');
    let addButton = document.getElementById('add');
    let currentDiv2 = document.getElementById('done');
    let cancelButton = document.getElementById('cancel');

    addTaskButton.addEventListener('click', () => {
        document.getElementsByClassName('addTask')[0].classList.add('visible-addTask'); 
        setDisplayMode('cover','block');
    })


    addButton.addEventListener('click', () => {
        setDisplayMode('cover','none');
        const newDiv = document.createElement('div');
        let newDivClass = document.createAttribute('class');
        const newTask = document.createElement('input');
        let taskType = document.createAttribute('type');
        let newTaskLabel = document.createElement('label');
        let newTaskContent = document.createTextNode(document.getElementById('newTaskInput').value);
        
        let editBox = document.createElement('input');
        let editType = document.createAttribute('type');
        let editClass = document.createAttribute('class');
        editClass.value = 'editBox';
        editType.value = 'text';
        editBox.setAttributeNode(editClass);
        editBox.setAttributeNode(editType);

        const newCancel = document.createElement('button');
        let cancelClass = document.createAttribute('class');
        newCancel.innerHTML = 'x';

        const currentDiv1 = document.getElementById("toDo");

        const main = document.getElementById('toDo').parentNode;

        newDivClass.value = 'task';
        taskType.value = 'checkbox';
        newDiv.setAttributeNode(newDivClass);
        newTask.setAttributeNode(taskType);
        newTaskLabel.appendChild(newTaskContent);

        cancelClass.value = 'cancel';
        newCancel.setAttributeNode(cancelClass);
    
        if(document.getElementById('newTaskInput').value != ''){
            newDiv.appendChild(newTask);
            newDiv.appendChild(newTaskLabel);
            newDiv.appendChild(newCancel);
            newDiv.appendChild(editBox);
            main.insertBefore(newDiv, currentDiv1);
        }

        document.getElementsByClassName('addTask')[0].classList.remove('visible-addTask');
        document.getElementById('newTaskInput').value = ''

        newCancel.addEventListener('click', () => {
            newDiv.remove();
        })

        document.getElementsByClassName('addTask')[0].classList.remove('visible-addTask');
        document.getElementById('newTaskInput').value = '';

        // newDiv.addEventListener('dblclick', () => {
        //     editBox.classList.add('editBox-visible');
        //     editBox.value = newTaskLabel.innerHTML;
        // })

        // document.addEventListener('click', () => {
            
        // })

        newTask.addEventListener('change', () => {
            if(newTask.checked){
                currentDiv2.appendChild(newDiv);
            }
            else{
                main.insertBefore(newDiv, currentDiv1);
            }
        })

    })  

    cancelButton.addEventListener('click', () => {
        document.getElementsByClassName('addTask')[0].classList.remove('visible-addTask');
        document.getElementById('newTaskInput').value = '';
        setDisplayMode('cover','none');
    })


}

function setDisplayMode(elementId, mode){
    document.getElementById(elementId).style.display = mode
}