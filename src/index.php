<?php
/**
 * Staley Point Capital main template
 *
 * @package YOUR_THEME_NAME
 * @since Staley Point 1.0
 */

    $thePage = new WP_Query("pagename=Home");
    while($thePage->have_posts()) : $thePage->the_post();
        $tpl = get_post_meta( $thePage->post->ID, '_wp_page_template', true );
        locate_template(
            array(
                $tpl
            ),
            true
        );
    endwhile;
?>