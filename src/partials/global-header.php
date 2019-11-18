<header class="global-header__container">
    <h1 class="global-header__title logo">
        <a href="/">Staley Point Capital</a>
    </h1>
    <nav id="main-nav" class="global-header__nav" role="navigation">
        <a href="/" class="mobile-logo"><span class="visually-hidden">Staley Point Capital</span></a>
        <button href="#" id="nav-drawer" role="button" class="global-header__nav-drawer">
            <span class="global-header__nav-drawer-bar global-header__nav-drawer-bar-top"></span>
            <span class="global-header__nav-drawer-bar global-header__nav-drawer-bar-mid"></span>
            <span class="global-header__nav-drawer-bar global-header__nav-drawer-bar-bot"></span>
        </button>
        <ul class="global-header__nav-list">
            <?php
                $navSettings = array(
                    'theme_location'  => 'primary',
                    'menu'            => 'main',
                    'container'       => false,
                    'container_class' => '',
                    'container_id'    => '',
                    'menu_class'      => '',
                    'menu_id'         => '',
                    'echo'            => true,
                    'fallback_cb'     => 'wp_page_menu',
                    'before'          => '',
                    'after'           => '',
                    'link_before'     => '',
                    'link_after'      => '',
                    'items_wrap'      => '%3$s',
                    'depth'           => 0,
                    'walker'          => ''
                );
                wp_nav_menu( $navSettings );
            ?>
        </ul>
    </nav>
</header>
