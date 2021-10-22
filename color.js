import { FWAPI } from "./fwapi.js"
import { CinemaPortfolioItem, EmbeddedVimeo } from "./fwapi.js";

console.log("index.js loaded");

FWAPI.ActivePageInt = 1;

let navLinksContainer = FWAPI.CreateElement("div", "", "div");
let navLinks = FWAPI.CreateElement("div", "", "navlinks");

FWAPI.AppendNavlinks(navLinks);
FWAPI.AppendElement(navLinksContainer, navLinks);
FWAPI.AppendElement("page", navLinksContainer);

const portfolioPage = FWAPI.CreateElement("div", "", "portfolio-page");
FWAPI.AppendElement("page", portfolioPage);

let cinematographyReel = new EmbeddedVimeo("https://player.vimeo.com/video/577076137?h=b6fd4598b1");
cinematographyReel.AppendTo(portfolioPage);

//const cinemaPortfolioHeader = FWAPI.CreateElement("h1", "PORTFOLIO", "cinema-portfolio-header");
const cinemaPortfolio = FWAPI.CreateElement("div", "", "cinema-portfolio");

/* FWAPI.AppendElement(portfolioPage, cinemaPortfolioHeader);

let portfolioItems = [];

for (let i = 0; i < portfolioItems.length; i++)
  FWAPI.AppendElement(cinemaPortfolio, portfolioItems[i].Get());

FWAPI.AppendElement(portfolioPage, cinemaPortfolio);
*/
