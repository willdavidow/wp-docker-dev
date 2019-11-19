<?php

/**
 * Hide content editor on pages specified in $page array
 * (because we're using Advanced Custom Fields for everything).
 *
 * @package %%%PACKAGE_NAME%%%
 */

add_action('admin_init', 'hide_editor');

function hide_editor() {
    $pages = array('Home');
    $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'];

    if (!isset($post_id)) return;

    $pageTitle = get_the_title($post_id);
    if (in_array($pageTitle, $pages)) {
        remove_post_type_support('page', 'editor');
    }
}
