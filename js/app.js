/*

@renardsuper
https://learn.jquery.com/code-organization/concepts/

*/
;(function($){

	FastClick.attach(document.body); // instantiate FastClick 

	console.log(app_globals);

	var 	APP 	= 	APP || {},
	 		$win 	= 	$(window),
			$doc	=	$(document),

			Modernizr = window.Modernizr,
    		isTouch = Modernizr.touch && navigator.userAgent.match(/(iPhone|iPod|iPad)|BlackBerry|Android/);

			APP = {

		_: function () {

			this.cookie._();
			this.autoscroll._();
			this.loading._();
			this.magnificpopup._();
			this.flexslider._();
			this.ajax._();
			this.mainNav._();
			this.sectionHero._();
			this.parallax._();
			this.isotope._();
			this.helpers._();

			this.googleMap._();

		},

		cookie : {

			_: function() {
				
				var name 		= 'app',
					value 		= -1,
					expires		= 1, 		// days
					path 		= '';		// page path

				Cookies.set( name , value, { expires: expires, path: path });

			}

		},

		autoscroll : {

			options : {
				animScrollSpeed: 1000,
				easing: "easeInOutQuint"
			},

			_: function() {

				var self = this,
					options = this.options;

				this.$h = $(app_globals.url_hash);

				if(this.$h.length){
					$('html, body').animate({scrollTop: self.$h.position().top }, options.animScrollSpeed, options.easing);
				}
			
			}

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

		/* 

		parallax 

		*/

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

		/* 

		parallax 

		*/

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

		/* 

		interactive and css things 

		*/

		helpers : {

			_: function() {
				this.placeholders._();
				this.fixHeader._();
				this.scrollDown._();
				this.scrollHome._();
				this.winHeight._();
				this.fader._();
				this.jumbotron._();

			},

			placeholders : {
				_: function() {

					$('input, textarea').placeholder();

				}

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

		/*

		Google Map

		*/

		googleMap : {

			options : {
				mapOptions: {
						center: { lat: app_globals.lat, lng: app_globals.lng },
						zoom: 14,
						minZoom:5,
						disableDefaultUI: true,
						panControl: true,
						keyboardShortcuts: true,
						zoomControl: true,
						zoomControlOptions: {
    						style: google.maps.ZoomControlStyle.SMALL 
  						},
						rotateControl: false,
						streetViewControl: false,
						draggable: true,
						panControl: false,
						scrollwheel: false,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						styles:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
						//styles:[{"stylers":[{"visibility":"simplified"}]},{"stylers":[{"color":"#131314"}]},{"featureType":"water","stylers":[{"color":"#131313"},{"lightness":7}]},{"elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":25}]}]
        		}

			},

			_: function() {

				var options = this.options;

				this.map;
				this.marker;
				this.markers = new Array();

				this.map = new google.maps.Map(document.getElementById('map-canvas'), options.mapOptions);
				google.maps.event.addDomListener(window, 'load');

				var myLatlng = new google.maps.LatLng(app_globals.lat,app_globals.lng);

				this._addMarker(myLatlng, 'title');

				//this._fitToMarkers();

			},
			_addMarker: function(myLatlng,title) {

				var iconSVG = {
					path: 'M297.6,206.7c82.1,0,149,66.8,149,149c0,24.7-5.8,48.1-17.3,69.7L297.6,604.3L166,425.4 c-11.4-21.4-17.3-45.4-17.3-69.7C148.7,273.5,215.5,206.7,297.6,206.7 M297.6,93.2c-144.9,0-262.4,117.5-262.4,262.4 c0,47.8,12.9,92.6,35.2,131.2l227.2,308.9l227.2-308.9c22.3-38.6,35.2-83.4,35.2-131.2C560.1,210.7,442.6,93.2,297.6,93.2 L297.6,93.2z',
					fillColor: 'gold',
					fillOpacity: 1,
					scale: 0.1,
					strokeColor: 'gold',
					strokeWeight: 7
				};

				this.marker = new google.maps.Marker({
				     position: myLatlng,
				     title: title,
				     icon: iconSVG
				});

				this.marker.setMap(this.map);
				this.markers.push(this.marker); 
				
			},

			_fitToMarkers: function() {

				var markers = this.markers;
				var bounds = new google.maps.LatLngBounds();

				for(i=0;i<markers.length;i++) {
					bounds.extend(markers[i].getPosition());
				}

				this.map.fitBounds(bounds);

				this.map.setZoom(8);

			}

		},

		/* 

		Google Analytics 

		*/

		googleAnalytics : {

			options : {

			},
			_: function(){

			}

		}     

	};


	APP._();
})( jQuery );