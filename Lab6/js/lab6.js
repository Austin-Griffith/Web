
var favColor;
var notFavColor;
var myFont;

favColor = prompt("What is your favorite color?");

notFavColor = prompt("What is your least favorite color?");

document.write("Your favorite color is " + favColor + " and now sets the background of this page" + "<br>");

document.write("Your least favorite color is " + notFavColor + " and now is the text color for this page");

document.body.style.backgroundColor = favColor;

document.getElementById("font").style.color = notFavColor ;

document.body.style.color = notFavColor ;
