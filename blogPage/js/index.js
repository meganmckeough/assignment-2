
$( document ).ready(function() {
  // Handler for .ready() called.
});

$("a").click(function(event){
   event.preventDefault();
});

$(".blogReadLess").hide();

$("#learn").click(aboutSidebar);
$(".blogReadMore").click(expandPost);
$(".blogReadLess").click(collapsePost);

function aboutSidebar () {
	$(".about span").removeClass("hidden").slideDown("slow");
	$("#learn").hide();
}

function expandPost () {
	$(".expand").removeClass("morePost").slideDown("slow");
	
	var collapsedPost = $(".expand").hasClass("morePost");
	if (collapsedPost == true) {
		$(".blogReadLess").hide();
		$(".blogReadMore").show();
	}
	else {
		$(".blogReadMore").hide();
		$(".blogReadLess").show();
	}
}

function collapsePost () {
	$(".expand").addClass("morePost").slideUp("fast");
	
	var expandedPost = $(".expand").not("morePost");
	if (expandedPost == true) {
		$(".blogReadLess").show();
		$(".blogReadMore").hide();
	}
	else {
		$(".blogReadMore").show();
		$(".blogReadLess").hide();
	}
}

$(".sign_up").click(launchMail);

function launchMail () {
	alert("Sign up coming soon!")
}



 






