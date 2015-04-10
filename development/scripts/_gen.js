$(document).ready(function() {

	parallax();

	$('a#blog').on('click', function() {

		$('html, body').animate({
			scrollTop: $('#home-latest-post').offset().top
		}, 1000);

		return false;

	})

	$('#show-nav').on('click', function() {
		$('#hidden-nav').animate({top: "0"}, 800);
		$('#hidden-nav').addClass('open');
		return false;
	})

	$('#hide-nav').on('click', function() {
		$('#hidden-nav').animate({top: "-50vh"}, 800);
		$('#hidden-nav').removeClass('open');
		return false;
	})


})