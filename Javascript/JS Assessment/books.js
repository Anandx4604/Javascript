function bookNameValid()
{
    var bookNames = document.getElementById("bookName").value;
    var regx = /[a-zA-Z0-9-:]/; //name, numbers, symbols can be in book title
    if (regx.test(bookNames)) {
        document.getElementById("error-label1").innerHTML = "valid";
        document.getElementById("error-label1").style.visibility = "visible";
        document.getElementById("error-label1").style.color = "green";
        document.getElementById("bookName").style.borderColor = "green";
        document.getElementById("bookName").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label1").innerHTML = "Invalid";
        document.getElementById("error-label1").style.visibility = "visible";
        document.getElementById("error-label1").style.color = "red";
        document.getElementById("bookName").style.borderColor = "red";
        document.getElementById("bookName").style.borderStyle = "solid";


    }
}

function RackValid()
{
    var rackNo = document.getElementById("rackno").value;
    var regx = /[0-9]/;
    if (regx.test(rackNo)) {
        document.getElementById("error-label2").innerHTML = "valid";
        document.getElementById("error-label2").style.visibility = "visible";
        document.getElementById("error-label2").style.color = "green";
        document.getElementById("rackno").style.borderColor = "green";
        document.getElementById("rackno").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label2").innerHTML = "Invalid";
        document.getElementById("error-label2").style.visibility = "visible";
        document.getElementById("error-label2").style.color = "red";
        document.getElementById("rackno").style.borderColor = "red";
        document.getElementById("rackno").style.borderStyle = "solid";


    }
}


function authorNameValid()
{
    var authorNames = document.getElementById("authorName").value;
    var regx = /[a-zA-Z]/;
    if (regx.test(authorNames)) {
        document.getElementById("error-label3").innerHTML = "valid";
        document.getElementById("error-label3").style.visibility = "visible";
        document.getElementById("error-label3").style.color = "green";
        document.getElementById("authorName").style.borderColor = "green";
        document.getElementById("authorName").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label3").innerHTML = "Invalid";
        document.getElementById("error-label3").style.visibility = "visible";
        document.getElementById("error-label3").style.color = "red";
        document.getElementById("authorName").style.borderColor = "red";
        document.getElementById("authorName").style.borderStyle = "solid";


    }
}

function PublishYearValid(){
    var pubYears = document.getElementById("pubYear").value;
    var regx = /^[1-9]{3}$/;
    if (regx.test(pubYears)) {
        document.getElementById("error-label4").innerHTML = "valid";
        document.getElementById("error-label4").style.visibility = "visible";
        document.getElementById("error-label4").style.color = "green";
        document.getElementById("pubYear").style.borderColor = "green";
        document.getElementById("pubYear").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label4").innerHTML = "Invalid";
        document.getElementById("error-label4").style.visibility = "visible";
        document.getElementById("error-label4").style.color = "red";
        document.getElementById("pubYear").style.borderColor = "red";
        document.getElementById("pubYear").style.borderStyle = "solid";


    }
}

function PublisherNameValid()
{
    var publisherNames = document.getElementById("pubName").value;
    var regx = /[a-zA-Z]/;
    if (regx.test(publisherNames)) {
        document.getElementById("error-label5").innerHTML = "valid";
        document.getElementById("error-label5").style.visibility = "visible";
        document.getElementById("error-label5").style.color = "green";
        document.getElementById("pubName").style.borderColor = "green";
        document.getElementById("pubName").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label5").innerHTML = "Invalid";
        document.getElementById("error-label5").style.visibility = "visible";
        document.getElementById("error-label5").style.color = "red";
        document.getElementById("pubName").style.borderColor = "red";
        document.getElementById("pubName").style.borderStyle = "solid";


    }
}

function AuthorEmailValid(){
    var emails = document.getElementById("author-mail").value;
    var regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regx.test(emails)) {
        document.getElementById("error-label6").innerHTML = "valid";
        document.getElementById("error-label6").style.visibility = "visible";
        document.getElementById("error-label6").style.color = "green";
        document.getElementById("author-mail").style.borderColor = "green";
        document.getElementById("author-mail").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label6").innerHTML = "Invalid";
        document.getElementById("error-label6").style.visibility = "visible";
        document.getElementById("error-label6").style.color = "red";
        document.getElementById("author-mail").style.borderColor = "red";
        document.getElementById("author-mail").style.borderStyle = "solid";


    }
}

