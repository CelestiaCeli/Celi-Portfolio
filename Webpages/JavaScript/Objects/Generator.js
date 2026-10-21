export default class Generator
{
	constructor()
	{
		this.name = "null";
		this.ID = "null";
	}

	Generate()
	{
		const selectedElement = document.getElementById(this.ID);
		const newElement = document.createElement("div");

		newElement.innerHTML = this.content;
		const node = new DOMParser().parseFromString(this.content, "text/html").body;

		selectedElement.appendChild(node.childNodes[0]);

		this.FinishedGenerator();
	}

	RetrieveElement()
	{
		return null;
	}

	FinishedGenerator()
	{
		return null;
	}

}
