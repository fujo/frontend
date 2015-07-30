<?php

add_action('init', 'my_custom_init'); 
function my_custom_init() { 
/* notre code PHP pour rajouter les custom post type */ 
register_post_type(   'projet',   
	array(     'label' => 'Projets',     
		'labels' => array(       
			'name' => 'Projets',     
			'singular_name' => 'Projet',  
			'all_items' => 'Tous les projets',  
			'add_new_item' => 'Ajouter un projet',     
			'edit_item' => 'Éditer le projet',    
			'new_item' => 'Nouveau projet',      
			'view_item' => 'Voir le projet',   
			'search_items' => 'Rechercher parmi les projets',    
			'not_found' => 'Pas de projet trouvé',      
			'not_found_in_trash'=> 'Pas de projet dans la corbeille'  
			),     'public' => true,     'capability_type' => 'post', 
		'supports' => array(       'title',       'editor',   
			'thumbnail'     ),     'has_archive' => true   ) 
	);
}