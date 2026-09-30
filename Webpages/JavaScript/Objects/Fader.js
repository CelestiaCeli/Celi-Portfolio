const DEFAULT_HIGHFADE = 100;
const DEFAULT_LOWFADE = 0;
const DEFAULT_TIME = 5;
const MILISECOND_AMPLIFIER = 100;

export default class Fader 
{
	constructor(_lowFade, _highFade, _time) 
	{
		this.SetFadeAmt(_lowFade, _highFade);
		this.time = _time * MILISECOND_AMPLIFIER;
		this.fadeIn = false;
	}

	static FadeOnly(_lowFade, _highFade)
	{
		return new Fader(_lowFade, _highFade, DEFAULT_TIME);
	}

	static TimeOnly(_time)
	{
		return new Fader(DEFAULT_LOWFADE, DEFAULT_HIGHFADE, _time);
	}

	FadeAction(fadeAmt) {}
	FadeFinished() {}

	SetFadeAmt(_lowFade, _highFade)
	{
		this.lowFade = _lowFade;
		this.highFade = _highFade;
	}

	FadeFinished(element, faded)
	{
		if (faded)
		{
			element.style.opacity = this.highFade;
			element.style.pointerEvents = 'auto';
		}
		else
		{
			element.style.opacity = this.lowFade;
			element.style.pointerEvents = 'none';
		}
		this.fadeOut = !this.fadeOut;
	}

	GenerateFade(_element)
	{
		const lowFadePercent = this.lowFade + "%";
		const highFadePercent = this.highFade + "%";

		const lowOpacity = { opacity: lowFadePercent };
		const highOpacity = { opacity: highFadePercent };

		const fadeInAnim = [lowOpacity, highOpacity];
		const fadeOutAnim = [highOpacity, lowOpacity];
		var element = null;

		if (_element == null)
		{
			element = document.getElementById(_element);
		}
		else
		{
			element = _element;
		}
		const fadeSpeed = { duration: this.time, iterations: 1, complete: this.FadeFinished(element, this.fadeOut), }
		if (this.fadeOut == true)
		{
			element.animate(fadeOutAnim, fadeSpeed);
		}
		else
		{
			element.animate(fadeInAnim, fadeSpeed);
		}

		return;
	}
}
