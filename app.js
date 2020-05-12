var guy = document.getElementsByTagName("LI");
var i;
for (i = 0; i < guy.length; i++){
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "closeButton";
	span.appendChild(txt);
	guy[i].appendChild(span);
}



var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName==='LI'){
		ev.target.classList.toggle('checked');
	}	
},false)





var close = document.getElementsByClassName("closeButton");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}




function newItem(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("item1").value;
	var god = document.createTextNode(inputValue);
	li.appendChild(god);
	
	if (inputValue === ' ') {
		alert("write something stupid");}
	else {
	document.getElementById("toDoList").appendChild(li);}

	document.getElementById("item1").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "closeButton";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	} 
}
