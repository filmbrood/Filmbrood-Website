import { FWAPI } from "./fwapi.js"
import { CinemaPortfolioItem, EmbeddedVimeo } from "./fwapi.js";

console.log("index.js loaded");

FWAPI.ActivePageInt = 0;

let navLinksContainer = FWAPI.CreateElement("div", "", "div");
let navLinks = FWAPI.CreateElement("div", "", "navlinks");

FWAPI.AppendNavlinks(navLinks);
FWAPI.AppendElement(navLinksContainer, navLinks);
FWAPI.AppendElement("page", navLinksContainer);

const portfolioPage = FWAPI.CreateElement("div", "", "portfolio-page");
FWAPI.AppendElement("page", portfolioPage);

const cinemaPortfolioHeader = FWAPI.CreateElement("h1", "PORTFOLIO", "cinema-portfolio-header");
const cinemaPortfolio = FWAPI.CreateElement("div", "", "cinema-portfolio");

let cinematographyReel = new EmbeddedVimeo("https://player.vimeo.com/video/552708118?h=070a0f50b8&byline=0&portrait=0");
cinematographyReel.AppendTo(portfolioPage);

let portfolioItems = [];
portfolioItems.push(new CinemaPortfolioItem("portfolio-pages/cinema/getting-through.html", "images/cinema-portfolio/getting_through.jpg", "Getting Through", "Short, TBD"));
portfolioItems.push(new CinemaPortfolioItem("portfolio-pages/cinema/black-card.html", "images/cinema-portfolio/black-card.jpg", "Black Card", "Feature, TBD"));
portfolioItems.push(new CinemaPortfolioItem("portfolio-pages/cinema/sheenas-secret.html", "images/cinema-portfolio/sheenas_secret.jpg", "Sheena's Secret", "Short, TBD"));
portfolioItems.push(new CinemaPortfolioItem("portfolio-pages/cinema/halloween-special.html", "images/cinema-portfolio/halloween-special.png", "Three and a Half Walls Halloween Special", "Short, 2020"));
portfolioItems.push(new CinemaPortfolioItem("portfolio-pages/cinema/sex-demon.html", "images/cinema-portfolio/sex-demon-7.png", "Sex Demon", "Short, 2019"));
portfolioItems.push(new CinemaPortfolioItem("portfolio-pages/cinema/sleep.html", "images/cinema-portfolio/sleep.jpg", "Sleep", "Short, 2019"));

FWAPI.AppendElement(portfolioPage, cinemaPortfolioHeader);

for (let i = 0; i < portfolioItems.length; i++)
  FWAPI.AppendElement(cinemaPortfolio, portfolioItems[i].Get());

FWAPI.AppendElement(portfolioPage, cinemaPortfolio);
