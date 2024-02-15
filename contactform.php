<?php
$name = $email = $subject = $message = "";
$name_error = $email_error = $subject_error = $message_error = "";

if($_SERVER['REQUEST_METHOD'] == "POST"){

//if (isset($_POST['name']) && $_POST['name'] != ''){

    if(empty($_POST['name'])){
        $name_error = "Name is required";
    }
    else{
        $name = $_POST['name'];
    }
    if (empty($_POST['email'])){
        $email_error = "Email is required";
    }
    else{
        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        $mailfrom = $_POST['email'];
    }
    if (empty($_POST['subject'])){
        $subject_error = "Subject is required";
    }
    else{
        $subject = $_POST['subject'];
    }
    if (empty($_POST['message'])){
        $message_error = "Message is required";
    }
    else{
        $message = $_POST['message'];
    }
    
    if($name_error == "" and $email_error == "" and $subject_error == "" and $message_error == ""){
        $message_body = "";
        //unset($_POST['submit']);
        foreach ($_POST as $key => $value){
            $message_body .= "$key: $value\n";
            //header("Refresh:0; url=http://munoza.com/index.php#contact-section")
        }
    }
    $mailTo = "alejandro@munoza.com";
    $txt = "You have received an email from ".$name."\n\n Their Email: ".$mailfrom."\n\n Subject: ".$subject."\n\n Message: ".$message;


    if(mail($mailTo,$subject,$txt)){
        
        $success = "Message sent, thank you.";
        $name = $email = $subject = $message_body = "";
       
    }

}
?>
