const inputTask = document.body.getElementsByClassName("inputTask")[0];
const taskList = document.body.getElementsByClassName("task-list")[0];

const AddTask = () => {
  if (inputTask.value === "") {
    alert(" Please Write Something");
  } else {
    let liTag = document.createElement("li");
    liTag.innerHTML = inputTask.value;
    taskList.appendChild(liTag);

    let span = document.createElement("span");
    span.innerHTML = "&#10006";
    liTag.appendChild(span);
  }

  inputTask.value = "";
  SaveData();
};

taskList.addEventListener(
  "click",
  (e) => {
    // console.log(e);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);

function SaveData(){
  localStorage.setItem("todolist-task", taskList.innerHTML);
};

function DispalyTask(){
    taskList.innerHTML = localStorage.getItem("todolist-task")
}
DispalyTask()
