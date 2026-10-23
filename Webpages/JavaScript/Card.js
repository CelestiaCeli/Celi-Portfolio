var currentMode = "home";

var elements;


function ShowHome()
{
	var currElem = document.getElementById("home");
	currElem.style.visibility = "visible";
}

function ShowFormal()
{
	var currElem = document.getElementById("formal");
	currElem.style.visibility = "visible";
}

function ShowInformal()
{
	var currElem = document.getElementById("informal");
	currElem.style.visibility = "visible";
	
}

function HideCurrent()
{
	const currElem = document.getElementById(this.currentMode);
	currElem.style.visibility = "hidden";
}

function HideAll()
{
	console.log(elements.length);
	try
	{
		for (var i = 0; i < elements.length; i++)
		{
			elements[i].style.visibility = "hidden";
		}
	}
	catch
	{
		console.log("Variable does not have any elements");
	}
}

function ChangeView(category)
{
		this.HideCurrent();

		ShowSpecific(category);
}

function ShowSpecific(category)
{
	var error; 
		switch(category)
		{
			case("formal"):
				this.ShowFormal();
				error = false;
				break;
			case("informal"):
				this.ShowInformal();
				error = false;
				break;
			case("home"):
				this.ShowHome();
				error = false;
				break;
			default:
				console.log("Wrong value submitted");
				error = true;
				break;

		}

		if (error != true)
		{
			this.currentMode = category;
		}
		else
		{
			this.ShowHome();
		}
}

function AutoStart()
{
	var filename = window.location.href;
	this.elements = [ document.getElementById("home"), document.getElementById("informal"), document.getElementById("formal") ]
	
	console.log(filename);
	var section;
	try
	{
		var segments = filename.split('#');
		section = segments.pop();
	}
	catch
	{
		section = "home";
	}
	console.log(section);

	this.HideAll()
	ShowSpecific(section);
}

addEventListener("load", (event) => { AutoStart() });
