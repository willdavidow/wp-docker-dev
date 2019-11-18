<?php
/**
 * Staley Point functions and definitions
 *
 * @package YOUR_THEME_NAME
 */

@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );

// ini_set('SMTP', 'smtp.sendgrid.net');
// ini_set('smtp_port', 587); 
/*
 * DEV-ONLY SETTINGS
 */

// Suppress admin bar

add_filter('show_admin_bar', '__return_false'); // comment out if you need the admin bar to display

// allow thumbbnails 
add_theme_support('post-thumbnails');

/*
 * Load all functions from 'functions' folder
 */

$functions = glob(dirname(__FILE__) . '/functions/*.{php}', GLOB_BRACE);
foreach ($functions as $function) :
    require_once($function);
endforeach;
