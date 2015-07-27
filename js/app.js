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
			this.hero._();
			
			this.test._();
			this.mainNav._();
			this.sectionHero._();
			this.parallax._();
			this.isotope._();
			this.helpers._();
		},

		hero : {
			_: function() {

				var self = this;

				$(window).load(function() {
				  $('.flexslider').flexslider({
				    animation: "slide"
				  });
				});

			}

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
					$("#hero").height( win.height() );
					///////
    				if(win.scrollTop() == 0) $(".bounce").addClass("start");
    				else $(".bounce").removeClass("start");
    				//////




				});
			}
		},

		/* parallax */

		parallax : {  
			options : {
				speed: -0.2 	//
			},
			_: function(){
				var self = this;
				this.$els = $('.parallax');
				this.$els.each(function(){
					var $el = $(this);
					win.on("scroll", function(e){
				    	var scrolled = win.scrollTop() - $el.position().top;
	    				$el.css('background-position', 'center ' + (scrolled * self.options.speed ) + 'px');
					});
				})
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

		/* interactive and css things */

		helpers : {

			_: function() {
				this.fixHeader._();
				this.scrollToMore._();
			},

			fixHeader : {
				_: function() {
					var self = this;
					this.$h = $('header');
					doc.on('scroll load resize' , function() {
					    var top = $(this).scrollTop();
					    // if statement to do changes
					    top >= win.height() ? 
					    self.$h.addClass('fixme').animate({top:0}, 'slow', 'swing') 
					    : self.$h.removeClass('fixme');
					});
				}
			},

			scrollToMore : {
				options : {
					animScrollSpeed: 350
				},
				_: function() {
					this.$sfm = $('.scrolly');
					if(this.$sfm.length < 1) return;
					var options = this.options;
					this.$sfm.on('click', function(e){
						e.preventDefault();
						var  $wH = win.height();
						$('html, body').animate({scrollTop: $wH }, options.animScrollSpeed);
					});
				}
			}

		},

		/* Google Analytics */

		googleAnalytics : {

			options : {

			},
			_: function(){

			}

		}     

	};


	APP._();
})( jQuery );