  <!-- footer -->
  <footer>
  	<div class="container">
  		<div class="row">
  			<div class="sixteen columns">
  				<a href="#" rel="nofollow" class="btn icn top scrollHome">top</a>
  				<?php if (!dynamic_sidebar('footer')) :?> <?php endif;?>
  			</div>
  		</div>
  	</div>
  </footer>
  <!-- Globals -->
  <script type="text/javascript">
  var app_globals = {
    url_base:   '<?php echo get_bloginfo('url'); ?>', 
    url_path:   window.location.pathname, 
    url_hash:   window.location.hash,
    lang:       '<?php get_locale(); ?>',  
    lat:        47.1167,
    lng:        7.1167 
  }
  </script>
  <!-- Grab Google CDN's jQuery and load local version if necessary -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script type="text/javascript">
    !window.jQuery && document.write('<script src=" <?php echo get_bloginfo('template_directory'); ?>/js/vendor/jquery-1.11.3.min.js"><\/script>')
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.1/isotope.pkgd.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js"></script>
  <script src=" <?php echo get_bloginfo('template_directory'); ?>/js/plugins.js"></script>
  <script src=" <?php echo get_bloginfo('template_directory'); ?>/js/app.js"></script>
</body>
</html>