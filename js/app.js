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

				this.$i = $('.mhover');

				console.log(this.$i);

				function throttle(fn, delay) {
					var allowSample = true;

					return function(e) {
						if (allowSample) {
							allowSample = false;
							setTimeout(function() { allowSample = true; }, delay);
							fn(e);
						}
					};
				}

				this.$i.on('hover', function(){

					//console.log('hover');

				});

				window.addEventListener('mousemove', throttle(function(ev) {

					var xVal 	= -1/(win.height/2)*ev.clientY + 1,
						yVal 	= 1/(win.width/2)*ev.clientX - 1,
						transX	= 20/(win.width)*ev.clientX - 10,
						transY 	= 20/(win.height)*ev.clientY - 10,
						transZ 	= 100/(win.height)*ev.clientY - 50;

					console.log(transZ);

					self.$i.css({

					
    					//'-moz-transform': 	'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';

						//'-webkit-transform':'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)',
						//'-moz-transform': 'perspective(1000px) translate3d(" + transX + "px," + transY + "px," + transZ + "px) rotate3d(" + xVal + "," + yVal + ",0,2deg)'

					});

					//self.$i.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
					//self.$i.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
				
				}, 100));


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
    				var topH 	= $(".fade").position().top,
    					dH 		= doc.scrollTop() - topH;

    					console.log(topH +' - '+ dH);

    				//$(".fade").css('opacity', opacity);



    				/*
    				var offset = 	doc.scrollTop(),
    								opacity=1;

				    if ( offset <= fadeStart ) opacity=1 ;
				    else if ( offset <= fadeUntil ) opacity=1-offset/fadeUntil
					*/
				    //console.log(opacity)
    
    				//$(".fade").css('opacity', opacity);
				


				});
			}
		},
		/* parallax */
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

		/* interactiv and css things */

		helpers : {

			_: function() {
				this.scrollToMore._();
			},

			scrollToMore: {
				options: {
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

		}      

	};


	APP._();
})( jQuery );