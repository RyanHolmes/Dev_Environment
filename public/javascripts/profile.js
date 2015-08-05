//doc ready
$(function(){
	//toggle tab colors
	$('#profileTabBtnPro').css('background', '#d17b78');
	$('#profileTabBtnPro').on('click', function(){
		$(this).css('background', '#d17b78');
		$('#profileTabBtnCal').css('background', '#fcd2be');
		$('#profileTabBtnFav').css('background', '#fcd2be');
		$('#profileTabBtnSet').css('background', '#fcd2be');
		$('#profileTabBtnPre').css('background', '#fcd2be');
	});

	$('#profileTabBtnCal').on('click', function(){
		$(this).css('background', '#d17b78');
		$('#profileTabBtnPro').css('background', '#fcd2be');
		$('#profileTabBtnFav').css('background', '#fcd2be');
		$('#profileTabBtnSet').css('background', '#fcd2be');
		$('#profileTabBtnPre').css('background', '#fcd2be');
	});

	$('#profileTabBtnFav').on('click', function(){
		$(this).css('background', '#d17b78');
		$('#profileTabBtnPro').css('background', '#fcd2be');
		$('#profileTabBtnCal').css('background', '#fcd2be');
		$('#profileTabBtnSet').css('background', '#fcd2be');
		$('#profileTabBtnPre').css('background', '#fcd2be');
	});

	$('#profileTabBtnSet').on('click', function(){
		$(this).css('background', '#d17b78');
		$('#profileTabBtnPro').css('background', '#fcd2be');
		$('#profileTabBtnFav').css('background', '#fcd2be');
		$('#profileTabBtnCal').css('background', '#fcd2be');
		$('#profileTabBtnPre').css('background', '#fcd2be');
	});

	$('#profileTabBtnPre').on('click', function(){
		$(this).css('background', '#d17b78');
		$('#profileTabBtnPro').css('background', '#fcd2be');
		$('#profileTabBtnFav').css('background', '#fcd2be');
		$('#profileTabBtnSet').css('background', '#fcd2be');
		$('#profileTabBtnCal').css('background', '#fcd2be');
	});
})