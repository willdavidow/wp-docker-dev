<?php
/**
 * Register Case Study Post Type
 *
 * @package YOUR_THEME_NAME
 */

function post_type_case_study() {
    register_post_type(
        'case studies',
        array(
            'labels' => array(
                'name' => __('Case Studies'),
                'all_items' => ('All Case Studies'),
                'singular_name' => __('Case Study'),
                'add_new' => __('New Case Study'),
                'add_new_item' => __('Add New Case Study'),
            ),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'case-study'),
            'supports' => array('thumbnail'),
        )
    );
};

add_action('init', 'post_type_case_study');