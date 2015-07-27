<?php wp_head(); ?> 
<div class="container">
	<div class="row">
		<div class="three columns image">
			<img src="<?php echo get_bloginfo('template_directory'); ?>/img/404.png" alt="super mario game over">
		</div>
		<div class="six columns image">
			<h2>Game over</h2>
		  	This page doesn't exist or has been moved. <br>
		  	Follow me <a href="<?php echo site_url();?>" title="home">here</a>
		</div>
	</div>
</div>
</section>