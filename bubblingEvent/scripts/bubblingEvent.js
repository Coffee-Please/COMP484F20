var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length;i++){
  	divs[i].addEventListener("click", highlightThis, true);
	divs[i].addEventListener("click", highlightThis, false);
}

function highlightThis(elem){
	elem.style.backgroundColor = 'yellow';
	alert(elem.className);
	elem.style.backgroundColor = '';
}
