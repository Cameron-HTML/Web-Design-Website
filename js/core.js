$(document).ready(function(){
	'use strict';
	
	/* Decide where the underline goes on page load */
	var element = $('.active');
	var underlineElement = $('#underline');
	
	function underline() {
		if(element.hasClass('one')) {
			underlineElement.css("margin-left", "6.5%");
		} else if(element.hasClass('two')) {
			underlineElement.css("margin-left", "38%");
		} else if(element.hasClass('three')) {
			underlineElement.css("margin-left", "70.7%");
			underlineElement.css("width", "30%");
		}
	}
	
	underline();
	
	/* Move the underline depending on which you hover on */
	$('.one').hover(function() {
		underlineElement.css("margin-left", "6.5%");
		underlineElement.css("width", "25%");
	}, function() {
		underline();
	});
	
	$('.two').hover(function() {
		underlineElement.css("margin-left", "38%");
		underlineElement.css("width", "25%");
	}, function() {
		underline();
	});
	
	$('.three').hover(function() {
		underlineElement.css("margin-left", "70.7%");
		underlineElement.css("width", "30%");
	}, function() {
		underline();
		underlineElement.css("width", "25%");
	});
	
	$('.owl-carousel').owlCarousel();
	
});
