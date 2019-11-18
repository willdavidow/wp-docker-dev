<?php
/**
 * Init functions
 *
 * @package YOUR_THEME_NAME
 */

if ( ! function_exists( 'spcap_setup' ) ) :

function spcap_setup() {

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'YOUR_THEME_NAME' ),
        'footer' => __('Footer Menu', 'YOUR_THEME_NAME' )
	) );
}
add_action( 'after_setup_theme', 'spcap_setup' );

endif;


/*
 * Enqueue scripts and styles.
 */
function spcap_styles_scripts() {
	wp_enqueue_style('spcap-style', get_template_directory_uri() . '/style.css');
	wp_enqueue_script('app-main', get_template_directory_uri() . '/app.bundle.js', null, null, true);
}

add_action( 'wp_enqueue_scripts', 'spcap_styles_scripts' );
