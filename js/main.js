

var app = angular.module('mellosaelApp', []);



app.controller("worksController", ["$scope", function($scope){

    $scope.earlierWorks = [
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work1.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work2.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work3.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work4.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work5.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work7.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work8.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work9.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work10.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work11.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work12.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work13.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work14.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work15.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work16.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work17.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work18.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work19.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work20.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work21.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work22.jpg', date: '2014-10-01'},
        // {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work23.jpg', date: '2014-10-01'},
        {headline: 'Installation av golvvärme', description: 'Nöjd kund fick ett varmt och behagligt badrumsgolv till sitt nya hus.', image: 'images/thumbnails/work24.jpg', date: '2014-10-01'}


    ]

}]);

app.controller("backgroundController", ["$scope", function($scope){


	if(screen.width<=414){
	$scope.homeBackground = "images/backgrounds/bg21mp.jpg";
	}
	else if (screen.width<=767){
	$scope.homeBackground = "images/backgrounds/bg21m.jpg";

	}
	else if(screen.width>767){
			$scope.homeBackground = "images/backgrounds/bg21.jpg";

	}






	$scope.lastModified = document.lastModified;

	var rand = Math.floor((Math.random() * 24) + 1);
	$scope.backgroundImage = 'images/backgrounds/bg'+rand+'.jpg';

 

}]);

app.controller("faqController", ["$scope", function($scope){

	
 $scope.faqs = [
        {question: 'Hur varm är solen?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen2?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen3?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen4?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen5?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen6?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen7?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '},
        {question: 'Hur varm är solen8?', answer: 'skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt skitvarmt '}



    ]

}]);




;(function () {
	
	'use strict';


	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();
			if ( scrlTop > 70) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
// 				if(scrlTop > 430 && screen.width>=1200){
// $scope.showPhone = true;
// 				}
// 				else{
// 					$scope.showPhone = false;
// 				}
				
			} else if ( scrlTop <= 70) {
				if ( header.hasClass('navbar-fixed-top') ) {
					
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};

function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {	

			$('#fh5co-intro').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {	

			$('#fh5co-work').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var testimonialAnimate = function() {
		var testimonial = $('#fh5co-testimonials');
		if ( testimonial.length > 0 ) {	

			testimonial.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = testimonial.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);

					setTimeout(function() {
						testimonial.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						testimonial.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {	

			about.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var countersAnimate = function() {
		var counters = $('#fh5co-counters');
		if ( counters.length > 0 ) {	

			counters.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						counters.find('.js-counter').countTo({
						 	formatter: function (value, options) {
				      		return value.toFixed(options.decimals);
				   		},
						});
					}, 400);

					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {	

			contact.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	
	


	
	

	// Document on load.
	$(function(){

		parallax();

		burgerMenu();

		clickMenu();

		windowScroll();

		navigationSection();

		goToTop();


		// Animations
		homeAnimate();
		introAnimate();
		workAnimate();
		testimonialAnimate();
		servicesAnimate();
		aboutAnimate();
		countersAnimate();
		contactAnimate();
		

	});


}());