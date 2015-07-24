<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Brand New Web Site <?php echo get_the_title( $ID ); ?></title>
  <meta name="description" content="The Brand New Web Site">
  <meta name="author" content="Jonathan Fuchs">
  <link rel="stylesheet" href=" <?php echo get_bloginfo('template_directory'); ?>/css/style.css">
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/vendor/modernizr.js"></script>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
<body class="index">
  <header>
    <div id="logo">JNTHN&times;PHTGRPH</div>
    <a href="/" title="Return to the homepage" id="logo">
      <img src="/images/logo.gif" alt="jnthn logo" />
    </a>
    <a href="#" class="hamburger"><span></span></a>
    <div id="mainNavWrapper">
    <?php
      $defaults = array(
        'theme_location'  => '',
        'menu'            => '',
        'container'       => '',
        'container_class' => '',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => 'mainNav',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        'depth'           => 0,
        'walker'          => ''
      );
      wp_nav_menu( $defaults );
    ?>   
    </div> 
  </header>