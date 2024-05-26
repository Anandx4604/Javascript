function Validation() {
}
function FirstNameValid() {
    // Validation for First name
    var firstNames = document.getElementById("firstName").value;
    var regxfname = /^[a-zA-Z ]{2,30}$/;
    if (regxfname.test(firstNames)) {
        document.getElementById("labelUser").innerHTML = "valid";
        document.getElementById("labelUser").style.visibility = "visible";
        document.getElementById("labelUser").style.color = "green";
    } else {
        document.getElementById("labelUser").innerHTML = "Invalid";
        document.getElementById("labelUser").style.visibility = "visible";
        document.getElementById("labelUser").style.color = "red";
    }
}


function LastNameValid() {
    // validation for Last name
    var lastNames = document.getElementById("lastName").value;
    var regxlname = /^[a-zA-Z ]{2,30}$/;
    if (regxlname.test(lastNames)) {
        // alert("valid");
        document.getElementById("labellast").innerHTML = "valid";
        document.getElementById("labellast").style.visibility = "visible";
        document.getElementById("labellast").style.color = "green";
    }
    else {
        document.getElementById("labellast").innerHTML = "Invalid";
        document.getElementById("labellast").style.visibility = "visible";
        document.getElementById("lastName").style.color = "red";
    }
}

function EmailValid() {
    // validation for email
    var email = document.getElementById("email").value;
    var regxemail = /^([a-zA-Z0-9]{2,12})@([a-zA-Z0-9]{2,12})\.([a-z]{2,8})$/;
    if (regxemail.test(email)) {
        // alert("valid");
        document.getElementById("labelemail").innerHTML = "valid";
        document.getElementById("labelemail").style.visibility = "visible";
        document.getElementById("labelemail").style.color = "green";
    }
    else {
        document.getElementById("labelemail").innerHTML = "Invalid";
        document.getElementById("labelemail").style.visibility = "visible";
        document.getElementById("labelemail").style.color = "red";
    }
}
// validation for password
function passwordValid() {
    var password = document.getElementByld("password").value;
    var regxpassword = /^[a-zA-Z0-91@95%8](6,16)$/;


}
