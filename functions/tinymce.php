<?php

function make_mce_awesome($in) {

    //$in['block_formats'] = 'h2=h2';
    //$in['toolbar1']='formatselect,|,bold,italic,|,bullist,numlist,blockquote,|,link,unlink,|,pastetext,undo,redo';
    $in['toolbar1']='bold,italic,|,bullist,numlist,blockquote,|,link,unlink,|,pastetext,undo,redo';
    $in['toolbar2']='';
    $in['toolbar3']='';
    $in['toolbar4']='';

    return $in;
}
add_filter('tiny_mce_before_init', 'make_mce_awesome');