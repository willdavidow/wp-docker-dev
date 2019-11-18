<?php

/**
 * Template Name: Home
 * @package YOUR_THEME_NAME
 */

get_header(); ?>
    <div class="global-header">
        <?php include_once('partials/global-header.php'); ?>
    </div>

    <main id="home" class="home wrapper">
        <header class="home-intro">
            <?php
                $heroCarousel = get_field('hero_carousel');
                $heroHeading = get_field('hero_heading');
                $heroSubHeading = get_field('hero_sub_heading');
                $heroContent = get_field('hero_content');
                $heroCTAurl = get_field('hero_cta_url');
                $heroCTAlabel = get_field('hero_cta_label');
                $featuredCaseStudyData = get_field('featured_case_studies');
                $featuredCaseStudies = array();
                // $featuredCaseStudyData = get_field('featured_case_studies');
                // $featuredCaseStudies = array();
                // foreach ($featuredCaseStudyData as $i=>$csID) {
                //     $caseStudy = get_fields($cdID);
                //     echo "<p>" . print_r(get_fields($csID['featured_case_study'])) . "</p>";
                // }
                foreach ($featuredCaseStudyData as $i=>$csID) {
                    $caseStudy = get_fields($csID['featured_case_study']);
                    if (count($caseStudy) > 0) {
                        $featuredCaseStudies[$i]['title'] = $caseStudy['case_study_title'];
                        $featuredCaseStudies[$i]['location'] = $caseStudy['case_study_location'];
                        $featuredCaseStudies[$i]['image'] = $caseStudy['case_study_image'];
                    }
                }
                $heroItemCount = count($heroCarousel);

                if ($heroItemCount > 0) {
                    $carouselItems = "";
                    $carouselNavItems = "";
                    foreach ($heroCarousel as $img) {
                        $carouselItems .= "
                            <li class='glide__slide home-intro__hero-slide'>
                                <img class='home-intro__hero-img' src={$img['src']} alt='{$img['alt']}' />
                            </li>
                        ";
                    }
                    for ($n = 0; $n < $heroItemCount; $n++) {
                        $carouselNavItems .= "<button class='glide__bullet home-intro__hero-bullet' data-glide-dir='={$n}'></button>";
                    }
            ?>
            <div class="glide home-intro__hero">
                <div class="glide__track home-intro__hero-track" data-glide-el="track">
                    <ul class="glide__slides home-intro__hero-slides">
                        <?= $carouselItems ?>
                    </ul>
                </div>
                <div class="home-intro__overlay">
                    <div class="home-intro__heading">
                        <div class="container">
                            <h1 class="home-intro__h1"><?= $heroHeading ?></h1>
                            <h2 class="home-intro__h2"><?= $heroSubHeading ?></h2>
                        </div>
                    </div>
                    <div class="container">
                        <div class="glide__bullets home-intro__hero-bullets" data-glide-el="controls[nav]">
                            <?= $carouselNavItems ?>
                        </div>
                    </div>
                    <div class="home-intro__main">
                        <div class="container">
                            <div class="home-intro__content"><?= $heroContent ?></div>
                            <a class="home-intro__cta" href="<?= $heroCTAurl ?>"><?= $heroCTAlabel ?></a>
                        </div>
                    </div>
                </div>
            </div>
            <?php 
                }
            ?>
        </header>
        <section class="home__case-studies">
            <ul class="home__case-studies-list">
                <?php
                    foreach($featuredCaseStudies as $feature) {
                        echo "
                            <li class='home__case-studies-item'>
                                <figure class='home__case-studies-fig'>
                                    <img class='home__case-studies-img' src={$feature['image']} alt={$feature['title']} />
                                    <figcaption class='home__case-studies-fig-caption'>
                                        <span>{$feature['title']}</span>
                                        <span>{$feature['location']}</span>
                                    </figcaption>
                                </figure>
                            </li>
                        ";
                    }
                ?>
            <ul>
        </section>
    </main> <!-- #main -->

    <?php get_footer(); ?>