const tasksDiv = document.getElementById("tasksDiv");
const submitTaskButton = document.getElementById("submitTaskButton");
const submitTaskInput = document.getElementById("submitTaskInput");
var numberOfTasks = 0;
var numberOfTasksCompleted = 0;

function submitTask(submitTaskInputValue){
    if (submitTaskInputValue == null || submitTaskInputValue == ""){
        alert("Preencha o campo de tarefa!");
    } else{
        numberOfTasks = numberOfTasks + 1;
        tasksDiv.innerHTML += "<div class = 'task' id = '"+"task"+numberOfTasks.toString()+"'><div class = 'taskText' id = '"+"taskText"+numberOfTasks.toString()+"'>"+submitTaskInputValue+"</div><button class = 'taskDeleteButton' id = '"+"taskDeleteButton"+numberOfTasks.toString()+"' onclick = 'deleteTask(this.id)'>Deletar tarefa</button><button class = 'taskCompleteButton' id='"+"taskCompleteButton"+numberOfTasks.toString()+"' onclick = 'completeTask(this.id)'>Tarefa completa</button></div>";

        document.getElementById("tasksForm").reset()
    }
}

function deleteTask(id){
    if (id.includes("Completed")){
        let taskCompletedNumberString = id.replace("taskDeleteButtonCompleted", "");
        document.getElementById("taskCompleted"+taskCompletedNumberString).remove();
        numberOfTasks = numberOfTasks - 1;
        numberOfTasksCompleted = numberOfTasksCompleted - 1
    } else{
        let taskNumberString = id.replace("taskDeleteButton", "");
        document.getElementById("task"+taskNumberString).remove();
        numberOfTasks = numberOfTasks - 1;
    }
}

function completeTask(id){
    numberOfTasksCompleted = numberOfTasksCompleted + 1;
    let taskNumberString = id.replace("taskCompleteButton", "");
    document.getElementById("taskCompleteButton"+taskNumberString).remove();
    document.getElementById("taskDeleteButton"+taskNumberString).className = "taskDeleteButtonCompleted";
    document.getElementById("taskDeleteButton"+taskNumberString).id = "taskDeleteButtonCompleted"+numberOfTasksCompleted.toString();
    document.getElementById("taskText"+taskNumberString).className = "taskTextCompleted";
    document.getElementById("taskText"+taskNumberString).id = "taskTextCompleted"+numberOfTasksCompleted.toString();
    document.getElementById("task"+taskNumberString).className = "taskCompleted";
    document.getElementById("task"+taskNumberString).id = "taskCompleted"+numberOfTasksCompleted.toString();
}