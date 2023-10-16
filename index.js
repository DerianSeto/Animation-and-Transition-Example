let down = false;

function TransitionDiv(){
	let cont2 = document.getElementById("cont2"); // !!! IMPORTANT !!! This cannot be global
	
	if(down){
		cont2.style.backgroundColor = "#00FFFF";
		cont2.style.top = "10%";
		down = false;
	}else{
		cont2.style.backgroundColor = "red";
		cont2.style.top = "90%";
		down = true;
	}
}


function AnimateEnd(){
	let cont3 = document.getElementById("cont3"); // !!! IMPORTANT !!! This cannot be global
	
	cont3.style.top = "90%";
	cont3.style.backgroundColor = "blue";
}