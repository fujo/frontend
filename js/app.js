/*
Jonathan Fuchs

https://learn.jquery.com/code-organization/concepts/

*/
(function( $ ){

	var 	APP 	= APP || {},
	 		isTouch = 	Modernizr.touch,
	 		win 	= 	$(window),
			doc		=	$(document),
			APP = {

		_: function () {
			console.log(doc.height())
			this.test._();
			this.mainNav._();
			this.sectionHero._();
			this.parallax._();
		},
		// petit
		// test
		test : {
			_: function(){
				console.log(this.objet);
			},
			objet : { "foo":"bar", 99:100}
		},
		mainNav : {
			_: function(){

				this.mainNav = ('#mainNav');

			},
			_open: function(){

			},
			_close: function(){

			}
		},
		sectionHero : {
			_: function(){
				win.on("load resize", function(e){
					$("#section--1").height( win.height() );
				});
			}
		},
		// parallax
		parallax : {  
			_: function(){
				win.on("scroll", function(e){
				    var scrolled = win.scrollTop();
    				$('.parallax').css('background-position', 'center ' + (scrolled * -0.2) + 'px');
    				if(win.scrollTop != 0) 
    					$(".bounce").css("animation","paused");
    				else
    					$(".bounce").css("animation","bounce 2s infinite");
				});
			}
		}      

	};


	APP._();
})( jQuery );