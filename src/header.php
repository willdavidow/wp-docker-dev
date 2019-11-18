<?php
/**
 *
 * @package YOUR_THEME_NAME
 * @since YOUR_THEME_NAME 1.0
 */

$pageTitle = get_field('page_title');
$theMetaDescription = get_field("meta_description");
$theMetaKeywords = get_field("meta_keywords");
$theOGTitle = get_field("og_title");
$theOGDescription = get_field("og_description");

$thePageTitle = strlen($pageTitle) > 0 ? $pageTitle : get_bloginfo( 'title' );
$pageMetaDescription = strlen($theMetaDescription) > 0 ? $theMetaDescription : "";
$pageMetaKeywords = strlen($theMetaKeywords) > 0 ? $theMetaKeywords : "";
$pageOGTitle = strlen($theOGTitle) > 0 ? $theOGTitle : $thePageTitle;
$pageOGDescription = strlen($theOGDescription) > 0 ? $theOGDescription : "";

?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
        <title><?php echo $thePageTitle; ?></title>
        <meta name="description" content="<?php echo $pageMetaDescription ?>">
        <meta name="keywords" content="<?php echo $pageMetaKeywords ?>">
        <meta property="og:title" content="<?php echo $pageOGTitle ?>">
        <meta property="og:description" content="<?php echo $pageOGDescription ?>">
        <!-- <meta property="og:url" content="">
        <meta property="og:image" content="<?php echo get_template_directory_uri() . '/img/logo.png'?>"> -->

        <!-- <link rel="icon" type="image/x-icon" href=<?php echo get_template_directory_uri() . '/img/favicon/favicon-32x32.png'?>>
        <link rel="shortcut icon" type="image/x-icon" href=<?php echo get_template_directory_uri() . '/img/favicon/favicon-32x32.png'?>> -->

        <?php wp_head(); ?>
    </head>
    <body>
