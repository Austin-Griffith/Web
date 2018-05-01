
var favColor;
var notFavColor;
var myFont;
var changedFont ;
var carColor ;
var x ;
var y ;
var myNodeList ;

//prompts to the user for input

favColor = prompt("What is your favorite color?");
notFavColor = prompt("What is your least favorite color?");
carColor = prompt("What color is your car?") ;

//changes the background color of the webpage with user input
if (favColor != null && favColor != '') {
    document.body.style.backgroundColor = favColor;
}

//set variable x to the ID of fonts
var x = document.getElementById("font") ;
if(x != null){
    x.style.color = notFavColor ; //changes the color with user input
}


//set variable to element ID of labs
var y = document.getElementById("labs");
if(y != null){
  y.style.color = carColor ;  //changes font color based on user input
  y.innerHTML = "Using javascript we have changed elements in this HTML doc" ;
}

//Accessing and manipulate a nodelist
myNodeList = document.querySelectorAll("h3") ;
myNodeList[0].style.color = "black" ;
myNodeList[1].style.color = notFavColor ;
