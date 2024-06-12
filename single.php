<?php
get_header();
if (have_posts()) { ?>
    <span class="document-type-tag">Hello</span>
    <div data-app="Login" data-props=""></div>
    <?php while (have_posts()) {
        the_post(); ?>
        <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <h2><?php the_title(); ?></h2>
            <div><?php the_content(); ?></div>
            <?php wp_link_pages(); ?>
        </div>
    <?php }
}
get_footer();
?>
