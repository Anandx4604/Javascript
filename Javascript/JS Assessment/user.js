function firstNameValid() {
    var firstNames = document.getElementById("fName");
    var regx = /[a-zA-Z]/;
    if (regx.test(firstNames.value.trim())) {
        document.getElementById("error-label1").innerHTML = "valid";
        document.getElementById("error-label1").style.visibility = "visible";
        document.getElementById("error-label1").style.color = "green";
        document.getElementById("fName").style.borderColor = "green";
        document.getElementById("fName").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label1").innerHTML = "Invalid";
        document.getElementById("error-label1").style.visibility = "visible";
        document.getElementById("error-label1").style.color = "red";
        document.getElementById("fName").style.borderColor = "red";
        document.getElementById("fName").style.borderStyle = "solid";


    }
}


function lastNameValid() {
    var lastNames = document.getElementById("lName");
    var regxl = /[a-zA-Z]/;
    if (regxl.test(lastNames.value.trim())) {
        document.getElementById("error-label2").innerHTML = "valid";
        document.getElementById("error-label2").style.visibility = "visible";
        document.getElementById("error-label2").style.color = "green";
        document.getElementById("lName").style.borderColor = "green";
        document.getElementById("lName").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label2").innerHTML = "Invalid";
        document.getElementById("error-label2").style.visibility = "visible";
        document.getElementById("error-label2").style.color = "red";
        document.getElementById("lName").style.borderColor = "red";
        document.getElementById("lName").style.borderStyle = "solid";


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

function phoneValid() {
    var phones = document.getElementById("phone").value;
    var regx = /^[7-9][0-9]{8}$/;
    if (regx.test(phones)) {
        document.getElementById("error-label4").innerHTML = "valid";
        document.getElementById("error-label4").style.visibility = "visible";
        document.getElementById("error-label4").style.color = "green";
        document.getElementById("phone").style.borderColor = "green";
        document.getElementById("phone").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label4").innerHTML = "Invalid";
        document.getElementById("error-label4").style.visibility = "visible";
        document.getElementById("error-label4").style.color = "red";
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("phone").style.borderStyle = "solid";


    }
}


function presentAddValid() {
    var presAdd = document.getElementById("present-addr").value;
    var regx = /^([a-zA-Z0-9+\.-]{10})/ //mininum 10 letters for address
    if (regx.test(presAdd)) {
        document.getElementById("error-label5").innerHTML = "valid";
        document.getElementById("error-label5").style.visibility = "visible";
        document.getElementById("error-label5").style.color = "green";
        document.getElementById("present-addr").style.borderColor = "green";
        document.getElementById("present-addr").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label5").innerHTML = "Invalid";
        document.getElementById("error-label5").style.visibility = "visible";
        document.getElementById("error-label5").style.color = "red";
        document.getElementById("present-addr").style.borderColor = "red";
        document.getElementById("present-addr").style.borderStyle = "solid";


    }
}


function presentPinValid() {
    var presPin = document.getElementById("pres-pin").value;
    var regx = /^[0-9]{5}$/;
    if (regx.test(presPin)) {
        document.getElementById("error-label6").innerHTML = "valid";
        document.getElementById("error-label6").style.visibility = "visible";
        document.getElementById("error-label6").style.color = "green";
        document.getElementById("pres-pin").style.borderColor = "green";
        document.getElementById("pres-pin").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label6").innerHTML = "Invalid";
        document.getElementById("error-label6").style.visibility = "visible";
        document.getElementById("error-label6").style.color = "red";
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
        document.getElementById("error-label7").innerHTML = "valid";
        document.getElementById("error-label7").style.visibility = "visible";
        document.getElementById("error-label7").style.color = "green";
        document.getElementById("perm-addr").style.borderColor = "green";
        document.getElementById("perm-addr").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label7").innerHTML = "Invalid";
        document.getElementById("error-label7").style.visibility = "visible";
        document.getElementById("error-label7").style.color = "red";
        document.getElementById("perm-addr").style.borderColor = "red";
        document.getElementById("perm-addr").style.borderStyle = "solid";


    }
}


function permPinValid() {
    var permPin = document.getElementById("perm-pin").value;
    var regx = /^[0-9]{5}$/;
    if (regx.test(permPin)) {
        document.getElementById("error-label8").innerHTML = "valid";
        document.getElementById("error-label8").style.visibility = "visible";
        document.getElementById("error-label8").style.color = "green";
        document.getElementById("perm-pin").style.borderColor = "green";
        document.getElementById("perm-pin").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label8").innerHTML = "Invalid";
        document.getElementById("error-label8").style.visibility = "visible";
        document.getElementById("error-label8").style.color = "red";
        document.getElementById("perm-pin").style.borderColor = "red";
        document.getElementById("perm-pin").style.borderStyle = "solid";


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
    var phoneNo = document.getElementById("phone").value;
    var presentAdd = document.getElementById("present-addr").value;
    var prePin = document.getElementById("pres-pin").value;
    var permanentAdd = document.getElementById("perm-addr").value;
    var perPin = document.getElementById("perm-pin").value;
    var gender = document.getElementById("gender").value;
    var dept = document.getElementById("dept").value;
    var photo = document.getElementById("photo").value;

    document.getElementById("fnames").innerHTML = firstNames;
    document.getElementById("lnames").innerHTML = lastNames;
    document.getElementById("emails").innerHTML = email;
    document.getElementById("phones").innerHTML = phoneNo;
    document.getElementById("pre-adds").innerHTML = presentAdd;
    document.getElementById("pre-pins").innerHTML = prePin ;
    document.getElementById("per-adds").innerHTML = permanentAdd;
    document.getElementById("per-pins").innerHTML = perPin;
    document.getElementById("genders").innerHTML = gender;
    document.getElementById("depts").innerHTML = dept ;
    document.getElementById("pics").innerHTML = photo;

}



