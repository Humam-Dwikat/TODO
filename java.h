const shapeForChangeMode =document.getElementById("change_mode"); 

shapeForChangeMode.addEventListener("click",(e)=>{
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

