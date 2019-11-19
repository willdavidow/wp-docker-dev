<?php
/**
 * %%%THEME_NAME%%% functions and definitions
 *
 * @package %%%PACKAGE_NAME%%%
 * @since 1.0.0
 */

if ( ! function_exists( '%%%PACKAGE_NAME%%%_setup' ) ) :

    function %%%PACKAGE_NAME%%%_setup() {
    
        // This theme uses wp_nav_menu() in one location.
        register_nav_menus( array(
            'primary' => __( 'Primary Menu', '%%%PACKAGE_NAME%%%' ),
            'footer' => __('Footer Menu', '%%%PACKAGE_NAME%%%' )
        ) );
    }
    add_action( 'after_setup_theme', '%%%PACKAGE_NAME%%%_setup' );
    
    endif;
    
    
    /*
     * Enqueue scripts and styles.
     */
    function %%%PACKAGE_NAME%%%_styles_scripts() {
        wp_enqueue_style('%%%PACKAGE_NAME%%%-style', get_template_directory_uri() . '/style.css');
        wp_enqueue_script('app-main', get_template_directory_uri() . '/app.bundle.js', null, null, true);
    }
    
    add_action( 'wp_enqueue_scripts', '%%%PACKAGE_NAME%%%_styles_scripts' );
    
