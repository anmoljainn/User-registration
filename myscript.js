function validateUser() {
    let x = document.forms["userForm"]["username"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    
    } else if ((x.length < 8) || (x.length > 20)) {
        alert("Username must be between 8 and 15 characters.");
        return false;

    }

    let y = document.forms["userForm"]["firstName"].value;
    if (y=="") {
        alert("First name must be filled out");
        return false;
    }

    let z = document.forms["userForm"]["lastName"].value;
    if (z=="") {
        alert("Last name must be filled out");
        return false;
    }
  }

function validatePassWord(){
    let x = document.forms["userPassword"]["password"].value;
    if (x==""){
        alert("Please create user password");
        return false;

    } else if ((x.length < 8) || (x.length > 15)){
        alert("Your password must be between 8 and 15 characters");
        return false;

    } else if (x.search(/[a-z]/)<0){
        alert("Password must contain at least one lowercase letter");
        return false;
    
    } else if (x.search(/[A-Z]/)<0){
        alert("Password must contain at least one uppercase letter");
        return false;
   
    } else if (x.search(/[0-9]/)<0){
        alert("Password must contain at least one number");
        return false;
    }

        
}

function validateEmail(){
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let x = document.forms["userEmail"]["email"].value;

    if (x.match(validEmail)){
        return true;
    } else {
        alert("Please enter a valid email address");
        return false;
    }
}




function regComplete(){
    alert("Congratulations! Your registration is now complete!")
}