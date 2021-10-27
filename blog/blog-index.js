import { FWAPI } from "../fwapi.js"
import { CinemaPortfolioItem, EmbeddedVimeo } from "../fwapi.js";

console.log("blog-index.js loaded");

FWAPI.ActivePageInt = 3;

let navLinksContainer = FWAPI.CreateElement("div", "", "div");
let navLinks = FWAPI.CreateElement("div", "", "navlinks");

FWAPI.AppendNavlinks(navLinks);
FWAPI.AppendElement(navLinksContainer, navLinks);
FWAPI.AppendElement("page", navLinksContainer);

const blogIndexPage = FWAPI.CreateElement("div", "", "blog-index-page");
FWAPI.AppendElement("page", blogIndexPage);

const blogIndexHeader = FWAPI.CreateElement("h1", "BLOG POSTS", "blog-index-header");
const blogIndexBody = FWAPI.CreateElement("div", "", "blog-index-body");
FWAPI.AppendElement(blogIndexBody, blogIndexHeader);

let blogIndexBodyItems = [
  new CinemaPortfolioItem("testblogpost.html", "../images/Logo_2020.png", "Test Post", "A test post")
];

for (let i = 0; i < blogIndexBodyItems.length; i++)
  FWAPI.AppendElement(blogIndexBody, blogIndexBodyItems[i].Get());

FWAPI.AppendElement(blogIndexPage, blogIndexBody);
