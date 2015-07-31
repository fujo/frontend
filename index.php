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

<div class="content">


  <section id="hero" class="parallax winHeight">
      <div class="jumbotron fade">
        <h1>Bonjour</h1>
        <!-- <a href="" rel="follow" title="portfolio">bienvenidos</a>-->
        <!--<span>All I do, I do with love, pleasure and con gusto </span>-->
      </div>
      <a href="#" class="more bounce scrollDown fade" rel="nofollow"></a>
  </section>


  <section>

    <div class="container">

      <div class="row">
        <div class="twelve columns">
          <h2>best of</h2>
        </div>
        <ul class="twelve columns isotope">
          <li class="gutter-sizer"></li>
          <?php query_posts('cat=3'); ?>
          <?php if (have_posts()) : ?> 
          <?php while (have_posts()) : the_post(); ?>
          <li>
            <figure>
              <?php echo get_the_post_thumbnail( $page->ID, 'portfolio' ); ?>
              <figcaption>
                <!--<h3><?php the_title(); ?></h3>-->
                <!--<a href="http://lorempixel.com/g/200/200/" class="btn icn expand ajax"></a>-->
              </figcaption>
            </figure>
          </li>
          <?php endwhile; ?>
          <?php endif; ?>
        </ul>

      </div>
      <a href="#" class="more bounce scrollDown black fade" rel="nofollow"></a>

  </section>

  <section id="inter--1" class="parallax winHeight">dfsdf</section> 

   <section>

    <div class="container">

      <div class="row">
        <div class="twelve columns">
          <h2>Series</h2>
        </div>
      </div>

      <div class="row">
        <div class="twelve columns">
          <ul class="grid">
            <li>
              <figure>
                <img src="http://lorempixel.com/g/200/200/" alt="img01">
                <figcaption>
                  <h3>Camera</h3>
                  <span>Jacob Cummings</span>
                  <a href="http://lorempixel.com/g/200/200/">Take a look</a>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src="http://lorempixel.com/g/200/200/" alt="img01">
                <figcaption>
                  <h3>Camera</h3>
                  <span>Jacob Cummings</span>
                  <a href="http://lorempixel.com/g/200/200/">Take a look</a>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src="http://lorempixel.com/g/200/200/" alt="img01">
                <figcaption>
                  <h3>Camera</h3>
                  <span>Jacob Cummings</span>
                  <a href="http://lorempixel.com/g/200/200/">Take a look</a>
                </figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img src="http://lorempixel.com/g/200/200/" alt="img01">
                <figcaption>
                  <h3>Camera</h3>
                  <span>Jacob Cummings</span>
                  <a href="http://lorempixel.com/g/200/200/">Take a look</a>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </section> 



 

  <section id="">
    <?php 
     $id=23; 
      include (TEMPLATEPATH . "/templates/teaser.php"); 
    ?>
  </section>

  <section id="inter--2" class="parallax winHeight">sdfsf</section> 



  <section id="inter--3" class="parallax winHeight">sdfsdf</section> 

  <section id="contact">
    <?php 
     $id=23; 
      include (TEMPLATEPATH . "/templates/teaser.php"); 
    ?>
  </section>

</div>

	


<?php get_footer(); ?>
