import Generator from "./Generator.js"

class SocialMedia extends Generator
{
	constructor()
	{
		super();
		this.ID = "socialMedia";
		this.content = "<div id='socialMedia'>" +
			"<a href='https://github.com/CelestiaCeli'>" +
			"<img id='invert' src='../../../Assets/Logos/GithubLogo.svg' alt='Github Logo'>" + 
			"</a>" + 
			"<a href='https://mastodon.social/@Dyst0pian'>" +
			"<img src='../../../Assets/Logos/MastodonLogo.svg' alt='Mastodon Logo'>" + 
			"</a>" + 
			"</div>"
	}
}

let socialMedia = new SocialMedia();
addEventListener("load", (event) => { socialMedia.Generate() });


