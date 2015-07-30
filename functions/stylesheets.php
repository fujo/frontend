<?php
/**
* Register style sheet.
* https://codex.wordpress.org/Function_Reference/wp_register_style
*/
function jnthn2_enqueue_custom_stylesheets() {
  wp_enqueue_style( 'mytheme-custom', get_template_directory_uri() . '/css/style.css' );
}
add_action( 'wp_enqueue_scripts', 'jnthn2_enqueue_custom_stylesheets', 11 );