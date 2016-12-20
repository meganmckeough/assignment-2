
$( document ).ready(function() {
  // Handler for .ready() called.
});

$("a.blogReadLess, a.blogReadMore, a#learn").click(function(event){
   event.preventDefault();
});


$(".blogReadLess").hide();

$("#learn").click(aboutSidebar);
function aboutSidebar () {
	$(".about span").removeClass("hidden").slideDown("slow");
	$("#learn").hide();
}


$("#post1 .blogReadMore").click(expandPost1);
$("#post2 .blogReadMore").click(expandPost2);
$("#post1 .blogReadLess").click(collapsePost1);
$("#post2 .blogReadLess").click(collapsePost2);


function expandPost1 () {
	$("#post1 .expand").removeClass("morePost").slideDown("slow");
	
	var collapsedPost = $("#post1 .expand").hasClass("morePost");
	if (collapsedPost == true) {
		$("#post1 .blogReadLess").hide();
		$("#post1 .blogReadMore").show();
	}
	else {
		$("#post1 .blogReadMore").hide();
		$("#post1 .blogReadLess").show();
	}
}

function collapsePost1 () {
	$("#post1 .expand").addClass("morePost").slideUp("fast");
	
	var expandedPost = $("#post1 .expand").not("morePost");
	if (expandedPost == true) {
		$("#post1 .blogReadLess").show();
		$("#post1 .blogReadMore").hide();
	}
	else {
		$("#post1 .blogReadMore").show();
		$("#post1 .blogReadLess").hide();
	}
}


function expandPost2 () {
	$("#post2 .expand").removeClass("morePost").slideDown("slow");
	
	var collapsedPost = $("#post2 .expand").hasClass("morePost");
	if (collapsedPost == true) {
		$("#post2 .blogReadLess").hide();
		$("#post2 .blogReadMore").show();
	}
	else {
		$("#post2 .blogReadMore").hide();
		$("#post2 .blogReadLess").show();
	}
}

function collapsePost2 () {
	$("#post2 .expand").addClass("morePost").slideUp("fast");
	
	var expandedPost = $("#post2 .expand").not("morePost");
	if (expandedPost == true) {
		$("#post2 .blogReadLess").show();
		$("#post2 .blogReadMore").hide();
	}
	else {
		$("#post2 .blogReadMore").show();
		$("#post2 .blogReadLess").hide();
	}
}


$(".sign_up").click(launchMail);

function launchMail () {
	alert("Sign up coming soon!")
}



 






