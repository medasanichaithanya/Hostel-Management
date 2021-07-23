<?php
$con=mysqli_connect("localhost","root","");
$sel=mysqli_select_db($con,"logindb");
$a=$_GET["name"];
$b=$_GET["dob"];
$c=$_GET["Sex"];
$d=$_GET["add"];
$e=$_GET["Regno"];
$f=$_GET["Pass"];
$g=$_GET["conf"];
$h=$_GET["email"];
$i=$_GET["number"];
$que="insert into signup (name,dob,Sex,addr,regno,pass,conf,email,number)values('$a','$b','$c','$d','$e','$f','$g','$h',$i)";
if(mysqli_query($con,$que))
{
echo "records Inserted Succesfully";
}
else
{
    echo "error";
}
$que1="insert into login values('$e','$f')";
if(mysqli_query($con,$que1))
{
    header("Location: http://localhost/project/project/new.html");
}
else
{
    echo "Error";
}
?>