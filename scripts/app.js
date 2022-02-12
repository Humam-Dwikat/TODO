let tasks = [];
function creat_task(text){
    //this fuction take text and return task
	let task={
		"text":text,
		"iscompleted":1
	}
	return task;
    //1=active 
    //0=completed
}
const addTextFromInput = document.getElementById("input");
//get id input from html 
addTextFromInput.addEventListener("keypress", (e) => { 
    //when users press on th keybord the function is un 
	if (e.key == "Enter") {
        // if user press Enter (true)
	  if (addTextFromInput.value != "") {
          //if the addTextFromInput.value not NULL (true) 
			 tasks.push(creat_task(addTextFromInput.value));
             //take the task from the creat_task and put it in the tasks
             //Humam and Hani
            const tasks_list = document.getElementById('tasks-list');
            let task = document.createElement("div");
            //task div start
            //put div in tasks-list
            task.classList.toggle("task");
            //div take a class
            let text=document.createElement("p");
            //put in new div a paragraph
            text.textContent = addTextFromInput.value;
            //put the paragraph in addTextFromInput in the text
            const check = document.createElement('div');
            //creat a new div 
            check.classList.toggle("checkBox");
            //div has a class
            let num =check.id=tasks.length;
            task.appendChild(check);
            //put the div(check) in the ((task)= task div)
            task.appendChild(text);
            //put the paragraph(text) in the ((task)= task div)
             //task div end
            tasks_list.appendChild(task);
            //put the task(check,text) in the tasks_list
            if (tasks.length>0) {
                const w=document.getElementById(tasks.length);
                   w.addEventListener("click",function () {
                        tasks[(num-1)].iscompleted=0;
                            countActiveTask();
                      }
                      )
          }
                
	  }
	    addTextFromInput.value = "";
        //when the user press Enter the input box = NULL
	}countActiveTask();
});
//Hani
const button = document.getElementById("btn");
button.addEventListener("click", function(){ 
    //when users press on th keybord the function is un 
	  if (addTextFromInput.value != "") {
          //if the addTextFromInput.value not NULL (true) 
            tasks.push(creat_task(addTextFromInput.value));
             //Humam and Hani
            const tasks_list = document.getElementById('tasks-list');
            let task = document.createElement("div");
            //task div start
            //put div in tasks-list
            task.classList.toggle("task");
            //div take a class
            let text=document.createElement("p");
            //put in new div a paragraph
            text.textContent = addTextFromInput.value;
            //put the paragraph in addTextFromInput in the text
            const check = document.createElement('div');
            //creat a new div 
            check.classList.toggle("checkBox");
            //div has a class
             check.id=tasks.length;
             let num =check.id=tasks.length;
            task.appendChild(check);
            //put the div(check) in the ((task)= task div)
            task.appendChild(text);
            //put the paragraph(text) in the ((task)= task div)
             //task div end
            tasks_list.appendChild(task);
            //put the task(check,text) in the tasks_list
            if (tasks.length>0) {
                const a=document.getElementById(tasks.length);
                   a.addEventListener("click",function() {    
                    tasks[(num-1)].iscompleted=0;
                         countActiveTask();
                   }
                    
                      )
          }
                
          console.log( tasks);
            
	  }
	    addTextFromInput.value = "";
        //when the user press Enter the input box = NULL
        countActiveTask();
});


const shapeForChangeMode =document.getElementById("change_mode"); 
shapeForChangeMode.addEventListener("click",()=>{
	let shape =document.body;
    shape.classList.toggle("light_mode");
    let icon = document.getElementById("change_mode");
    if (icon.src.match("/img/icon-moon.svg")){
        icon.src = "/img/icon-sun.svg";
    }
    else {
        icon.src = "/img/icon-moon.svg";
    }
});
//Humam
function countActiveTask() {
    //this function counter the tasks active 
    let counter = document.querySelectorAll(".counter");
    let CounterTasks = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].iscompleted==1) {
            //if status of tasks[i] =1= active 
            CounterTasks += 1;
        }
    }
    for (let j = 0; j < counter.length; j++) {
        counter[j].innerHTML = CounterTasks;
    }
}
//Humam

function clean(){
//this function  to cleaner for tasks completed
for(let i=0;i<tasks.length;i++){
     if(!tasks[i].iscompleted){
         tasks[i].iscompleted=-1;
        }
    }   
}
const taskCompleted=document.getElementById("clear");
taskCompleted.addEventListener("click",clean);

const activetaske=document.getElementById("All");
activetaske.addEventListener("click",function() {
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].iscompleted==1||tasks[i].iscompleted==0){
            document.getElementById((tasks.length)-1).innerHTM=tasks[i];
        }
    }
})