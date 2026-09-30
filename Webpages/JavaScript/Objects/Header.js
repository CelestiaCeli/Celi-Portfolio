import Generator from "./Generator.js"

class Header extends Generator
{
	constructor()
	{
		super();
		this.ID = "header";
		this.content =	"<header>" +
						"<section id='title'>" +
							"<h1>" +
							"Celeste" +
							"</h1>" +
						"</section>" +
						"<div id='generatedHeader'>" +
						"<img id='headerBackground' src='../../../Assets/Headers/HeaderBackground.png'>" +
						"<div id='headerOptions'>" +
							"<a href='Resume.html'>" +
							"<h3>" + 
							"Resume" +
							"</h3>" +
							"</a>" +
							"<a href='Extended.html'>" +
							"<h3>" +
							"Portfolio" +
							"</h3>" +
							"</a>" +
							"<a href='Contact.html'>" +
							"<h3>" +
							"Contact" +
							"</h3>" +
							"</a>" +
							"<a href='Promo.html'>" +
							"<h3>" +
							"Promo Video" +
							"</h3>" +
							"</a>" +
							"<a href='../Card.html'>" +
							"<h3>" +
							"Back to Card" +
							"</h3>" +
							"</a>" +
						"</div>" +
						"</header>"

	}
}

let header = new Header();
addEventListener("load", (event) => { header.Generate() });
