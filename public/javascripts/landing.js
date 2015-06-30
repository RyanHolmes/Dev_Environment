//loads the correct size of landng page image
function loadLanding(){
	$('#landingImg').css('height', $(window).height() - $(window).height()/6 + "px");
	$('#landingImgOverlay').css('margin-top', $(window).height()/5 + "px");
}

//adjust based on window resize event
$(window).resize(function (){
	
});


