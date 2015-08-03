<?php
/**
* Enabling Support for Post Thumbnails
* https://codex.wordpress.org/Post_Thumbnails
*/
if ( function_exists( 'add_theme_support' ) ) { 
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 200, 200, true ); // default Post Thumbnail dimensions (cropped)
	
	// additional image sizes
	// add_image_size ( string $name, int $width, int $height, bool|array $crop = false )
	// delete the next line if you do not need additional image sizes
	add_image_size( 'category-thumb', 300, 9999 ); //300 pixels wide (and unlimited height)
	add_image_size( 'large_thumb', 75, 75, true );
	add_image_size( 'wider_image', 200, 150 );
	add_image_size( 'portfolio', 960, 9999 );
	add_image_size( 'portfolio-thumb', 99999, 400 );
	// use it: 
	// - wp_get_attachment_image_src( 325, 'wider_image'); 
	// - the_post_thumbnail();

}

