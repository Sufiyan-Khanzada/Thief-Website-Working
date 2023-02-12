<?php

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'locationsDB';

$con = new mysqli($host , $username , $password , $database);
if($con-> connect_error)
{
	die('Connection error');
}
