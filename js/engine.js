$(document).ready(function(){

	//$('#black').remove()
	//$('#menu, #footer').css({'opacity':'1'});
	$('#main').css({'opacity':'1'});
	$('#eye_0').xeyes();
	$('#eye_1').xeyes();

	$('#inside').mousemove(function(e){
		opacity = $('#black').css('opacity');
		$('#black').offset({left:e.pageX-2000,top:e.pageY-1250});   
	});
	$('body').mousemove(function(e){
		if($('#black')){
			opacity = $('#black').css('opacity');
			if(opacity>0.1){
				$('#black').css({'opacity':opacity-0.005});   
				$('#menu, #footer').css({'opacity':-opacity+1});
			}else{
				start();
			}
		}
	});
	$('body').click(function(){
		if($('#black')){
			start();
		}
	})
	$('.birds').mouseover(function(){
		$(this).css( 'cursor', 'url(http://grupaedom.pl/error404/img/celownik.png), auto' );
	})
	$('.birds').click(function(){
		$(this).transition({ "rotate": '180deg', "top":"450px" }, 1700, function(){
			$(this).remove();
		});
	})
	$('#close').click(function(){
		$('#kontakt').fadeOut(800);
	})
	$('#a_kontakt').click(function(){
		$('#kontakt').stop().fadeIn(800);
	})
	$("#slide").css("left","-309px");
	$("#fb_logo").mouseover(
		function () {
			$("#slide").stop().animate({left: "0px"}, 500 );
			$("#button_slide").animate({left: "309px"}, 500 );
		});
	$("#slide").mouseleave(
		function () {
			$("#slide").stop().animate({left: "-309px"}, 500 );
			$("#button_slide").animate({left: "0px"}, 500 );
		}
	);
});

window.setInterval(function(){		
	if($('#black')){
		start();
	}
}, 4000);

window.setInterval(function(){		
	$('#cloud').fadeIn(2000).delay(1500).fadeOut(2000);
}, 12500);

$(document).mouseup(function (e){
    var container = $("#kontakt");
    if (!container.is(e.target)&& container.has(e.target).length === 0) {
        container.stop().fadeOut(800);
    }
});
function start(){
	$('#black').animate({'opacity':'0'}, 2000, function(){$(this).remove()});   
	$('#menu, #footer').animate({'opacity':'1'}, 2000);
	$('#feathers').transition({ "rotate": '80deg', "top":"450px" }, 15000, function(){$(this).remove()});
}
$(document).on('click', '.submit_mail', function(){

	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
	var validate = true;
	
	if(regex.test($('#mail').val()) === false){
		validate = false;
		$('#jquery_message').html('Wprowadź poprawny adres e-mail.');
	}
	if($('#imie').val() == ''){ 
		validate = false;
		$('#jquery_message').html('Uzupełnij wszystkie pola formularza.');	
	}
	if($('#theme').val() == ''){ 
		validate = false;
		$('#jquery_message').html('Uzupełnij wszystkie pola formularza.');
	}
	if($('#tresc').val() == ''){ 
		validate = false;
		$('#jquery_message').html('Uzupełnij wszystkie pola formularza.');
	}
	if(validate == true){
		$.post('../ajax/mail.php', {
			'name' : $('#imie').val(),
			'mail' : $('#mail').val(),
			'theme' : $('#theme').val(),
			'content' : $('#tresc').val(),
			'send': 'ok'}, 
			function() {
				$('#imie').val('');
				$('#mail').val('');
				$('#theme').val('');
				$('#tresc').val('');
				$('#jquery_message').html('Wiadomość została wysłana.');
		});
	}
});
