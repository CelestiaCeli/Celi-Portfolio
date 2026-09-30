import Generator from "./Generator.js"

class Footer extends Generator
{
	constructor()
	{
		super();
		this.ID = "footer";
		this.content = "<div id='credits'>" +
							"<div id='socialMedia'>" +
							"</div>" +
							"<div class='contextMenu'>" +
							"<a href='/Webpages/HTML/Professional/Resume.html'> <p> Resume </p> </a>" +
							"<a href='/Webpages/HTML/Professional/Extended.html'> <p> Portfolio </p> </a>" +
							"<a href='/Webpages/HTML/Professional/Promo.html'> <p> Promo Video </p> </a>" +
							"</div>" +
							"<div id='contextOptions'>" +
							"<a href='#top' class='LeftSide'> <p> Back to top </p> </a>" +
							"<a href='../Credits.html' class='LeftSide'> <p> Special Thanks </p> </a>" +
							"</div> <div id='copyright'> <p> @2026, Celeste/Cesaster, </p>" +
							"</div>" +
							"</div>"
	}
}
let footer = new Footer();
addEventListener("load", (event) => { footer.Generate() });
