<?php
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