function see(){

  var rname = /^[A-z ]{3,25}$/gm;
  var remail = /^[A-z 0-9]{3,50}@[a-z]{3,5}.[a-z]{3}$/gm;
  var rphone = /^[0]{1}[3]{1}[1-4]{1}[0-9]{8}$/gm;
   
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if(rname.test(name)){
    document.getElementById("name").style.border = "3px solid green";
    document.getElementById("icon2").style.opacity = "1"
    document.getElementById("icon1").style.opacity = "0";
    document.getElementById("icon2").style.color = "green";
    document.getElementById("name1").innerHTML = ""
  }
  else{
    document.getElementById("name").style.border = "3px solid red";
    document.getElementById("icon1").style.opacity = "1";
    document.getElementById("icon2").style.opacity = "0"
    document.getElementById("icon1").style.color = "red";
    document.getElementById("name1").innerHTML = "Please Enter Your Name Less than 20 And Greater than 3"
   document.getElementById("name1").style.color = "red";

  }

  
  if(remail.test(email)){
    document.getElementById("email").style.border = "3px solid green";
    document.getElementById("icon3").style.opacity = "1"
    document.getElementById("icon4").style.opacity = "0";
    document.getElementById("icon3").style.color = "green";
    document.getElementById("name2").innerHTML = ""

    
  }
  else{
    document.getElementById("email").style.border = "3px solid red";
    document.getElementById("icon4").style.opacity = "1";
    document.getElementById("icon3").style.opacity = "0"
    document.getElementById("icon4").style.color = "red";
    document.getElementById("name2").innerHTML = "Please Enter Your Email"
   document.getElementById("name2").style.color = "red";

  }
  

  if(rphone.test(phone)){
    document.getElementById("phone").style.border = "3px solid green";
    document.getElementById("icon5").style.opacity = "1"
    document.getElementById("icon6").style.opacity = "0";
    document.getElementById("icon5").style.color = "green";
    document.getElementById("name3").innerHTML = ""
    
  }
  else{
    document.getElementById("phone").style.border = "3px solid red";
    document.getElementById("icon6").style.opacity = "1";
    document.getElementById("icon5").style.opacity = "0"
    document.getElementById("icon6").style.color = "red";
    document.getElementById("name3").innerHTML = "Please Enter Your Phone Number"
   document.getElementById("name3").style.color = "red";

  }

}