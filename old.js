function valid()
{
    var v1=document.getElementById("t1").value;
    var v2=document.getElementById("p1").value;
    var v5=document.getElementById("conf").value;
    var v3=document.getElementById("number").value;
    var v4=document.getElementById("Regno").value;
    var x=document.getElementById("email").value;
	if (v1 == "" || !isNaN(v1) || v1.search(/[0-9]/)!=-1 )
	{
        alert("1.Name shouldn't be empty!\n2.Name shouldn't contain numbers");
        document.getElementById("t1").focus();
        document.getElementById("t1").style.border="1px solid red";
    }
    else if(document.getElementById("t4").checked==false && document.getElementById("t5").checked==false)
    {
        alert("Gender field shouldn't be empty!");
    }
     else if(document.getElementById("add").value == "")
    {
        alert("Adress field shouldn't be empty!");

    }
    else if(document.getElementById("n").selectedIndex==0)
    {
        alert("Select Nationality");
        document.getElementById("n").focus();
    }
     else if(v4.length!=9 || !isNaN(v4.charAt(2,3)) && !isNaN(v4.charAt(3)) && !isNaN(v4.charAt(4)))
    {
        alert("Registration number should contain the following :\n1.length 9\n2.alphabets  in 3,4,5 position ");
        document.getElementById("Regno").focus();
    }
    else if(v2 == "")
    {
        alert("Password field should not be empty!");
        document.getElementById("p1").focus();
    }
    else if(v2.length<8 || v2.lenght>10)
    {
        alert("Password length should be between 8 and 10");
    }
    else if(v2.search(/[0-9]/)==-1)
    {
        alert("Password must contain atleast one didgit!");
    }
    else if(v5 == "")
    {
        alert("confirm Password field should not be empty!");
        document.getElementById("conf").focus();
    }
    else if(v2!=v5)
    {
        alert("Password's must match!");
        
    }
    else if(x == "")
    {
        alert("Mail field should not be empty!");
        document.getElementById("email").focus();
    }
    else if(x.indexOf('@')<=0)
    {
        alert("@ at invlaid position");
        document.getElementById("email").focus();
    }
    else if((x.charAt(x.length-4)!='.') && (x.charAt(x.lenght-3)!='.'))
    {
        alert(". Invlaid Position");
    }
    else if(document.getElementById("number").value.length<10 || v3=="")
    {
        alert("Number!");
        document.getElementById("number").focus();
    }
    else
    {
        alert("Success");
        window.location.assign("file:///C:/xampp/htdocs/LAB/new.html")
    }
}
