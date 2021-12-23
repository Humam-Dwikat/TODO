let tasks = [];
function creat_task(text){//this fuction take text and return task
	let task={
		"text":text,
		"iscompleted":"false"
	}
	return task;
}
const addTextFromInput = document.getElementById("input");//get id input from html 
addTextFromInput.addEventListener("keypress", (e) => { //when users press on th keybord the function is un 
	if (e.key == "Enter") {// if user press Enter (true)
	  if (addTextFromInput.value != "") {//if the addTextFromInput.value not NULL (true) 
			 tasks.push(creat_task(addTextFromInput.value));//take the task from the creat_task and put it in the tasks
             let div = document.getElementById('task');
             let p = document.createElement('p');
             p.innerHTML = addTextFromInput.value;
             div.appendChild(p);
	  }
	    addTextFromInput.value = "";//when the user press Enter the input box = NULL
	}countActiveTask();
});

const button = document.getElementById("btn");
button.addEventListener("click", function(){ //when users press on th keybord the function is un 
	  if (addTextFromInput.value != "") {//if the addTextFromInput.value not NULL (true) 
			 tasks.push(creat_task(addTextFromInput.value));//take the task from the creat_task and put it in the tasks
             let div = document.getElementById('task');
             let p = document.createElement('p');
             p.innerHTML = addTextFromInput.value;
             div.appendChild(p);
	  }
	    addTextFromInput.value = "";//when the user press Enter the input box = NULL
        countActiveTask();
});

const shapeForChangeMode =document.getElementById("change_mode"); 

shapeForChangeMode.addEventListener("click",()=>{
	let shape =document.body;
    shape.classList.toggle("light_mode");
    console.log("holle");
    var image = document.getElementById("myImage");
    if (image.src.match("img/background-img-light.png")) {
        image.src = "img/background-img-dark.png";
    }
    else {
        image.src = "img/background-img-light.png";
    }


});
function countActiveTask() {
   
    let counter = document.querySelectorAll(".counter");
    let CounterTasks = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].iscompleted) {
            CounterTasks += 1;
        }
		
    }
    for (let j = 0; j < counter.length; j++) {
        counter[j].innerHTML = CounterTasks;
    }

}
function clean(){

for(let i=0;tasks.length;i++){
    
    if(tasks[i].iscompleted){
         delete tasks[i];
    
}

}}

const taskCompleted=document.getElementById("clear");
taskCompleted.addEventListener("click",clean);
