/*
CSS IDEAS
- Click on the game's image and it opens a pop up which you can then press to lead you to the extended site focused on that game page
- Art showcase slideshow - has arrows to allow u to see more art
- Animation focus

Day 2 Current Goals

- Clean up the project layout
*/

var ThemeMode = true;

function ThemeSwitch(element)
{
    document.body.style.backgroundColor="#3d3d3d";
    var Image = element.getElementsByTagName("img")

    ThemeMode = !ThemeMode;
    console.log(ThemeMode);

    var Text = []

    //Feel free to add any tag to change color on mode switch
    Text.push(document.getElementsByTagName("p"));
    Text.push(document.getElementsByTagName("h1"));
    Text.push(document.getElementsByTagName("h2"));
    Text.push(document.getElementsByTagName("h3"));
    Text.push(document.getElementsByTagName("h4"));
    console.log(Text);

    if (ThemeMode == false)
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