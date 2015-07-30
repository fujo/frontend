<div class="content page">
	<div class="no-container">
		<div class="row">
			<?php if (have_posts()) : ?> 
			<?php while (have_posts()) : the_post(); ?>
			<div class="four columns" style="background-image: url(<?php echo wp_get_attachment_thumb_url( get_post_thumbnail_id( $post->ID ) ); ?>); ">
			&nbsp;
			</div>
			<div class="eight columns">
				<a href="#" class="btn close">close</a>

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

				<a href="#" class="btn close">close</a>
			</div>
			<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</div>