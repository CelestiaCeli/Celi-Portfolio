import Fader from "./Fader.js"
const DEFAULT_HIGHFADE = 100;
const DEFAULT_LOWFADE = 0;
const DEFAULT_TIME = 5;
const MILISECOND_AMPLIFIER = 100;
const focusedID;
const groupName;

export default class Section extends Fader
{
	
	constructor()
	{
		this.focusedID = _focusedID;
		addEventListener("click", (event) => { console.log(event.target.nodeName ); });
	}

	function Show()
	{
		this.on = true;
		this.GenerateFade(this.element);
	}

	function Hide()
	{
		this.on = false;
		this.GenerateFade(this.element);
	}

	function ChangeView(category)
	{
		if (event.target.className == this.groupName)
		{
			if (event.target.ID == this.focusedID)
			{
				this.Show();
			}
			else
			{
				this.Hide();
			}
		}
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

		this.HideAll()
		ChangeView(section);
	}
}

addEventListener("click", (event) => { console.log(event.target.className ); });
