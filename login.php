<?php
session_start();
//If user was registered before being redirected here, then this variable below will be set

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php if (isset($_SESSION["signup_success"])) {
    echo $signup_message = $_SESSION["signup_success"]["message"];
    echo $user_fullname  = $_SESSION["signup_success"]["fullname"];
}
?>
</body>

</html>