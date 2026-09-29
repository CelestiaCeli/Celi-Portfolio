import Generator from "./Generator.js"

class BackToCard extends Generator
{
	constructor()
	{
		super();
		this.ID = "stickyElements";
		this.content =	"<div>" +
						"<a href='/Webpages/HTML/Card.html'>" +
						"<p>" +
							"Back to Card" +
						"</p>"
						"</a>"
						"</div>"

	}
}

let backToCard = new BackToCard();
addEventListener("load", (event) => { backToCard.Generate() });
