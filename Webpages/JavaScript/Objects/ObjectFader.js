import Fader from "./Fader.js"
const DEFAULT_HIGHFADE = 100;
const DEFAULT_LOWFADE = 0;
const DEFAULT_TIME = 5;
const MILISECOND_AMPLIFIER = 100;

export default class ObjectFader extends Fader
{
	constructor(_element, _lowFade, _highFade, _time)
	{
		super(_lowFade, _highFade, _time);
		this.element = _element;
		this.on = false;
	}

	static TimeOnly(_element, _time)
	{
		return new ObjectFader(_element, DEFAULT_LOWFADE, DEFAULT_HIGHFADE, _time);
	}

	static FadeOnly(_element, _lowFade, _highFade)
	{
		return new ObjectFader(_element, _lowFade, _highFade, DEFAULT_TIME);
	}

	OnScroll()
	{
		const totalHeight = document.body.scrollHeight;
		const scrollHeight = window.scrollY;
		const TITLE_FADE = 40;
		const currHeightPercent = totalHeight / scrollHeight;

		if (currHeightPercent < TITLE_FADE && this.on == false)
		{
			this.on = true;
			this.GenerateFade(this.element);
		}
		else if (currHeightPercent > TITLE_FADE && this.on == true)
		{
			this.on = false;
			this.GenerateFade(this.element);
		}
	}

}
