function addTask(){
    var taskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");

    if(taskInput.value.trim() != ""){
        var newTask = document.createElement("li")
        newTask.className = "group flex items-center justify-between p-2 border-b w-[200px]"
        newTask.innerHTML ="<span>" + taskInput.value.trim() + "</span>" + "<button class='ml-2 text-red-500 hidden group-hover:block' onclick='removeTask(this)'>Excluir</button>"
        

        taskList.appendChild(newTask)
        taskInput.value = ""
    } else{
        Toastify({
            text: "Erro: Preencha seus dados!",
            style:{
                background: 'FireBrick'
            }
        }).showToast()
    }
}

function removeTask(button){
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)
    
    Toastify({
        text: "Tarefa completada com sucesso",
        style:{
            background: 'SeaGreen'
        }
    }).showToast()
}
