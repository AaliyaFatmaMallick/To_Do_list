const inputBox = document.getElementById("ip_box");
const task_list = document.getElementById("task_list");

function addTask()
{
    if(inputBox.value==='')
    {
        alert("you must write something!");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        task_list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

task_list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData(){
    localStorage.setItem("data",task_list.innerHTML);
}

function showTask(){
    task_list.innerHTML=localStorage.getItem("data");
}

showTask();