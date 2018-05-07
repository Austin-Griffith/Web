function gen_car_survey()
{
	//variable to store output
	var output = document.getElementById("output");


	//What kind of cars are you interested in? ---> check boxes section //
	if(document.getElementById("trucks").checked==true){
		output.innerHTML +="You are interested in " + document.getElementById("trucks").value + "." + "<br>";
	}
	if(document.getElementById("suv's").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("suv's").value + "<br>";
	}
	if(document.getElementById("compacts").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("compacts").value + "<br>";
	}
	if(document.getElementById("sedans").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("sedans").value + "<br>";
	}
	if(document.getElementById("coupes").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("coupes").value + "<br>";
	}
	if(document.getElementById("hybrids").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("hybrids").value + "<br>";
	}


	//yes/no radio buttons section //
	if(document.getElementById("carsYes").checked==true){
		output.innerHTML +="You answered yes to owning a vehicle.<br>";
	}
	//maybe change to else if () //
	else {
		if (document.getElementById("carsNo").checked==true){
			output.innerHTML +="You answered no to owning a vehicle.<br>";
		}
	}

	if(document.getElementById("electricYes").checked==true){
		output.innerHTML +="You answered yes to owning an electric vehicle.<br>";
	}
	else {
		if (document.getElementById("electricNo").checked==true){
			output.innerHTML +="You answered no to owning an electric vehicle.<br>";
		}
	}

	//dropdown selection list section
	if (document.getElementById("car_choice").value!="none"){
		output.innerHTML += "You would choose to purchase a "+ document.getElementById("car_choice").value;
	}

	//favorite car
		var favoriteCar = document.getElementById("favorite").value;
		output.innerHTML += favoriteCar + " is your favorite type of car on the market today.<br>";

	//end of function//
}


//event listen to run declared function above//
var car=document.getElementById("enter");
car.addEventListener("click", gen_car_survey, false);
