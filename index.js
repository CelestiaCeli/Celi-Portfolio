var switched = false;

document.addEventListener('scroll', function() {
	var Title = document.getElementById("title");
	var Header = document.getElementById("toolbar");

	const fadeIn = true;
	const fadeOut = false;

	if (document.documentElement.scrollTop > document.body.scrollHeight * 0.014 && switched != true)
	{
		switched = true;
		console.log(Title);
		Title.animate(GenerateFadeAnim(Title, fadeOut, 0, 100));

		Header.animate(GenerateFadeAnim(Header, fadeIn, 0, 100));
	}
	else if (document.documentElement.scrollTop < document.body.scrollHeight * 0.014 && switched != false)
	{

		Title.animate(GenerateFadeAnim(Title, fadeIn, 0, 100));

		Header.animate(GenerateFadeAnim(Header, fadeOut, 0, 100));
		switched = false;
	}
});

function portfolioReel()
{
	const portfolioTemplate = 
		{
			<img src="Randomized">
		}
}
