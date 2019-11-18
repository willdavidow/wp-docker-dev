<?php
/**
 *
 * @package YOUR_THEME_NAME
 * @since YOUR_THEME_NAME 1.0
 */

$postTitle = get_field("post_title");
$postMetaDescription = get_field("meta_description");
$postMetaKeywords = get_field("meta_keywords");
$postOGTitle = get_field("og_title");
$postOGDescription = get_field("og_description");

$pageTitle = strlen($postTitle) > 0 ? $postTitle : get_the_title();
$pageMetaDescription = strlen($postMetaDescription) > 0 ? $postMetaDescription : "";
$pageMetaKeywords = strlen($postMetaKeywords) > 0 ? $postMetaKeywords : "";
$pageOGTitle = strlen($postOGTitle) > 0 ? $postOGTitle : $pageTitle;
$pageOGDescription = strlen($postOGDescription) > 0 ? $postOGDescription : "";

?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
        <title>Blog - <?php echo $pageTitle ?></title>
        <meta name="description" content="<?php echo $pageMetaDescription ?>">
        <meta name="keywords" content="<?php echo $pageMetaKeywords ?>">
        <meta property="og:title" content="<?php echo $pageOGTitle ?>">
        <meta property="og:description" content="<?php echo $pageOGDescription ?>">
        <meta property="og:url" content="http://staleycap.com">
        <meta property="og:image" content="http://staleycap.com/assets/img/replaceme.png">

        <link rel="icon" type="image/x-icon" href=<?php echo get_template_directory_uri() . '/assets/favicon/favicon_16x16.jpg'?>>
        <link rel="shortcut icon" type="image/x-icon" href=<?php echo get_template_directory_uri() . '/assets/favicon/favicon_16x16.jpg'?>>
        <link rel="apple-touch-icon" href=<?php echo get_template_directory_uri() . '/assets/favicon/favicon_60x60.png'?>>
        <link rel="apple-touch-icon" sizes="76x76" href=<?php echo get_template_directory_uri() . '/assets/favicon/favicon_72x72.png'?>>
        <link rel="apple-touch-icon" sizes="120x120" href=<?php echo get_template_directory_uri() . '/assets/favicon/favicon_120x120.png'?>>
        <link rel="apple-touch-icon" sizes="152x152" href=<?php echo get_template_directory_uri() . '/assets/favicon/favicon_152x152.png'?>>

        <?php
            require_once('partials/typekit.php');
        ?>
        <script type="text/javascript" src=<?php echo get_template_directory_uri() . '/assets/js/vendor/picturefill.min.js'?>></script>
        <script>
            document.createElement( "picture" );
        </script>
        <?php wp_head(); ?>
    </head>
    <body>
        <!-- <a class="skip-main" href="#main">Skip to main content</a> -->
