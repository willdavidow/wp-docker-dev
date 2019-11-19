<?php
/**
 * Remove comments and posts from side bar
 * Re-order admin side nav items
 *
 * @package %%%PACKAGE_NAME%%%
 */

function my_remove_admin_menus() {
    remove_menu_page( 'edit.php' );
    remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_menu', 'my_remove_admin_menus' );

function custom_menu_order($menu_ord) {
    if (!$menu_ord) return true;
    return array(
     'index.php', // Dashboard
     'edit.php?post_type=page', // Pages
     'edit.php?post_type=casestudies', // Case Studies (custom post type)
     'upload.php', // Media
 );
}
add_filter('custom_menu_order', 'custom_menu_order');
add_filter('menu_order', 'custom_menu_order');
