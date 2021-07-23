<?php

$con=mysqli_connect("localhost","root","");
$sel=mysqli_select_db($con,"logindb");
$a=$_POST["Regno"];
$b=$_POST["Pass"];
$stu="select * from login";
$row =mysqli_query($con,$stu);
while($r=mysqli_fetch_array($row))
{
    //echo $r['login'].$r['password'].$r['sno'];
    if($a==$r['regno'] and $b==$r['pass'])
    {
        
        header("Location: http://localhost/project/project/afterlogin.html");
    }
    else
    {
        echo "Invalid Login";
    }
}
    
?>