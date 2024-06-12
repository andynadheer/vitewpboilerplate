<?php

function theme_enqueue_scripts() {
  // Enqueue the main CSS file
  wp_enqueue_style('theme-styles', get_template_directory_uri() . '/dist/assets/main.css', array(), '1.0.0', 'all');

}
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');


function enqueue_plugin_scripts() {
  wp_enqueue_script('module_handle', get_template_directory_uri() . '/dist/assets/main.js');
}
add_action( 'wp_enqueue_scripts', 'enqueue_plugin_scripts' );

function set_scripts_type_attribute( $tag, $handle, $src ) {
  if ( 'module_handle' === $handle ) {
      $tag = '<script type="module" src="'. $src .'"></script>';
  }
  return $tag;
}
add_filter( 'script_loader_tag', 'set_scripts_type_attribute', 10, 3 );
