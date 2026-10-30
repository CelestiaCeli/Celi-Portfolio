import SectionFader from "./Objects/SectionFader.js"

function Setup()
{
	let home = new SectionFader("home", "headerButton");
	let formal = new SectionFader("formal", "headerButton");
	let informal = new SectionFader("informal", "headerButton");
}

addEventListener("load", (event) => { Setup(); });
