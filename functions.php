<?php
/**
 * Twenty Fifteen functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
/**
* includes functions to keep functions.php clean
*/
$dir = new DirectoryIterator(dirname(__FILE__).'/functions/');
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
      //var_dump($fileinfo->getFilename());
      include_once 'functions/'.$fileinfo->getFilename();
    }
}
/**
*	Register Menus
*	https://codex.wordpress.org/Navigation_Menus
*/
function register_my_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
      'meta-menu' => __( 'Meta Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );
/**
* Register style sheet.
* https://codex.wordpress.org/Function_Reference/wp_register_style
*/
function jnthn2_enqueue_custom_stylesheets() {
  wp_enqueue_style( 'mytheme-custom', get_template_directory_uri() . '/css/style.css' );
}
add_action( 'wp_enqueue_scripts', 'jnthn2_enqueue_custom_stylesheets', 11 );

/**
* Enabling Support for Post Thumbnails
* https://codex.wordpress.org/Post_Thumbnails
*/

if ( function_exists( 'add_theme_support' ) ) { 
  add_theme_support( 'post-thumbnails' );
  set_post_thumbnail_size( 150, 150, true ); // default Post Thumbnail dimensions (cropped)

  // additional image sizes
  // delete the next line if you do not need additional image sizes
  add_image_size( 'category-thumb', 300, 9999 ); //300 pixels wide (and unlimited height)
}


