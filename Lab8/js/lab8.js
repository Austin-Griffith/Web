function NRA_gun_survey()
{
	//variable to store output
	var output = document.getElementById("output");


	//What kind of guns are you interested in? ---> check boxes section //
	if(document.getElementById("rifles").checked==true){
		output.innerHTML +="You are interested in " + document.getElementById("rifles").value + "." + "<br>";
	}
	if(document.getElementById("handguns").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("handguns").value + "<br>";
	}
	if(document.getElementById("shotguns").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("shotguns").value + "<br>";
	}
	if(document.getElementById("assult").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("assult").value + "<br>";
	}
	if(document.getElementById("pistol").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("pistol").value + "<br>";
	}
	if(document.getElementById("sniper").checked==true){
		output.innerHTML +="Your recorded answer to the survey says you are interested in " + document.getElementById("sniper").value + "<br>";
	}




	//yes/no radio buttons section //
	if(document.getElementById("gunsYes").checked==true){
		output.innerHTML +="You answered yes to owning a firearm.<br>";
	}
	//maybe change to else if () //
	else {
		if (document.getElementById("gunsNo").checked==true){
			output.innerHTML +="You answered no to owning a firearm.<br>";
		}
	}

	//dropdown selection list section
	if (document.getElementById("gun_choice").value!="none"){
		output.innerHTML += "Today is your lucky day. You choose to purchase "+ document.getElementById("gun_choice").value;
	}
	//end of function//
}

//event listen to run declared function above//
var nra=document.getElementById("enter");
nra.addEventListener("click", NRA_gun_survey, false);
