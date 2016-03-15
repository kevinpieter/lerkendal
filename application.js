$(document).ready(function(){
	$('body').append('<div id="container"></div>');

	for (var i = 0; i < 50; i++) {
		for (var j = 0; j < 50; j++) {
			$('#container').append('<div class="inner"></div>');
		}
		$('#container').append('<br />');
	}

	$('.inner').on('click', function(){
		var bgcol = $(this).css('background-color');
		if (bgcol == 'rgb(0, 0, 0)') {
			$(this).css('background', 'white');
			$(this).css('border-color', 'black');	
		}
		else {
			$(this).css('background', 'black');
			$(this).css('border-color', 'white');
		}
		
	});
	/*$('.inner').on('mouseenter', function(){
		var col1 = Math.floor(Math.random() * 255);
		var col2 = Math.floor(Math.random() * 255);
		var col3 = Math.floor(Math.random() * 255);
		$(this).css('background', 'rgb(' + col1 + ', ' + col2 + ', ' + col3 + ')');
		$(this).css('border-color', 'rgb(' + col1 + ', ' + col2 + ', ' + col3 + ')');
	});*/

});