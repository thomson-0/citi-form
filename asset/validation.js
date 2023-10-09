// First Name Validation
var firstName= document.getElementById("firstName");

var firstNameValidation=function(){

   firstNameValue=firstName.value.trim(); 
   validFirstName=/^[A-Za-z]+$/;
   firstNameErr=document.getElementById('first-name-err');

   if(firstNameValue=="")
   {
    firstNameErr.innerHTML="First Name is required";

   }else if(!validFirstName.test(firstNameValue)){
     firstNameErr.innerHTML="First Name must be only words without spaces";
   }else{
     firstNameErr.innerHTML="";
     return true;
    
   }
}

firstName.oninput=function(){
   
   firstNameValidation();
}

  // Last Name Validation
  var lastName= document.getElementById("lastName");

  var lastNameValidation= function(){

   lastNameValue=lastName.value.trim(); 
   validLastName=/^[A-Za-z]+$/;
   lastNameErr=document.getElementById('last-name-err');

   if(lastNameValue=="")
   {
    lastNameErr.innerHTML="Last Name is required";

   }else if(!validLastName.test(lastNameValue)){
     lastNameErr.innerHTML="Last Name must be only words without spaces";
   }else{
     lastNameErr.innerHTML="";
     return true;
   }
  }

lastName.oninput=function(){

   lastNameValidation();
}



document.getElementById("registrationForm").onsubmit=function(e){

  
  firstNameValidation();
  lastNameValidation();


  if(firstNameValidation()==true &&   
    lastNameValidation()==true){
    return true;
  }else{
    return false;
  }
}
