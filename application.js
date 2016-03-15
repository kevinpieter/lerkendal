$(document).ready(function(){
	//adding the sections of tribune norde
	$('#container').append('<div class="sa"></div>');
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

	//filling in the seats (ish)
	//section SA
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 26; j++) {
			$('.sa').append('<div class="seat"></div>');
		}
	}

	//section RA
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 27; j++) {
			$('.ra').append('<div class="seat"></div>');
		}
	}

	//section QA
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 47; j++) {
			$('.qa').append('<div class="seat"></div>');
		}
	}

	//section PA
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 53; j++) {
			$('.pa').append('<div class="seat"></div>');
		}
	}

	//section OA
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 47; j++) {
			$('.oa').append('<div class="seat"></div>');
		}
	}

	//section NA
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 27; j++) {
			$('.na').append('<div class="seat"></div>');
		}
	}

	//section MA
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 26; j++) {
			$('.ma').append('<div class="seat"></div>');
		}
	}

	//section SB
	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 20; j++) {
			$('.sb').append('<div class="seat"></div>');
		}
	}

	//section RB
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

	//section QB
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 42; j++) {
			$('.qb').append('<div class="seat"></div>');
		}
	}

	//section PB
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 42; j++) {
			$('.pb').append('<div class="seat"></div>');
		}
	}

	//section OB
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 42; j++) {
			$('.ob').append('<div class="seat"></div>');
		}
	}

	//section NB
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

	//section MB
	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 21; j++) {
			$('.mb').append('<div class="seat"></div>');
		}
	}

	//changing the color of the seat when clicked
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

	//The code below will download a png of your masterpiece mosaic
	//The js library html2canvas is downloaded from https://html2canvas.hertzen.com
	//All code is grabbed from http://codepedia.info/2016/02/convert-html-to-image-in-jquery-div-or-table-to-jpg-png/
	var element = $("#container"); // global variable
	var getCanvas; // global variable


	$("#generate-image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
         		$("#preview").empty();
                $("#preview").append(canvas);
                getCanvas = canvas;
             }
         });
    });

    $("#download-image").on('click', function () {
    	var imageData = getCanvas.toDataURL("image/png");
    	var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
    	$("#download-image").attr("download", "lerkendal_tribune_nord.png").attr("href", newData);
    	$("#preview").empty();
	});

});