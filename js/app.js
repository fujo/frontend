/*
Jonathan Fuchs

https://learn.jquery.com/code-organization/concepts/

*/
;(function($){

	var 	APP 	= 	APP || {},
	 		isTouch = 	Modernizr.touch,
	 		$win 	= 	$(window),
			$doc	=	$(document),
			APP = {

		_: function () {

			this.loading._();
			this.magnificpopup._();
			this.flexslider._();

			this.ajax._();

			
			
			this.mainNav._();
			this.sectionHero._();
			this.parallax._();
			this.isotope._();
			this.helpers._();
		},

		loading : {

			_: function() {
				$('#container').imagesLoaded( function() {
  					$('body').addClass('loaded');
  					APP.helpers.vivus._(); // draw the fox
				});
			}

		},

		magnificpopup : {

			_: function() {

				var self = this;

				$('.magnificpopup').each(function() {

					var self = this;

				    $(this).magnificPopup({
				        delegate: 'a', 
				        type: 'image',
				        closeOnContentClick: false, 
				        closeOnBgClick: false,
				        showCloseBtn: true,
				        closeMarkup: '<a class="btn icn close">close</a>',
				        gallery: {
				        	enabled:true
				        },
				        callbacks: {
				        	open: function() {
						      $('a.btn.close').on('click', function(){
						      	$.magnificPopup.close();
						      })
						    }
				        }
				    });
				});


			}
		},

		ajax : {
			_: function(){

				var self = this;

				this.$as 			= $('a.ajax');
				this.$overlay 		= $('#overlay');
				this.scrollTopPos	= 0;
				this.$content		= $('.content');

				this.$as.on('click', function(e){
					e.preventDefault();
					var $this = $(this);
					href = $this.attr("href");
					self.scrollTopPos = $doc.scrollTop();
					self._load(href);
				})

			},
			_load: function(href) {

				var self = this;

				$('body').removeClass('loaded');
				this.$overlay.load( href + " .content", function(data) {
				  	//alert( "Load was performed."+ data );
					$('body').addClass('loaded');	
				  	self.$overlay.css({'position': 'absolute' });
				  	$doc.scrollTop(0);
				  	self._initClose();
				})
				.addClass('show')
				.offset().top;

				//APP.loading._();

				this.$content.height(0).css({'overflow': 'hidden'});

			},
			_initClose: function() {

				var self = this;

				this.$btnC = this.$overlay.find('.close');
				this.$btnC.on('click', function(e){
					e.preventDefault();
					self.$overlay.removeClass('show').css({'position': 'fixed' });
					self.$content.removeAttr('style');
					$doc.scrollTop(self.scrollTopPos);
				})

			}
		},

		flexslider : {
			_: function() {

				var self = this;

				  $('.flexslider').flexslider({
				    	animation: "slide",
				    	controlsContainer: $(".custom-controls-container"),
				    	customDirectionNav: $(".custom-navigation a"),
			    	    animationLoop: true,
			    	    smoothHeight: true
				    	    /*
						    itemWidth: 210,
						    itemMargin: 5,
						    minItems: 1,
						    maxItems: 2
						    */
				  });
				
			}

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
					self._open();
				});
			},
			_open: function(el){
				var self = this;
				this.$m.toggleClass('open');

				this.$hrefs = this.$m.find('a');

				this.$hrefs.on('click', function(){
					self._close();
				})
			},
			_close: function(){
				this.$m.removeClass('open');
				this.$t.removeClass('active');
			}
		},
		sectionHero : {
			_: function(){

				var fadeStart=0, 
					fadeUntil=$win.height();

				$win.on("load resize scroll", function(e){
					//$("#hero").outerHeight( $win.height() );
					///////
    				if($win.scrollTop() == 0) $(".bounce").addClass("start");
    				else $(".bounce").removeClass("start");
    				//////

				});
			}
		},

		/* parallax */

		parallax : {  
			options : {
				speed: 0.04
			},
			_: function(){
				var self = this;
				this.$els = $('.parallax');
				this.$els.each(function(){
					var $el = $(this);
					$win.on("scroll", function(e){
				    	var scrolled = $win.scrollTop() - $el.position().top;
	    				$el.css('background-position', '50% ' + (50 + scrolled * self.options.speed ) + '%');
					});
				})
			}
		},

		isotope : {
			_: function(){
				$('.isotope').isotope({
					
					itemSelector: 'li',
					percentPosition: true,
					masonry: {
						// use outer width of grid-sizer for columnWidth
						columnWidth: '.grid-sizer',
						gutter: '.gutter-sizer'
					}
					/*
					layoutMode: 'fitRows',
					itemSelector: 'li',
					percentPosition: true,
					fitRows: {
					  gutter: '.gutter-sizer'
					}*/
				});
			}
		},

		/* interactive and css things */

		helpers : {

			_: function() {
				this.fixHeader._();
				this.scrollDown._();
				this.scrollHome._();
				this.winHeight._();
				this.fader._();
				this.jumbotron._();
			},

			vivus : {
				_: function() {

					new Vivus('fox', {type: 'delayed', duration: 100});

				}

			},

			fixHeader : {
				_: function() {
					var self = this;
					this.$h = $('header');
					$doc.on('scroll load resize' , function() {
					    var top = $(this).scrollTop();
					    //console.log(top);
					    // if statement to do changes
					    // hide().css({'top':-30}).show()
					    top >= $win.height() ? 
						    self.$h.addClass('fixme').animate({top:0}, 'slow', 'swing') 
					    : self.$h.removeClass('fixme');
					});
				}
			},

			scrollDown : {
				options : {
					animScrollSpeed: 1000,
					easing: "easeInOutQuint"
				},
				_: function() {
					this.$sfm = $('.scrollDown');
					if ( !this.$sfm.length ) return;
					var options = this.options;
					this.$sfm.on('click', function(e){
						e.preventDefault();
						var  $wH = $win.height();
						$('html, body').animate({scrollTop: $wH }, options.animScrollSpeed, options.easing);
					});
				}
			},

			scrollHome : {
				options : {
					animScrollSpeed: 1000,
					easing: "easeInOutQuint"
				},
				_: function() {
					this.$sfm = $('.scrollHome');
					if(this.$sfm.length < 1) return;
					var options = this.options;
					this.$sfm.on('click', function(e){
						e.preventDefault();
						$('html, body').animate({scrollTop: 0 }, options.animScrollSpeed, options.easing);
					});
				}
			},

			winHeight : {
				_: function() {

					this.$as = $('.winHeight');
					this.$as.css({'height':$win.height()});

				}
			},

			fader : {
				options : { 
				},
				_: function() {
					var self 	= 	this;
					this.$fs 	= 	$('.fade');
					if(this.$fs.length < 1){ return false };
					$doc.on('scroll', function(){
						self.$fs.each(function(){
							var $this = $(this);
							self._fade($this);
						})	
					});

				},
				_fade: function (O) {
					var oXP 	= O.offset().top,
						docXP 	= $doc.scrollTop(), 
						opacity;
					oXP > docXP ? opacity = ((oXP - docXP * 100) / oXP ) * - 0.01 : opacity = 1 ;
					O.css({ 'opacity': 1 - opacity })
				}
			},

			jumbotron : {
				options : { 
				},
				_: function() {
					var self 	= 	this;
					this.$j 	= 	$('.jumbotron');
					this.posX;
					if(this.$j.length < 1){ return false };
					this._init(); // position in the screen
					$doc.on('load scroll resize', function(){
						var top = self.posX - $doc.scrollTop() * - 0.5 ;
						self.$j.css({ 'top': top })
					});
				},
				_init: function() {
					this.posX = ($win.height() / 2 ) - (this.$j.outerHeight() / 2) ;
					this.$j.css({ 'top' : this.posX });
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