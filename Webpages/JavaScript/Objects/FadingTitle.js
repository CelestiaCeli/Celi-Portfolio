import ObjectFader from '../../JavaScript/Objects/ObjectFader.js'

function onLoad()
{
	try
	{
		let titleFade = ObjectFader.FadeOnly(document.getElementById('title'), 0, 100);
		addEventListener('scroll', (event) => { titleFade.OnScroll() });
	}
	catch
	{
		console.log("Scrolling functionality is missing.");
	}
}

addEventListener('load', (event) => { onLoad() });
