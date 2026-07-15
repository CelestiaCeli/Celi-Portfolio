class Fader 
{

	const DEFAULT_FADEIN = 100;
	const DEFAULT_FADEOUT = 0;

	constructor(_element, _fadeIn) 
	{
		this.fadeIn = _fadeIn;
		this.element = _element;
	}

	function JustifyOpacity(element, invert, lowFadeAmt, highFadeAmt)
	{
		console.log(element);
		if (invert == true)
		{
			element.style.opacity = lowFadeAmt + "%";
		}
		else
		{
			element.style.opacity = highFadeAmt + "%";
		}
	}

function SetFadeAmt()
{
	this.lowFadeAmt = _lowFadeAmt;
	this.highFadeAmt = _highFadeAmt;
}

function GenerateFadeAnim(element)
{
	if (this.lowFadeAmt == null || highFadeAmt == null)
	{
		GenerateDefaultFadeAnim(element);
	}
	else
	{
		GenerateCustomFadeAnim(element);
	}
}

function GenerateCustomFadeAnim(element)
{
	var fadeInAnim = [ { opacity: lowFadeAmt + "%" }, { opacity: highFadeAmt + "%" } ];
	var fadeOutAnim = [ { opacity: highFadeAmt + "%" }, { opacity: lowFadeAmt + "%" } ];
	var titleFadeSpeed = { duration: 500, iterations: 1, complete: JustifyOpacity(element, switched), }

	if (fadeIn = true)
	{
		return (fadeInAnim, titleFadeSpeed);
	}
	else
	{
		return (fadeOutAnim, titleFadeSpeed);
	}
}

function GenerateDefaultFadeAnim()
{
	var fadeInAnim = [ { opacity: DEFAULT_FADEOUT + "%" }, { opacity: DEFAULT_FADEIN + "%" } ];
	var fadeOutAnim = [ { opacity: DEFAULT_FADEIN + "%" }, { opacity: DEFAULT_FADEOUT + "%" } ];
	var titleFadeSpeed = { duration: 500, iterations: 1, complete: JustifyOpacity(element, switched), }

	if (fadeIn = true)
	{
		return (fadeInAnim, titleFadeSpeed);
	}
	else
	{
		return (fadeOutAnim, titleFadeSpeed);
	}
}


function SetOpacity(_lowFadeAmt, _highFadeAmt)
{
	lowFadeAmt = _lowFadeAmt;
	highFadeAmt = _highFadeAmt;

}

function BeginAnimation(element)
{
	element.animate(element);

}
	


}
