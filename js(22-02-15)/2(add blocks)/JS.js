$(document).ready(function () {
	$('.r').click(function () {
		$('.content').append('<div class="box red-box"><div>');
	});
	$('.b').click(function () {
		$('.content').append('<div class="box blue-box"><div>');
	});
	$('.g').click(function () {
		$('.content').append('<div class="box green-box"><div>');
	});
	$('.d').click(function () {
		$('.content').empty();
	});
	$('.slide').click(function () {
		$('.r').slideToggle();
		$('.g').slideToggle();
		$('.b').slideToggle();
	});
	$('.slide2').click(function () {
		$('.content').slideToggle();
	});

	$(document).on('click', '.box', function () {
		$(this).toggle(1000);
	});
	$(document).on('mouseenter', '.box', function () {
		$(this).animate({
			height: '+=10px'
		});
	});
	$(document).on('mouseleave', '.box', function () {
		$(this).animate({
			height: '-=10px'
		});
	});
	/*
	$('.bt-h1').click(function () {
		$("h1").text($('.bt-h1').text());
	});
	*/
	$('.bt-h1').on('click', function () {
		$("h1").text($('.bt-h1').text());
	});
});