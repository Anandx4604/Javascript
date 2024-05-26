function validate() {
    var username = document.getElementById("uname").value;
    // var regx = /E00/i;
    // var regx = /[sdp]imple/;
    // var regx = /[a-x]00/;
    // var regx = /[0-5]abc[6-9]/;
    // var regx =/[^a-z]abc/;
    // var regx = /^[7-9]\d{9}$/;
    var regx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regx.test(username)) {
        alert("valid Username");
    }

    else{
        alert("Invalid Username");
        document.getElementById("userLabel").style.visibility="visible";
    }
}