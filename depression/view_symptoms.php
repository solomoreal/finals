<?php
	include("core/db_config.php");
	$count=0;
    $query = $db->get_results("SELECT * FROM symptoms");
    foreach ( $query as $result ) {
        $symptom = $result->symptom;
        $count++;
        echo '<li>'.$count.'. '.$symptom.'</li>';
    }
?>