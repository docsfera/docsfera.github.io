<?php
	$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
	$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
	$phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
	$number = filter_var(trim($_POST['number']), FILTER_SANITIZE_STRING); // filter

	$mysql = new mysqli('localhost','root','','teat_db');

	$mysql->query("INSERT INTO `zakazi` (`name`, `email`, `phone`, `number`) VALUES('$name','$email','$phone','$number') ");

	$mysql->close(); // close


  ?>
