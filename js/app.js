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
			this.isotope._();
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
				var self = this;
				this.$m = $('#mainNavWrapper');
				this.$t = $('.hamburger');
				this.$t.on('click', function(e){
					e.preventDefault();
					$this = $(this);
					$this.toggleClass('active');
					self._open(self.$m);
					$('body').toggleClass('noScroll');
				});
			},
			_open: function(el){
				var $el = el;
				$el.toggleClass('open');
			},
			_close: function(el){

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
		},
		isotope : {
			_: function(){
				$('.grid').isotope({
					/*
					itemSelector: '.grid-item',
					percentPosition: true,
					masonry: {
						// use outer width of grid-sizer for columnWidth
						columnWidth: '.grid-sizer'
					}
					*/
					layoutMode: 'fitRows',
					itemSelector: '.grid-item',
					percentPosition: true,
					fitRows: {
					  gutter: '.gutter-sizer'
					}
				});
			}
		},
		helpers : {
			_: function() {



			},
			_scrollToMore: function() {

			}
		}      

	};


	APP._();
})( jQuery );