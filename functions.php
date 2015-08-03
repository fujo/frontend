<?php
/*

turn of/off debug

*/
// define('WP_DEBUG', false);
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors', 0);
// prod website
/*
define('WP_DEBUG', false);
@ini_set('log_errors','On'); 
@ini_set('display_errors','Off'); 
@ini_set('error_log','phperrors.log'); // path to server-writable log file
*/

/*

includes functions to keep functions.php clean

*/
$dir = new DirectoryIterator(dirname(__FILE__).'/functions/');
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
      //var_dump($fileinfo->getFilename());
      include_once 'functions/'.$fileinfo->getFilename();
    }
}
/*

Add class to edit button

*/
function custom_edit_post_link($output) {
 $output = str_replace('class="post-edit-link"', 'class="post-edit-link btn icn edit"', $output);
 return $output;
}
add_filter('edit_post_link', 'custom_edit_post_link');


