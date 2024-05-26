function radioClick()
{
    var gender1 = document.getElementById("Male");
    var gender2 = document.getElementById("Female");

    if(gender1.checked == true)
        alert("Selected Gender is:"+gender1.value);
    else if(gender2.checked== true)
        alert("Selected Gender is:"+gender2.value);
    else
        alert("No gender is selected!");
}


function dropdownClick()
{
    var selected = document.getElementById("selectBox");
    alert(selected.options[selected.selectedIndex].value);
}

function changeStyle()
{
    // var tag = document.getElementsByTagName("p");
    var element = document.getElementsByClassName("mypara");
    for(var x=0;i<element.length;x++)
    {
        element[x].style.color="red";
    }
    // para[0].style.fontSize= "xx-large";
    // para[1].style.color="red";
    // para[2].style.fontStyle="italic";
    // para[3].style.fontWeight="bold";
}