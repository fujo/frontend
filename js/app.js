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

				this.$m = $('#mainNav');
				this.$t = $('.hamburger');

				console.log(this.$m);

				

				this.$t.on('click', function(){
					$this = $(this);
					$this.toggleClass('active'); 
				})

			},
			_open: function(){

			},
			_close: function(){

			}
		},
		sectionHero : {
			_: function(){

				var fadeStart=0, 
					fadeUntil=win.height();

				win.on("load resize scroll", function(e){
					$("#section--1").height( win.height() );
					///////
    				if(win.scrollTop() == 0) $(".bounce").addClass("start");
    				else $(".bounce").removeClass("start");
    				//////
    				var offset = 	doc.scrollTop(),
    								opacity=1;

				    if ( offset <= fadeStart ) opacity=1 ;
				    else if ( offset <= fadeUntil ) opacity=1-offset/fadeUntil

				    console.log(opacity)
    
    				$(".fade").css('opacity', opacity);
				


				});
			}
		},
		// parallax
		parallax : {  
			_: function(){
				win.on("scroll", function(e){
				    var scrolled = win.scrollTop();
    				$('.parallax').css('background-position', 'center ' + (scrolled * -0.2) + 'px');
				});
			}
		}      

	};


	APP._();
})( jQuery );