let tasks = [];
function creat_task(text){//this fuction take text and return task
	let task={
		"text":text,
		"iscompleted":false
	}
	return task;
}
const addTextFromInput = document.getElementById("input");//get id input from html 
addTextFromInput.addEventListener("keypress", (e) => { //when users press on th keybord the function is un 
	if (e.key == "Enter") {// if user press Enter (true)
	  if (addTextFromInput.value != "") {//if the addTextFromInput.value not NULL (true) 
			 tasks.push(creat_task(addTextFromInput.value));//take the task from the creat_task and put it in the tasks
	  }
	    addTextFromInput.value = "";//when the user press Enter the input box = NULL
	}countActiveTask();
});

const shapeForChangeMode =document.getElementById("change_mode"); 

shapeForChangeMode.addEventListener("click",()=>{
	let shape =document.body;
    shape.classList.toggle("light_mode");
    console.log("holle");
    var image = document.getElementById("myImage");
    if (image.src.match("266998931_1061886381053204_303416707441577145_n.jpg")) {
        image.src = "WhatsApp Image 2021-12-17 at 7.55.43 AM.jpeg";
    }
    else {
        image.src = "266998931_1061886381053204_303416707441577145_n.jpg";
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






