
function OnHover(element)
{
    console.log("hovered");

    var Image;
    var Text;
    var File;
    var Game = false;

    //Game Projects
    switch(element)
    {
        case(Adnillihation):
            File = "Assets/Games/AdnilliationAnim.webp";
            Game = true;
            break;
        case(AllSeeing):
            File = "Assets/Games/OuttaThisHellAnim.webp";
            Game = true;
            break;
        case(Gooly):
            File = "Assets/Games/GoolyAnim.webp";
            Game = true;
            break;
        case(RootemTootem):
            File = "Assets/Games/RootemTootemAnim.webp";
            Game = true;
            break;
        case(Chained):
            File = "Assets/Games/ChainedAnim.webp";
            Game = true;
            break;
        case(MineSweeping):
            File = "Assets/Games/MineSweepingAnim.webp";
            Game = true;
            break;
        case(Wordle):
            File = "Assets/Games/WordleCloneAnim.webp";
            Game = true;
            break;
        case(SealWebsite):
            File = "Assets/Games/SealWebsiteAnim.webp";
            Game = true;
            break;
        case(AboutMeBETA):
            File = "Assets/Games/PortfolioBetaAnim.webp";
            Game = true;
            break;
    }


    //Art
    switch(element)
    {

    }

    Image = element.getElementsByTagName("img");
    Image[0].src = File;
}

function OnLeave(element)
{
    var Image;
    var Text;
    var File;

    switch(element)
    {
        case(Adnillihation):
            File = "Assets/Games/Gooly.webp";
            break;


        case(AllSeeing):
            File = "Assets/Games/AllSeeing.webp";
            break;


        case(Gooly):
            File = "Assets/Games/Gooly.webp";
            break;

        case(RootemTootem):
            File = "Assets/Games/RootemTootem.webp";
            break;

        case(Chained):
            File = "Assets/Games/Chained.webp";
            break;

        case(posessionSim):
            File = "Assets/Games/Chained.webp";
            break;
        case(Wordle):
            File = "Assets/Games/WordleClone.webp";
            Game = true;
            break;
        case(SealWebsite):
            File = "Assets/Games/peakcinema.jpg";
            Game = true;
            break;
        case(AboutMeBETA):
            File = "Assets/Games/RepresentationImage.webp";
            Game = true;
            break;
    }


    Image = element.getElementsByTagName("img");
    Image[0].src = File;
    Text = element.getElementsByTagName("p");
    Text[0].hidden = false;
}
