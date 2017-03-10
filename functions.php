<?php
/**
 * register short codes
 */
function register_shortcodes(){
    add_shortcode('home_url', 'http://beesafe.davenorm.me/');
}
add_action( 'init', 'register_shortcodes');

/**
 * upgrade jquery
 */
wp_deregister_script( 'jquery' );
wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js' );
/**
 * remove admin header its annoying !
 */

function remove_admin_login_header() {
	remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');
/**
 * Load javascript file ( this is jquery code)
 */  
function add_custom_script() {
    wp_register_script('custom_script', home_url() . '/wp-content/themes/wp-beesafedriving/js/script.js', array( 'jquery' ));
    wp_enqueue_script('custom_script');
}  
add_action( 'wp_enqueue_scripts', 'add_custom_script' );

/**
 * load menu
 */  
function add_theme_menu() {
    register_nav_menu( 'primary', 'Main Navigation Menu' );
}
add_action( 'init', 'add_theme_menu' );

define('WP_HOME','http://'. $_SERVER['SERVER_NAME']);
define('WP_SITEURL','http://'. $_SERVER['SERVER_NAME']);

?>
