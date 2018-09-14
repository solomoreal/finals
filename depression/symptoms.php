<?php
	include("core/db_config.php");
    $query = $db->get_results("SELECT * FROM symptoms");
    $count = 0;
    foreach ( $query as $result ) {
        $symptom = $result->symptom;
        $count++;
        echo '
            <li>
            	<p id="p-symptoms">'.$symptom.'</p>
            </li>
        ';
    }
    echo'<input type="hidden" name="count" id="count" value="'.$count.'">';
?>