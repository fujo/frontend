<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage 
 * @since 
 */

get_header(); ?>

  <section id="hero" class="parallax">
      <!--
      <div class="static"></div>
      <div class="mhover"></div>
 
      <div class="flexslider">
        <ul class="slides">
          <li>
            <img src="slide1.jpg" />
          </li>
          <li>
            <img src="slide2.jpg" />
          </li>
          <li>
            <img src="slide3.jpg" />
          </li>
          <li>
            <img src="slide4.jpg" />
          </li>
        </ul>
      </div>     -->
      <div class="jumbotron fade">
        <h1>Bonjour</h1>
        <!-- <a href="" rel="follow" title="portfolio">bienvenidos</a>-->
        <span>merci d'être ici &hearts;</span>
      </div>
      <a href="#" class="more bounce scrolly" rel="nofollow"></a>
  </section>

  <div class="content">

     <?php 


    $args = array(
      'authors'      => '',
      'child_of'     => 25,
      'date_format'  => get_option('date_format'),
      'depth'        => 0,
      'echo'         => 1,
      'exclude'      => '',
      'include'      => '',
      'link_after'   => '',
      'link_before'  => '',
      'post_type'    => 'page',
      'post_status'  => 'publish',
      'show_date'    => '',
      'sort_column'  => 'menu_order, post_title',
            'sort_order'   => '',
      'title_li'     => __('Pages'), 
      'walker'       => new Walker_Page
    );



     wp_list_pages( $args ); ?> 

  <section id="about">
    <?php 
      $id=13; 
      include (TEMPLATEPATH . "/templates/teaser.php"); 
    ?>
  </section> 

    <section id="series">
    <?php 
      $id=23; 
      include (TEMPLATEPATH . "/templates/teaser.php"); 
    ?>
    </section>

    <section id="about">
      <div class="container">
        <div class="row">
          <div class="six columns">
            <h2>About</h2>
            <?php 
            $id=13; 
            $post = get_post($id); 
            $content = apply_filters('the_content', $post->post_content); 
            echo $content;  
            ?>
            <a href="/" class="more" rel="follow" title="more">more</a>
          </div>
          <div class="six columns image">
            <figure class="circle">
              <img src="http://localhost/jnthn2_ch/wp-content/uploads/2015/07/bg-300x272.jpg">
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="series" class="parallax">
      <div class="container">
       <div class="row">
          <div class="six columns">
as
          </div>
          <div class="six columns">
            <h2>series</h2>
            <!--
            <p>Ut rutrum ultricies lacinia. Pellentesque at mattis turpis, ac aliquet urna. Duis at feugiat augue, blandit varius tortor. Aenean laoreet pharetra tincidunt. Maecenas et placerat ante.</p>
            -->
            <a href="/" class="more" rel="follow" title="more">more</a>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div class="container">
        <div class="row">
          <div class="six columns">
            <h2>portfolio</h2>
            <?php 
            $id=13; 
            $post = get_post($id); 
            $content = apply_filters('the_content', $post->post_content); 
            echo $content;  
            ?>
            <a href="/" class="more" rel="follow" title="more">more</a>
          </div>
          <div class="six columns image">
            <figure class="circle">
              <img src="http://localhost/jnthn2_ch/wp-content/uploads/2015/07/bg-300x272.jpg">
            </figure>
          </div>
        </div>
      </div>
    </section>



  <section class="container">

    <div class="row">
      <h2>Series</h2>
    </div>

    <div class="row">
      <div class="six columns text">
        <h3>dignissim</h3>
        <p>Nunc bibendum nibh nulla, nec dictum ipsum finibus eget.</p>
      </div>
      <div class="six columns image">1/3
        <figure></figure>
        <button type="button">More</button> 
      </div>
    </div>

  </section>

  <section>

    <figure>

    <noscript><img src="img/screen.JPG" alt="alttext"></noscript>
    </figure>

  </section>




  <div class="grid">

  <div class="gutter-sizer"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item grid-item--width2"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
	  	


  </div>




  
  </div>

	


<?php get_footer(); ?>
