var fpass = document.getElementById('fpass');
var forgetPass = document.getElementById('forgetPass');
var signIn = document.getElementById('signIn');
var signInClose = document.getElementById('signInClose');
var fClose = document.getElementById('fClose');

fpass.onclick = function(){
	forgetPass.style.display = "block";
	signIn.style.display = "none";
};

fClose.onclick = function(){
	signIn.style.display = "block";
	forgetPass.style.display = "none";
};

signInClose.onclick = function(){
	window.location.assign("/");
};

var remember = document.getElementById('remember');
remember.style.cursor = "pointer";


