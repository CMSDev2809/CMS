<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $subject = $name;
    $headers = 'MIME-Version: 1.0' . "rn";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "rn";
    $headers .= 'From:' . $email. "rn";
    $headers .= 'Cc:' . $email. "rn";
    $template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
    . '<br/>Thank you...! For Contacting Us.<br/><br/>'
    . 'Name:' . $name . '<br/>'
    . 'Email:' . $email . '<br/>'
    . 'Message:' . $message . '<br/><br/>'
    . 'This is a Contact Confirmation mail.'
    . '<br/>'
    . 'We Will contact You as soon as possible .</div>';
    $sendmessage = '<div style="background-color:#7E7E7E; color:white;">' . $template . '</div>';
    $sendmessage = wordwrap($sendmessage, 70);
    mail("info@moonlightingdetective.com", $subject, $sendmessage, $headers);
    echo "Your email has been received. We will contact you soon!";
} else {
    echo "<span>* invalid email *</span>";
}
?>