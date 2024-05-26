function firstNameValid() {
    var firstNames = document.getElementById("fName");
    var regx = /[a-zA-Z]/;
    if (regx.test(firstNames.value.trim())) {
        firstNames.style.border = "2px green solid";
        document.getElementById("error-label1").innerHTML = "valid";
        document.getElementById("error-label1").style.visibility = "visible";
        document.getElementById("error-label1").style.color = "green";
    }
    else {
        firstNames.style.border = "2px red solid";
        document.getElementById("error-label1").innerHTML = "Invalid";
        document.getElementById("error-label1").style.visibility = "visible";
        document.getElementById("error-label1").style.color = "red";
    }
}


function lastNameValid() {
    var lastNames = document.getElementById("lName");
    var regxl = /[a-zA-Z]/;
    if (regxl.test(lastNames.value.trim())) {
        lastNames.style.border = "2px green solid";
        document.getElementById("error-label2").innerHTML = "valid";
        document.getElementById("error-label2").style.visibility = "visible";
        document.getElementById("error-label2").style.color = "green";
    }
    else {
        lastNames.style.border = "2px red solid";
        document.getElementById("error-label2").innerHTML = "Invalid";
        document.getElementById("error-label2").style.visibility = "visible";
        document.getElementById("error-label2").style.color = "red";
    }
}

function emailValid() {
    var emails = document.getElementById("email").value;
    var regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regx.test(emails)) {
        document.getElementById("error-label3").innerHTML = "valid";
        document.getElementById("error-label3").style.visibility = "visible";
        document.getElementById("error-label3").style.color = "green";
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label3").innerHTML = "Invalid";
        document.getElementById("error-label3").style.visibility = "visible";
        document.getElementById("error-label3").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.borderStyle = "solid";


    }
}

function passwordValid()
{
    var pw = document.getElementById("password").value;
    var regx = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/; //one digit,one uppercase, one lowercase, min 8 char
    if (regx.test(pw)) {
        document.getElementById("error-label4").innerHTML = "valid";
        document.getElementById("error-label4").style.visibility = "visible";
        document.getElementById("error-label4").style.color = "green";
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("password").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label4").innerHTML = "Invalid";
        document.getElementById("error-label4").style.visibility = "visible";
        document.getElementById("error-label4").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.borderStyle = "solid";
    }
}
function phoneValid() {
    var phones = document.getElementById("phone").value;
    var regx = /^[7-9][0-9]{8}$/;
    if (regx.test(phones)) {
        document.getElementById("error-label5").innerHTML = "valid";
        document.getElementById("error-label5").style.visibility = "visible";
        document.getElementById("error-label5").style.color = "green";
        document.getElementById("phone").style.borderColor = "green";
        document.getElementById("phone").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label5").innerHTML = "Invalid";
        document.getElementById("error-label5").style.visibility = "visible";
        document.getElementById("error-label5").style.color = "red";
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phone").style.borderStyle = "solid";
    }
}


function presentAddValid() {
    var presAdd = document.getElementById("present-addr").value;
    var regx = /^([a-zA-Z0-9+\.-]{10})/ //mininum 10 letters for address
    if (regx.test(presAdd)) {
        document.getElementById("error-label7").innerHTML = "valid";
        document.getElementById("error-label7").style.visibility = "visible";
        document.getElementById("error-label7").style.color = "green";
        document.getElementById("present-addr").style.borderColor = "green";
        document.getElementById("present-addr").style.borderStyle = "solid";
    }
    else {
        document.getElementById("error-label7").innerHTML = "Invalid";
        document.getElementById("error-label7").style.visibility = "visible";
        document.getElementById("error-label7").style.color = "red";
        document.getElementById("present-addr").style.borderColor = "red";
        document.getElementById("present-addr").style.borderStyle = "solid";
    }
}


function presentPinValid() {
    var presPin = document.getElementById("pres-pin").value;
    var regx = /^[0-9]{5}$/;
    if (regx.test(presPin)) {
        document.getElementById("error-label8").innerHTML = "valid";
        document.getElementById("error-label8").style.visibility = "visible";
        document.getElementById("error-label8").style.color = "green";
        document.getElementById("pres-pin").style.borderColor = "green";
        document.getElementById("pres-pin").style.borderStyle = "solid";
    }
    else {
        document.getElementById("error-label8").innerHTML = "Invalid";
        document.getElementById("error-label8").style.visibility = "visible";
        document.getElementById("error-label8").style.color = "red";
        document.getElementById("pres-pin").style.borderColor = "red";
        document.getElementById("pres-pin").style.borderStyle = "solid";
    }
}

