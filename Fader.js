export let Fader = {

	var lowFadeAmt;
	var highFadeAmt;
	var fadeIn;
	var element;


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

function GenerateFadeAnim(element)
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
