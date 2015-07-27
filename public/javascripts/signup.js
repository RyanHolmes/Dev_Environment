//doc ready function
$(function (){
	//setting dot width //RYANTODO - shouldn't have to set widths here
	var $dots = $('#dotContainer1').find(".dot");
	$dots.css("width", "25px");
	var $dots2 = $('#dotContainer2').find(".dot");
	$dots2.css("width", "25px");


	$('#dot1').css("background", "green");
	$('#signupFormContainer2').fadeOut(1); //fade out to start so i can fade in
	$('#signupFormContainer1').css('margin-top', $(window).height()/4 + "px");//original position
	$('#signupFormContainer2').css('margin-top', 1000 + "px"); //1000 so its way off page

	$('#signupNextBtn1').click(function(){
		$('#signupFormContainer1').fadeOut(1000);//animate({marginLeft: "-7000px"}, 1000);
		$('#signupFormContainer2').animate({marginTop: $(window).height()/4 + "px"}, 1000);
		$('#signupFormContainer2').fadeIn(1000);
		$('#2dot1').css("background", "green");
		$('#2dot2').css("background", "green");
		//$('#signupFormContainer2').css('margin-top', $(window).height()/4 + "px");
		// setTimeout(function(){
		// 	$('#signupForm2').css("visibility", "visible");
		// 	$('#signupNextBtn2').css("visibility", "visible");
		// }, 1000);
		
	});

	$('#signupLandlordBtn').click(function(){
		//RYANTODO class is added and removed on click?
		$('#signupLandlordBtn').addClass("selection");
		//css("box-shadow", "0 0 10px 5px green");
	});
});

//1) write your own jquery "animate" function 
//2)