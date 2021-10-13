var thisTask = document.getElementById('newTask')
var container = document.getElementById('my-tasks')
var oneTask = document.getElementsByClassName('task')
var tasks = []

function onTaskSubmit(){
    var input = thisTask.value
    var taskAdder = {value : input, status : 'To Do'}
    thisTask.value = ''
    
    tasks.push(taskAdder)
    // console.log(tasks);
    
    container.innerHTML = "";
    adderHtml(tasks,container);
}

function adderHtml(array,theDiv){
    array.forEach(function (e){
        theDiv.innerHTML +=`
        <div class='task'> 
            <p>${e.value}</p>
            <p>${e.status}</p>
            <button class='delete-button' onClick=deleteTask()>X</button>
            <button onClick=modifyHtml(${tasks.indexOf(e)})>Modify</button>
        </div>`
    });
}

function deleteTask (){
    console.log('It clicked');
}

function modifyHtml (index){

    // container.innerHTML = "";
    container.innerHTML +=`
    <div class='task'>
        <form onsubmit="modifyTask(); return false;">
            <input id='newTaskValue' placeholder=" Ur new task ?" required minlength="1">
            <input id='newStatusValue' placeholder=" The Status ?" required minlength="1">
            <button type="submit" onClick=modifyTask(${index})>Edit</button>
        </form>
    </div>`
}

function modifyTask (index){    

    var newValue = document.getElementById('newTaskValue')
    var newStatus = document.getElementById('newStatusValue')

    
    var input = newValue.value
    var inputStatus = newStatus.value
                
    if(input === "" || null || undefined){
        input === tasks[index].value
        tasks[index].status = inputStatus
    
    }
    else{
        tasks[index].value = input
    }
    
    container.innerHTML = "";
    adderHtml(tasks,container)
}