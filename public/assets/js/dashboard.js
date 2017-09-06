
var add = document.getElementById('addurl');
var view = document.getElementById('viewall');
var logout = document.getElementById('logout');

document.getElementById('add').onclick = function(){
	view.style.display = "none";
	add.style.display = "block";
};

document.getElementById('view').onclick = function(){
	add.style.display = "none";
	view.style.display = "block";
};

