
var model = document.getElementById("model_preview");
model.style="display:none;";
var section = document.getElementsByClassName("section");
var val = {};
//Model
function showModel(id, domain, j, cmnt, photos, users){
	var modelPrev = document.getElementById("model_preview").style.display="block";
	for (var i = 0;i<section.length;i++) {
		section[i].style.display = "none";
	}
	var comment = cmnt.split(',');
	// alert(cmnt)
	var photo = photos.split(',');
	var user = users.split(',');
	document.getElementById('preview_image').src = "../images/"+id+".png";
	document.getElementById('domain').href = domain;
	var cmntBox = document.getElementById('commentBox');
	var cmd = document.getElementById('cmnt');
	var node = document.getElementById('commentsList');
	for(var i=comment.length-1;i>=0;i--){
		node.innerHTML += '<div class="comment_box" id="commentBox"><img src="'+photo[i]+'" alt="Profile" class="profile"><div class="profile_info"><div class="title_section"><h4 id="username">'+user[i]+'</h4><span id="vote">0 Points</span></div><div class="comment" id="cmnt"><p>'+comment[i]+'</p></div><div class="action"><a href=""><strong>Reply</strong></a><a href=""><img src="assets/img/arrow_up.png" alt="up vote"></a><a href=""><img src="assets/img/arrow_down.png" alt="down vote"></a></div></div></div>';
	}
	// document.getElementById('commentBox').innerHTML;
	// var comment = cmnt.split(indexOf(','));
	console.log("gg");
	// document.getElementById('cmnt').

	scrollTo(0, 0);
    window.onclick = function(event){
        if(event.target == model){
            model.style.display = "none";
        	for (var i = 0;i<section.length;i++) {
				section[i].style.display = "block";
			}
        }
    }
}


//Popup Post Close Button
var cls = document.getElementById("close_btn");
cls.style.cursor="pointer";
cls.onclick = function(){
    model.style.display = "none";
	for (var i = 0;i<section.length;i++) {
		section[i].style.display = "block";
	}
};



//This code is for overlay on the post when it's mobile or tablet device
function overlay(id){
	var overlay = document.getElementsByClassName("overlay")[id];
	var post_image = document.getElementsByClassName("post_image")[id];
	overlay.classList.toggle("show_image");

    window.onclick = function(event){
    	if(event.target!=post_image)
		overlay.classList.remove("show_image");
    }
}
