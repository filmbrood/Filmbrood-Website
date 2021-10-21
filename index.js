import { FWAPI } from "./fwapi.js";
import { CinemaPortfolioItem } from "./fwapi.js";

console.log("index.js loaded");
FWAPI.ActivePageInt = 0;
FWAPI.AppendNavlinks("navlinks");

let portfolioItems = [];
portfolioItems[0] = new CinemaPortfolioItem("portfolio-pages/cinema/getting-through.html", "images/cinema-portfolio/getting_through.jpg", "Getting Through", "Short, TBD");
portfolioItems[1] = new CinemaPortfolioItem("portfolio-pages/cinema/black-card.html", "images/cinema-portfolio/black-card.jpg", "Black Card", "Feature, TBD");
portfolioItems[2] = new CinemaPortfolioItem("portfolio-pages/cinema/sheenas-secret.html", "images/cinema-portfolio/sheenas_secret.jpg", "Sheena's Secret", "Short, TBD");
portfolioItems[3] = new CinemaPortfolioItem("portfolio-pages/cinema/halloween-special.html", "images/cinema-portfolio/halloween-special.png", "Three and a Half Walls Halloween Special", "Short, 2020");
portfolioItems[4] = new CinemaPortfolioItem("portfolio-pages/cinema/sex-demon.html", "images/cinema-portfolio/sex-demon-7.png", "Sex Demon", "Short, 2019");
portfolioItems[5] = new CinemaPortfolioItem("portfolio-pages/cinema/sleep.html", "images/cinema-portfolio/sleep.jpg", "Sleep", "Short, 2019");

for (let i = 0; i < portfolioItems.length; i++)
  FWAPI.AppendElement("cinema-portfolio", portfolioItems[i].Get());
