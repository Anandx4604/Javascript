document.write("<h1>If- else control statements<h1>");
document.write("Odd Or Even Numbers");
document.write("<br>");
var x = 9;
if (x % 2 == 0) {
    document.write("Even Number:", x);
    document.write("<br>");
}

else {
    document.write("Odd Number:", x);
    document.write("<br>");
    document.write("<br>");

}

document.write("Positive, Negative, Zero check");
document.write("<br>");
var x = 4;

if (x > 0) {
    document.write("<h3>Positive Number</h3>");
}

else if (x < 0) {
    document.write("<h3>Negative Number</h3>");
}

else {
    document.write("<h3>Number is Zero!</h3>");
}

document.write("<h3>Positive and Odd or even check</h3>");
var x = 4;

if (x > 0) {
    if (x % 2 == 0) {
        document.write("Even Number:", x);
    }

    else {
        document.write("Positive but Odd number")
    }
}

else {
    document.write("Number is negative");

}
