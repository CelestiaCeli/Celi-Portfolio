export let GalleryCreator = {
	
	var fader = new fader();
	var galleryAmount;
	//Size of gallery in %
	var gallerySize;

	function CreateImageCollection(imageSeries)
	{
		var galleryObject
		galleryObject = document.createElement("div");
		galleryObject.id = "Gallery";
		for(var i = 0; i < collection.size(); i += 1)
		{
			var image = document.createElement("img");
			image.src = collection[i];
			
			galleryObject.innerhtml += image;
		}

		return galleryObject;
	}

	function CreateGallery(var imageCollection)
	{
		var leftArrow = new Arrow();
		var rightArrow = new Arrow();
		
		leftArrow.id = "leftArrow";
		leftArrow.id = "rightArrow";

		var sizeOfArray = imageCollection.Size();

		imageCollection[0] = leftArrow;
		imageCollection[sizeOfArray] = rightArrow;
		
	}

	function CreateGallery(var imageSeries)
	{
		var imageCollection;
		imageCollection = CreateImageCollection(imageSeries);

		var Gallery = CreateGallery(imageCollection)
	}


}
