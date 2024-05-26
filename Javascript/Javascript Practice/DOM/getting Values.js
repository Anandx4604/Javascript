function f1() {
    // var str = document.getElementById("text1").value;
    // alert("Value inside the text box is:"+str);

    var usernames = document.getElementById("text1").value;
    var passwords = document.getElementById("text2").value;
    if (usernames == passwords) {
        alert("Both Username and Password are same")
    }

    else {
        alert("Both Username and Password doesn't match")
    }

}