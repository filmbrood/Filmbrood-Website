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
FWAPI.AppendElement(blogIndexPage, blogIndexHeader);
const blogIndexBody = FWAPI.CreateElement("div", "", "blog-index-body");

class BlogIndexBodyItem
{
  constructor(date, link, image, title, desc)
  {
    // Initialize members as DOM elements
    this.div = FWAPI.CreateElement("div", "", "blog-index-body-item");
    this.date = FWAPI.CreateElement("p", date, "p");
    this.link = FWAPI.CreateLinkElement(link, "", "a");
    this.image = FWAPI.CreateImageElement(image, title, "blog-index-body-item-image", "");
    this.header = FWAPI.CreateElement("h2", title, "h2");
    this.desc = FWAPI.CreateElement("p", desc, "p");

    // Append image to link
    FWAPI.AppendElement(this.link, this.image);

    // Append all others to div
    FWAPI.AppendElement(this.div, this.date);
    FWAPI.AppendElement(this.div, this.link);
    FWAPI.AppendElement(this.div, this.header);
    FWAPI.AppendElement(this.div, this.desc);
  }

  Get()
  {
    return this.div;
  }

  #date;
  #div;
  #link;
  #image;
  #header;
  #desc;
}

let blogIndexBodyItems = [
  new BlogIndexBodyItem("11.02.2021", "./posts/110221-sleep-retrospective", "https://i.ibb.co/N70tsdY/DSC0216.jpg", "Sleeping In", "A Retrospective on Lensing My First Short Film")
];

for (let i = 0; i < blogIndexBodyItems.length; i++)
  FWAPI.AppendElement(blogIndexBody, blogIndexBodyItems[i].Get());

FWAPI.AppendElement(blogIndexPage, blogIndexBody);
