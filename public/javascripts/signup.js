//doc ready function
$(function (){
	$('#signupFormContainer2').fadeOut(1); //fade out to start so i can fade in
	$('#signupFormContainer1').css('margin-top', $(window).height()/4 + "px");//original position
	$('#signupFormContainer2').css('margin-top', 1000 + "px"); //1000 so its way off page

	$('#signupNextBtn1').click(function(){
		$('#signupFormContainer1').fadeOut(1000);//animate({marginLeft: "-7000px"}, 1000);
		$('#signupFormContainer2').animate({marginTop: $(window).height()/4 + "px"}, 1000);
		$('#signupFormContainer2').fadeIn(1000);
		//$('#signupFormContainer2').css('margin-top', $(window).height()/4 + "px");
		// setTimeout(function(){
		// 	$('#signupForm2').css("visibility", "visible");
		// 	$('#signupNextBtn2').css("visibility", "visible");
		// }, 1000);
		
	});
});