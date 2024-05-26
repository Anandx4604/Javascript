

function validate() {
    var usernames = document.getElementById("uname");
    var passwords = document.getElementById("pw");

    if (usernames.value.trim() == "") {
        // alert("Username can't be blank");
        usernames.style.border="solid 1px red";
        document.getElementById("userLabel").style.visibility="visible";
        return false;
    }

    else if (passwords.value.trim() == "") {
        // alert("Password can't be Blank!");
        passwords.style.border="solid 1px red";
        document.getElementById("pwLabel").style.visibility="visible";

        return false;
    }

    else if (passwords.value.trim().length<5) {
        alert("Password too short");
        passwords.style.border="solid 1px red";
        document.getElementById("pwLabel").style.visibility="visible";
        return false;

    }
    else {
        true;
    }
}