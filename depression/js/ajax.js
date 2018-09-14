var point = 0;
var diagnosis_score = 0;
$(function(){	
	$('#span-signin').on('click', function(){
		$('#div-signin').removeClass("hide").addClass('show').siblings().addClass("hide");
		$('#a-home').removeClass("hide").addClass('show');
	});
	$('#submit').on('click', function(){
		$('#span-signin').removeClass("show").addClass('hide').siblings().addClass("hide");
	});

	$('#add-symptom').on('click', function(){
		$('#div-add-symptom').removeClass("hide").addClass('show').siblings().addClass("hide");
		$('#a-home').removeClass("hide").addClass('show');
		$('#symptoms-wrapper').fadeOut(0);
	});
	
	$('#submit-symptom').on("click",function(e){
		var symptom = $('#txt-symptom').val();
		$('#txt-symptom').val('');
		if(window.XMLHttpRequest){
			xmlhttp = new window.XMLHttpRequest ();
		} else{
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}

		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState == '4' && xmlhttp.status == '200') {

			}
		}

		parameters = 'symptom=' + symptom;

		xmlhttp.open('POST','new_symptom.php', true);
		xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xmlhttp.send(parameters);
	});

	$('#view-symptom').on('click', function(){	

		if(window.XMLHttpRequest)
		{
			xmlhttp = new window.XMLHttpRequest(); 
		}
		else
		{
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}

		xmlhttp.open('POST', 'view_symptoms.php', true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send();

		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == '4' && xmlhttp.status == '200')
			{
				response = xmlhttp.responseText;
				$('#ul-view-symptoms').html(response);
				$('#div-view-symptoms').removeClass("hide").addClass('show').siblings().addClass("hide");
				$('#a-home').removeClass("hide").addClass('show');
				$('#symptoms-wrapper').fadeOut(0);
			}
			
		}
	});
	$('#cta').on('click', function(){	

		if(window.XMLHttpRequest)
		{
			xmlhttp = new window.XMLHttpRequest(); 
		}
		else
		{
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}

		xmlhttp.open('POST', 'symptoms.php', true);
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send();

		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == '4' && xmlhttp.status == '200')
			{
				response = xmlhttp.responseText;
				$('#ul-symptoms').html(response);
				$('#ul-symptoms').children(':first-child').fadeIn(1000).siblings().addClass("hide");
				$('#cta').addClass("hide");
				$('#yes').addClass( "show" ).removeClass( "hide" );
				$('#no').addClass( "show" ).removeClass( "hide" );
				$('#next').addClass( "show" ).removeClass( "hide" );
				$('#btn-result').addClass("hide").removeClass("show");
				$('#symptoms-wrapper').fadeIn(1000);
			}
			
		}
	});

	$('#yes').on('click', function(){
		$('#yes').addClass( "selected-choice" ).removeClass("btn-choice");
		$('#no').removeClass("selected-choice").addClass("btn-choice");
	});

	$('#no').on('click', function(){
		$('#no').addClass( "selected-choice" ).removeClass("btn-choice");
		$('#yes').removeClass("selected-choice").addClass("btn-choice");
	});

	$('#next').on('click', function(){
		count = $('#count').attr('value');
		if(point == (count - 1)){
			if($('#yes').hasClass('selected-choice')){
				++diagnosis_score;
			}

			$('#yes').removeClass("selected-choice").addClass("btn-choice");
			$('#no').removeClass("selected-choice").addClass("btn-choice");

			++point;
			$('#yes').addClass( "hide" ).removeClass( "show" );
			$('#no').addClass( "hide" ).removeClass( "show" );
			$('#next').addClass( "hide" ).removeClass( "show" );
			$('#symptoms-wrapper').fadeOut(0);
			$('#btn-result').addClass("show").removeClass("hide");
		} else{
			if($('#yes').hasClass('selected-choice')){
				++diagnosis_score;
			}

			$('#yes').removeClass("selected-choice").addClass("btn-choice");
			$('#no').removeClass("selected-choice").addClass("btn-choice");

			++point;
			$('#ul-symptoms').children().fadeOut(0).addClass("hide");
			$('#ul-symptoms').children().eq(point).fadeIn(800).siblings().addClass("hide");
		}
		
	});

	$('#btn-result').on('click', function(){
		diagnosis_score = parseInt(diagnosis_score * 100 / count);
		var result_string = "";
		if (diagnosis_score > 69) {
			result_string = "You've been diagnosed with chronic depression. Seek immediate medical attention";
		} else if (diagnosis_score > 49 && diagnosis_score < 70) {
			result_string = "You've been diagnosed with depression. Seek immediate medical attention";
		} else if (diagnosis_score > 19 && diagnosis_score < 50) {
			result_string = "You've been diagnosed with slight depression. Seek immediate medical attention";
		} else if (diagnosis_score < 20){
			result_string = "Congratulations!!! you are not depresseds";
		}
		$('#btn-result').addClass("hide").removeClass("show");
		$('#div-result').addClass("show").removeClass("hide");
		$('#p-result').html(result_string);
	});
});