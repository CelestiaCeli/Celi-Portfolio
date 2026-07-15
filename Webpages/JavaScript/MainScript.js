/*
CSS IDEAS
- Click on the game's image and it opens a pop up which you can then press to lead you to the extended site focused on that game page
- Art showcase slideshow - has arrows to allow u to see more art
- Animation focus

Day 2 Current Goals

- Clean up the project layout
*/
/*
var professionalismMode = false;

var themeMode = true;

function ThemeSwitch(element)
{
    document.body.style.backgroundColor="#3d3d3d";
    var Image = element.getElementsByTagName("img")

    themeMode = !themeMode;
    console.log(themeMode);

    var Text = []

    //Feel free to add any tag to change color on mode switch
    Text.push(document.getElementsByTagName("p"));
    Text.push(document.getElementsByTagName("h1"));
    Text.push(document.getElementsByTagName("h2"));
    Text.push(document.getElementsByTagName("h3"));
    Text.push(document.getElementsByTagName("h4"));
    console.log(Text);

    if (themeMode == false)
    {
        element.src="Assets/EyeMoon.png";
        document.body.style.backgroundImage="url(Assets/BackgroundDark.webp)";

        for(var i = 0; i < Text.length; i++)
        {
            for(var ii = 0; ii < Text[i].length; ii++)
            {
                Text[i][ii].style.color="white";
            }
        }
    }
    else
    {
        element.src="Assets/BurningEye.png";
        document.body.style.backgroundImage="url(Assets/Background.webp)";

        for(var i = 0; i < Text.length; i++)
            {
                for(var ii = 0; ii < Text[i].length; ii++)
                {
                    Text[i][ii].style.color="black";
                }
            }
    }
}
:t
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

const galleryTypes = {
	DRAWING: 0,
	PROJECTS: 1,

}

function Gallery(var galleryType)
{
	switch(galleryType)
	{
		case(galleryTypes.DRAWING):
			break;
		
		case(galleryTypes.PROJECTS)
			break;



	}
}

*/

