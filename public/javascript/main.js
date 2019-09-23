$(document).ready(function(){
	'use strict';
	
	/* Decide where the underline goes on page load */
	var element = $('.active');
	var underlineElement = $('#underline');
	
	function underline() {
		if(element.hasClass('one')) {
			underlineElement.css("margin-left", "1.35vw");
		} else if(element.hasClass('two')) {
			underlineElement.css("margin-left", "7.3vw");
			underlineElement.css("width", "3.2vw");
		} else if(element.hasClass('three')) {
			underlineElement.css("margin-left", "11.92vw");	
			underlineElement.css("width", "5.5vw");
		}
	}
	
	underline();
	
	/* Move the underline depending on which you hover on */
	$('.one').hover(function() {
		underlineElement.css("margin-left", "1.35vw");
		underlineElement.css("width", "4.4vw");
	}, function() {
		underline();
	});
	
	$('.two').hover(function() {
		underlineElement.css("margin-left", "7.14vw");
		underlineElement.css("width", "3.2vw");
	}, function() {
		underlineElement.css("width", "4.4vw");
		underline();
	});
	
	$('.three').hover(function() {
		underlineElement.css("margin-left", "11.84vw");	
		underlineElement.css("width", "5.5vw");
	}, function() {
		underlineElement.css("width", "4.4vw");
		underline();
	});


	$(window).scroll(function() {
		if($(window).scrollTop()) {
			$('nav').addClass("nav-fixed");
			$('#logo').attr('src', 'images/frc-logo-mini.png')
			$('#logo').css("padding-right", "33.65vw");
			$('#logo').css("height", "9.5vh");
			$('.index-top-content').css("padding-top", "14vh");
			$('.join-top-content').css("padding-top", "14vh");
		} else {
			$('nav').removeClass('nav-fixed');
			$('#logo').attr('src', 'images/frc-logo-large.png')
			$('#logo').css("padding-right", "30vw");
			$('.index-top-content').css("padding-top", "0");
			$('.join-top-content').css("padding-top", "0");
			$('#logo').css("height", "10vh");
		}
	})
;
});