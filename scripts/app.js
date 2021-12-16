
let tasks = [];
function creat_task(  text ){//this fuction take text and return task
	
	let task=
	{
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
	}
  }
 );
  



