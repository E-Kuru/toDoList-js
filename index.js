var thisTask = document.getElementById('newTask')
var container = document.getElementById('my-tasks')
var oneTask = document.getElementsByClassName('task')
var allStatus = document.getElementById('status-select')
var tasks = []

function onTaskSubmit(){
    var input = thisTask.value
    var taskAdder = {value : input, status : 'To do'}
    thisTask.value = ''
    
    tasks.push(taskAdder)
    // console.log(tasks);
    
    container.innerHTML = "";
    adderHtml(tasks,container);
}

// Ajoute une élément html à partir d'un tableau en récupérant l'index

function adderHtml(array,theDiv){
    array.forEach(function (e){
        theDiv.innerHTML +=`
        <div class='task'> 
            <p>${e.value}</p>
            <p>${e.status}</p>
            <button class='delete-button' onClick=deleteTask(${tasks.indexOf(e)})>X</button>
            <button onClick=modifyHtml(${tasks.indexOf(e)})>Modify</button>
        </div>`
    });
}




function deleteTask (index){

}

// Ajoute mon élément qui modifiera ma task et son status 

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

// Valide la modification du status et de la value 

function modifyTask (index){    

    var newValue = document.getElementById('newTaskValue')
    var newStatus = document.getElementById('newStatusValue')

    
    var input = newValue.value
    var inputStatus = newStatus.value
                
    if(input === "" || null || undefined){
        input = tasks[index].value
    
    }
    else{
        tasks[index].value = input
    }

    
    if(inputStatus === 'To do' || inputStatus === 'doing'|| inputStatus === 'done'){
        tasks[index].status = inputStatus
    }
    else {
        inputStatus = tasks[index].status
    }
    
    console.log(tasks);
    container.innerHTML = "";
    adderHtml(tasks,container)
}

function getStatus (theStatus){
    var todo = tasks.filter(function(stat){
        return stat.status === theStatus
    })
    var doing = tasks.filter(function(stat){
        return stat.status === theStatus
    })
    var done = tasks.filter(function(stat){
        return stat.status === theStatus
    })

    if(theStatus === 'To do'){
        console.log(theStatus);
        container.innerHTML = ''
        adderHtml(todo,container)
    }
    else if (theStatus === 'doing'){
        console.log(theStatus);
        container.innerHTML = ''
        adderHtml(doing,container)
    }
    else if (theStatus === 'done'){
        console.log(theStatus);
        container.innerHTML = ''
        adderHtml(done,container)
    }
    else{
        console.log('all');
        container.innerHTML = ''
        adderHtml(tasks,container)
    }
}