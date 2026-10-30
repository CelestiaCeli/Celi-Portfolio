import Fader from "./Fader.js"
const DEFAULT_HIGHFADE = 100;
const DEFAULT_LOWFADE = 0;
const DEFAULT_TIME = 5;
const MILISECOND_AMPLIFIER = 100;

export default class SectionFader extends Fader
{
	
	constructor(_focusedID, _groupName)
	{
		var element = document.getElementById(_focusedID);
		super(element, 0, 100, 0.1);
		this.focusedID = _focusedID;
		this.groupName = _groupName;
		addEventListener("click", (event) => { this.ChangeView(event); });

		this.element = document.getElementById(this.focusedID + "Contents");
		this.AutoStart();
	}

	Show()
	{
		this.on = true;
		this.GenerateFade(this.element);
	}

	Hide()
	{
		this.on = false;
		this.GenerateFade(this.element);
	}

	HideAll()
	{
		this.on = false;
	}
	
	ShowInstant()
	{
		this.element.style.visibility = "visible";
	}

	HideInstant()
	{
		this.element.style.visibility = "hidden";
	}

	ChangeView(category)
	{
		if (event.target.className == this.groupName)
		{
			if (event.target.getAttribute('id') == this.focusedID)
			{
				this.ShowInstant();
			}
			else
			{
				this.HideInstant();
			}
		}
	}
	ChangeViewInstantly(category)
	{
		if (event.target.className == this.groupName)
		{
			if (event.target.ID == this.focusedID)
			{
				this.ShowInstant();
			}
			else
			{
				this.HideInstant();
			}
		}
	}

	AutoStart()
	{
		var filename = window.location.href;
		var section;
		var segments = filename.split('#');
		if (segments.length > 1 )
			section = segments.pop();
		else
			section = "home";
		
		console.log(section);

		if (section == this.focusedID)
		{
			this.ShowInstant();
		}
		else
		{
			this.HideInstant();
		}

	}
}
