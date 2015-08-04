<?php wp_head(); ?> 
<div class="container page-404">
	<div class="row">
		<div class="three columns image">
			<img src="<?php echo get_bloginfo('template_directory'); ?>/img/404.png" alt="super mario game over">
		</div>
		<div class="six columns image">
			<?php dynamic_sidebar( '404' ); ?>
		</div>
	</div>
</div>
</section>