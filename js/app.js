/*
Jonathan Fuchs

https://learn.jquery.com/code-organization/concepts/

*/
(function( $ ){

	var 	APP 	= APP || {},
	 		touch 	= 	Modernizr.touch,
	 		win 	= 	$(window),
			doc		=	$(document),
			APP = {

		_: function () {
			console.log(doc.height())
			this.test._();
			this.sectionHero._();
		},
		// petit
		// test
		test : {
			_: function(){
				console.log(this.objet);
			},
			objet : { "foo":"bar", 99:100}
		},
		sectionHero : {

			_: function(){
				win.on("load resize", function(e){
					$("#section--1").height( win.height() );
				});
			}

		}

	};


	APP._();
})( jQuery );