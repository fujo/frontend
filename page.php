<div class="content page">
	<div class="container">

		<div class="row">
			<div class="twelve columns right">
			<a href="#" class="btn icn close">close</a>
			</div>	
		</div>


		<div class="row">
			<?php if (have_posts()) : ?> 
			<?php while (have_posts()) : the_post(); ?>
			
			<div class="twelve columns">
				

				<?php

				$medias = get_attached_media( 'image' );

				foreach ($medias as $m ) {
					# code...
					//print_r($m);
				}

				?>

				<h1><?php the_title(); ?></h1>
				<?php edit_post_link( $link, '<p>', '</p>', $id ); ?> 
				<?php the_content(); ?> 

				<?php //echo do_shortcode('[gallery]'); ?>

				<a href="#" class="btn icn close">close</a>
			</div>
			<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</div>