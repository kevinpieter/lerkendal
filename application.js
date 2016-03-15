$(document).ready(function(){
	$('body').append('<div id="container"></div>');
	$('#container').append('<div class="sa section"></div>');
	$('#container').append('<div class="ra"></div>');
	$('#container').append('<div class="qa"></div>');
	$('#container').append('<div class="pa"></div>');
	$('#container').append('<div class="oa"></div>');
	$('#container').append('<div class="na"></div>');
	$('#container').append('<div class="ma"></div>');
	$('#container').append('<div class="sb"></div>');
	$('#container').append('<div class="rb"></div>');
	$('#container').append('<div class="qb"></div>');
	$('#container').append('<div class="pb"></div>');
	$('#container').append('<div class="ob"></div>');
	$('#container').append('<div class="nb"></div>');
	$('#container').append('<div class="mb"></div>');

	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 26; j++) {
			$('.sa').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 27; j++) {
			$('.ra').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 47; j++) {
			$('.qa').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 53; j++) {
			$('.pa').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 47; j++) {
			$('.oa').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 27; j++) {
			$('.na').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 26; j++) {
			$('.ma').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 20; j++) {
			$('.sb').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 19; i++) {
		if (i < 9) {
			for (var j = 0; j < 22; j++) {
				$('.rb').append('<div class="seat"></div>');
			}
			for (var k = 0; k < 18; k++) {
				$('.rb').append('<div class="no-seat"></div>');	
			}
		}
		else {
			for (var j = 0; j < 40; j++) {
				$('.rb').append('<div class="seat"></div>');
			}
		}
		
	}

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 42; j++) {
			$('.qb').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 42; j++) {
			$('.pb').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 42; j++) {
			$('.ob').append('<div class="seat"></div>');
		}
	}

	for (var i = 0; i < 19; i++) {
		if (i < 9) {
			for (var j = 0; j < 22; j++) {
				$('.nb').append('<div class="no-seat"></div>');
			}
			for (var k = 0; k < 20; k++) {
				$('.nb').append('<div class="seat"></div>');	
			}
		}
		else {
			for (var j = 0; j < 42; j++) {
				$('.nb').append('<div class="seat"></div>');
			}
		}
	}

	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 21; j++) {
			$('.mb').append('<div class="seat"></div>');
		}
	}

	$('.seat').on('click', function(){
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
});