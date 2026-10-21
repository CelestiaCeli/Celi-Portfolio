export default class Generator
{
	constructor()
	{
		this.name = "null";
		this.ID = "null";
	}

	Generate()
	{
		const selectedElement = document.getElementsByClassName(this.ID);
		console.log(selectedElement);
		for (var i = 0; i < selectedElement.length; i++)
		{
			this.GenerateOnce(selectedElement[i]);
		}
		this.FinishedGenerator();
	}

	GenerateOnce(specificElement)
	{
		console.log("Generating");
			const newElement = document.createElement("div");

			newElement.innerHTML = this.content;
			const node = new DOMParser().parseFromString(this.content, "text/html").body;

			specificElement.appendChild(node.childNodes[0]);
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
