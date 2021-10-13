var thisTask = document.getElementById('newTask')
var container = document.getElementById('my-tasks')
var tasks =[]

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
        theDiv.innerHTML +=`<div class='task'> <p>${e.value}</p>
        <button class='delete-button'>X</button>
        <button  onClick=taskClick()>Modify</button>
        </div>`
    });
}

function taskClick (){
    console.log('It clicked');
}