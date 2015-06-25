//loads the correct size of landng page image
function loadLanding(){
	//adjust size of image on landing
	var imgHeight = document.getElementById('landingImg').clientHeight;
	var screenSize = $(window).height() - 100; //minus the height of the nav bar 
	var difference = imgHeight - screenSize; //difference between the height of the image and the screen width
	$('#landingImg').css("margin-top", -difference + "px"); //set margin top to the difference

	//adjust the title overlay based on screen size
	var titleWidth = $('#titleOverlay').width()/2;
	$('#titleOverlay').css("top", $(window).height()/2 - 100 + "px"); // -100 is a random number to put it higher up
	$('#titleOverlay').css("left", $(window).width()/2 - titleWidth + "px");

	//adjust slogan
	var titleWidth = $('#sloganOverlay').width()/2;
	$('#sloganOverlay').css("top", $(window).height()/2 + "px"); 
	$('#sloganOverlay').css("left", $(window).width()/2 - titleWidth + "px");

	//adjust search bar on load
	var e =document.getElementById('landingImg').clientHeight/4.5;
	$('#searchLanding').css("top", -e + "px"); 
}

$(window).resize(function (){
	//something
});