function AuthorPhoneValid(){
    var phones = document.getElementById("author-phone").value;
    var regx = /^[7-9][0-9]{8}$/;
    if (regx.test(phones)) {
        document.getElementById("error-label7").innerHTML = "valid";
        document.getElementById("error-label7").style.visibility = "visible";
        document.getElementById("error-label7").style.color = "green";
        document.getElementById("author-phone").style.borderColor = "green";
        document.getElementById("author-phone").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label7").innerHTML = "Invalid";
        document.getElementById("error-label7").style.visibility = "visible";
        document.getElementById("error-label7").style.color = "red";
        document.getElementById("author-phone").style.borderColor = "red";
        document.getElementById("author-phone").style.borderStyle = "solid";


    }
}

function AuthorAddValid(){
    var authorAdd = document.getElementById("author-addr").value;
    var regx = /^([a-zA-Z0-9+\.-]{10})/ //mininum 10 letters for address
    if (regx.test(authorAdd)) {
        document.getElementById("error-label8").innerHTML = "valid";
        document.getElementById("error-label8").style.visibility = "visible";
        document.getElementById("error-label8").style.color = "green";
        document.getElementById("author-addr").style.borderColor = "green";
        document.getElementById("author-addr").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label8").innerHTML = "Invalid";
        document.getElementById("error-label8").style.visibility = "visible";
        document.getElementById("error-label8").style.color = "red";
        document.getElementById("author-addr").style.borderColor = "red";
        document.getElementById("author-addr").style.borderStyle = "solid";


    }
}

function AuthorPinValid(){
    var authorPin = document.getElementById("author-pin").value;
    var regx = /^[0-9]{5}$/;
    if (regx.test(authorPin)) {
        document.getElementById("error-label9").innerHTML = "valid";
        document.getElementById("error-label9").style.visibility = "visible";
        document.getElementById("error-label9").style.color = "green";
        document.getElementById("author-pin").style.borderColor = "green";
        document.getElementById("author-pin").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label9").innerHTML = "Invalid";
        document.getElementById("error-label9").style.visibility = "visible";
        document.getElementById("error-label9").style.color = "red";
        document.getElementById("author-pin").style.borderColor = "red";
        document.getElementById("author-pin").style.borderStyle = "solid";
    }
}

function ISPNValid(){
    var ispnPin = document.getElementById("ispnNo").value;
    var regx = /[^ISPN-][0-9]$/;
    if (regx.test(ispnPin )) {
        document.getElementById("error-label10").innerHTML = "valid";
        document.getElementById("error-label10").style.visibility = "visible";
        document.getElementById("error-label10").style.color = "green";
        document.getElementById("ispnNo").style.borderColor = "green";
        document.getElementById("ispnNo").style.borderStyle = "solid";

    }
    else {
        document.getElementById("error-label10").innerHTML = "Invalid";
        document.getElementById("error-label10").style.visibility = "visible";
        document.getElementById("error-label10").style.color = "red";
        document.getElementById("ispnNo").style.borderColor = "red";
        document.getElementById("ispnNo").style.borderStyle = "solid";
    }
}


function ButtonClick(event){
    event.preventDefault();
    document.getElementById("book-form").style.display = "none";
    document.getElementById("bookdata-display").style.display ="block";

    var bname = document.getElementById("bookName").value;
    var depts = document.getElementById("dept").value;
    var rack = document.getElementById("rackno").value;
    var authName = document.getElementById("authorName").value;
    var pubYears = document.getElementById("pubYear").value;
    var pubNames = document.getElementById("pubName").value;
    var authMail = document.getElementById("author-mail").value;
    var authPhone = document.getElementById("author-phone").value;
    var authAddr = document.getElementById("author-addr").value;
    var authPin = document.getElementById("author-pin").value;
    var ispn = document.getElementById("ispnNo").value;
    var photo = document.getElementById("book-photo").value;

    document.getElementById("bookName").innerHTML = bname;
    document.getElementById("depts").innerHTML = depts;
    document.getElementById("rack").innerHTML = rack;
    document.getElementById("aName").innerHTML = authName;
    document.getElementById("pYear").innerHTML = pubYears;
    document.getElementById("pName").innerHTML = pubNames ;
    document.getElementById("aEmail").innerHTML = authMail;
    document.getElementById("aPhone").innerHTML = authPhone;
    document.getElementById("aAddress").innerHTML = authAddr;
    document.getElementById("aPin").innerHTML = authPin;
    document.getElementById("ISPNno").innerHTML = ispn;
    document.getElementById("bookPhoto").innerHTML = photo;

}



