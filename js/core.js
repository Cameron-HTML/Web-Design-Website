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
			underlineElement.css("margin-left", "12.18vw");
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
		underlineElement.css("margin-left", "11.80vw");
		underlineElement.css("width", "5.5vw");
	}, function() {
		underlineElement.css("width", "4.4vw");
		underline();
	});


	$(window).scroll(function() {
		if($(window).scrollTop()) {
			$('nav').addClass("nav-fixed");
			$('#logo').attr('src', 'imgs/frc-logo-mini.png')
			$('#logo').css("padding-right", "33.65vw");
			$('#logo').css("height", "9.5vh");
			$('.top-content').css("padding-top", "14vh");
		} else {
			$('nav').removeClass('nav-fixed');
			$('#logo').attr('src', 'imgs/frc-logo-large.png')
			$('#logo').css("padding-right", "30vw");
			$('.top-content').css("padding-top", "0");
			$('#logo').css("height", "10vh");
		}
	});

	var url = window.location.href;
	var host = window.location.host;

	console.log(url.indexOf('https://' + host + '/index.html'))

	if(url.indexOf('https://' + host + '/index.html') != -1) {
		console.log('true');
	}
	
	// Robot carousel
	const robotCarousel = new Siema({
		selector: '.robot-carousel',
		duration: 500,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: false,
		multipleDrag: false,
		threshold: 20,
		loop: true,
	});

	setInterval(function() {
	    robotCarousel.next();
	}, 4000);

	var request = new XMLHttpRequest();

	function findTeam(city) {
		for(var i = 1; i < 2; i++) {
			var url = 'https://www.thebluealliance.com/api/v3/teams/'+ i + '?X-TBA-Auth-Key=q1V3Lg2vSUolgRD8ENxnE1hcYoAUcK3LjyX52LvcUxOXgBcrMJik50YtUI1BX3nZ';
			console.log(url);
			request.open('GET', url, true);
			request.onload = function () {

			// Begin accessing JSON data here;
			var data = JSON.parse(this.response);
			if (request.status == 200) {
				data.forEach(team => {
					if(team.city == city) {
						console.log(team);
					} else {
						console.log('ERROR NOT FOUND')
					}
				});
			} else {
				console.log('ERROR');
				}
			}

			request.send();
		}
	}

});