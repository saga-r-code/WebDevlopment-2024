const inputTask = document.body.getElementsByClassName("inputTask")[0]
const taskList = document.body.getElementsByClassName("task-list")[0]

const AddTask = () =>{
    if(inputTask.value === ''){
        alert(" Please Write Something")
    }
    else{
        let liTag = document.createElement("li")
        liTag.innerHTML = inputTask.value
        taskList.appendChild(liTag)
    }

    inputTask.value = ''
}