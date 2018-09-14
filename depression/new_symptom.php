<?php 
    include("core/db_config.php");

    if($_POST){
        $symptom = $db->escape($_POST['symptom']);

        if(!empty($symptom)){
            $db->query("INSERT INTO symptoms (id, symptom) 
                VALUES (NULL, '".$symptom."')");
            $db->disconnect();
        }
    }
?>