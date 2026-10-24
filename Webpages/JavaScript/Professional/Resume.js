// General plan for a website template stylesheet to ensure consistency.
// One change will change all websites. Only put things that NEED to happen


function GenerateTemplate(element)
{
    console.log(document.documentElement);
    //HEADER

    console.log(document.documentElement.lastChild);

    var headerElement = document.getElementsByTagName("header");
    console.log(headerElement);
    var title = document.createElement("nav");

    const pagesNum = 3;
    var pages = [];

    console.log(title);
    console.log(pages);

    for (let i = 0, len = pagesNum; i < len; i++)
    {
        pages[i] = document.createElement("a");
        console.log(pages[i].innerHTML);
        var heading = document.createElement("h2");
        pages[i].getElementsByTagName("a")[0] = document.createElement("h2");
        //pagesLink.innerHTML.createElement("h1");
    }

    const portfolio = 0;

    const aboutMe = 1;

    const promoVideo = 2;

    console.log(pages[0]);

    pages[promoVideo].getElementsByTagName("a").href = "Credits.html";

    //About Me

    //Promo Video

    // var portfolio = <a href="Extended.html"><h1>Portfolio</h1></a>
    // var aboutMe = <a href="index.html"><h1>About Me</h1></a>
    // var promoVideo = <a href="Promo.html"><h1>Promo Video</h1></a>


    // var navigationBar = <nav className="Showcase" id="Header"></nav>;
    document.getElementsByTagName("h2")[0].innerHTML = "THE";
    headerElement.item(0).innerHTML = title.innerHTML;
    //headerElement[0].innerHTML.appendChild(title);
    console.log("yes");
}