function CopyAddress()
{
    var presentAddr = document.getElementById("present-addr").value;
    var presentPin = document.getElementById("pres-pin").value;
    if(document.getElementById("same-add").checked==true)
    {
        document.getElementById("perm-addr").innerHTML = presentAddr;
        document.getElementById("perm-pin").innerHTML = presentPin;  
    }
}
function permAddValid() {
    var permAdd = document.getElementById("perm-addr").value;
    var regx = /^([a-zA-Z0-9+\.-]{10})/ //mininum 10 letters for address

    if (regx.test(permAdd)) {
        document.getElementById("error-label9").innerHTML = "valid";
        document.getElementById("error-label9").style.visibility = "visible";
        document.getElementById("error-label9").style.color = "green";
        document.getElementById("perm-addr").style.borderColor = "green";
        document.getElementById("perm-addr").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label9").innerHTML = "Invalid";
        document.getElementById("error-label9").style.visibility = "visible";
        document.getElementById("error-label9").style.color = "red";
        document.getElementById("perm-addr").style.borderColor = "red";
        document.getElementById("perm-addr").style.borderStyle = "solid";
    }
}


function permPinValid() {
    var permPin = document.getElementById("perm-pin").value;
    var regx = /^[0-9]{5}$/;
    if (regx.test(permPin)) {
        document.getElementById("error-label10").innerHTML = "valid";
        document.getElementById("error-label10").style.visibility = "visible";
        document.getElementById("error-label10").style.color = "green";
        document.getElementById("perm-pin").style.borderColor = "green";
        document.getElementById("perm-pin").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label10").innerHTML = "Invalid";
        document.getElementById("error-label10").style.visibility = "visible";
        document.getElementById("error-label10").style.color = "red";
        document.getElementById("perm-pin").style.borderColor = "red";
        document.getElementById("perm-pin").style.borderStyle = "solid";
    }
}

function panValid()
{
    var panNo = document.getElementById("pan");
    var regx = /[A-Z]{5}[0-9]{4}[A-Z]{0}$/;    
    if (regx.test(panNo.value.trim())) {
        panNo.style.border = "2px green solid";
        document.getElementById("error-label11").innerHTML = "valid";
        document.getElementById("error-label11").style.visibility = "visible";
        document.getElementById("error-label11").style.color = "green";
    }
    else {
        pan.style.border = "2px red solid";
        document.getElementById("error-label11").innerHTML = "Invalid";
        document.getElementById("error-label11").style.visibility = "visible";
        document.getElementById("error-label11").style.color = "red";
    }
}

function photoValid() {
    var photo = document.getElementById("photo");
    if (photo.value != "") {
        document.getElementById("photo-check").innerHTML = "Valid";
        document.getElementById("photo-check").style.visibility = "visible";
        document.getElementById("photo").style.color = "green";
        document.getElementById("photo-check").style.borderColor = "green";
        document.getElementById("photo-check").style.borderStyle = "solid";

    }
    else {
        document.getElementById("photo-check").innerHTML = "Invalid";
        document.getElementById("photo-check").style.visibility = "visible";
        document.getElementById("photo").style.color = "red";
        document.getElementById("photo-check").style.borderColor = "red";
        document.getElementById("photo-check").style.borderStyle = "solid";

    }
}

function ButtonClick(event){
    event.preventDefault();
    document.getElementById("form").style.display = "none";
    document.getElementById("userdata-display").style.display ="block";

    var firstNames = document.getElementById("fName").value;
    var lastNames = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phoneNo = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var presentAdd = document.getElementById("present-addr").value;
    var prePin = document.getElementById("pres-pin").value;
    var permanentAdd = document.getElementById("perm-addr").value;
    var perPin = document.getElementById("perm-pin").value;
    var pan = document.getElementById("pan").value;
    var dob = document.getElementById("dob").value;
    var time = document.getElementById("time").value;
    var languages =  document.getElementById("language").value;
    var interests = document.getElementById("interests").value;
    var amount = document.getElementById("amount").value;
    var photo = document.getElementById("photo").value;

    document.getElementById("result-fname").innerHTML = firstNames;
    document.getElementById("result-lname").innerHTML = lastNames;
    document.getElementById("result-email").innerHTML = email;
    document.getElementById("result-phone").innerHTML = phoneNo;
    document.getElementById("result-password").innerHTML = password;
    document.getElementById("result-gender").innerHTML = gender;
    document.getElementById("result-Preaddress").innerHTML = presentAdd;
    document.getElementById("result-Prepin").innerHTML = prePin ;
    document.getElementById("result-Permaddress").innerHTML = permanentAdd;
    document.getElementById("result-Permpin").innerHTML = perPin;
    document.getElementById("result-pan").innerHTML =pan ;
    document.getElementById("result-dob").innerHTML = dob;
    document.getElementById("result-time").innerHTML = time;
    document.getElementById("result-lang").innerHTML = languages;
    document.getElementById("result-field").innerHTML = interests;
    document.getElementById("result-balance").innerHTML = amount;
    document.getElementById("result-pic").innerHTML = photo;





}





