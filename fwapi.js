
console.log("FWAPI loaded");

// Collection of API methods for accessing the HTML DOM
export let FWAPI = {

  // Tracks currently loaded page for proper rendering in navigation links
  ActivePageInt: 0,

  // Creates HTML DOM element
  CreateElement(tag, innerHTML, style)
  {
    let newElement = document.createElement(tag);

    newElement.classList.add(style);
    newElement.innerHTML = innerHTML;

    return newElement;
  },

  // Appends HTML DOM element to parent element
  AppendElement(parent, element)
  {
    // Check if string or element object
    let parentElem;
    if (typeof parent === "string")
    {
      parentElem = document.getElementById(parent);
    }
    else
    {
      parentElem = parent;
    }

    parentElem.appendChild(element);
  },

  CreateImageElement(src, alt, style, height)
  {
    let newImageElem = document.createElement("img");

    newImageElem.classList.add(style);
    newImageElem.src = src;
    newImageElem.alt = alt;
    newImageElem.style = `height: ${height}`;

    return newImageElem;
  },

  // Creates an HTML DOM element with an href URL link
  CreateLinkElement(href, innerHTML, style)
  {
    let navLinkItemElement = document.createElement("a");

    navLinkItemElement.classList.add(style);
    navLinkItemElement.href = href;
    navLinkItemElement.innerHTML = innerHTML;

    return navLinkItemElement;
  },

  // Appends preset navigation links to desired element
  AppendNavlinks(target)
  {
    // Check if string or element object
    let navLinkTargetElem
    if (typeof target === "string")
    {
      navLinkTargetElem = document.getElementById(target);
    }
    else
    {
      navLinkTargetElem = target;
    }

    // Create array for navigation link items
    let navLinkItems = [
      this.CreateLinkElement("/index.html", "Cinematography", "navlink-item"),
      this.CreateLinkElement("/color.html", "Color Grading", "navlink-item"),
      this.CreateLinkElement("/about.html", "About", "navlink-item")
    ];

    // Iterate through navigation link items
    for (let i = 0; i < navLinkItems.length; i++)
    {
      // Reset styling to "navlink-item"
      navLinkItems[i].classList.remove("navlink-item-active");
      navLinkItems[i].classList.add("navlink-item");

      // Check if active page, then assign "navlink-item-active" styling
      if (this.ActivePageInt === i)
      {
        navLinkItems[i].classList.add("navlink-item-active");
      }

      // Append child to the target parent element
      navLinkTargetElem.appendChild(navLinkItems[i]);
    }
  }
}

export class CinemaPortfolioItem
{
  // All parameters should be strings
  constructor(link, image, title, desc) {
    // Initialize members as DOM elements
    this.div = FWAPI.CreateElement("div", "", "cinema-portfolio-item");
    this.link = FWAPI.CreateLinkElement(link, "", "a");
    this.image = FWAPI.CreateImageElement(image, title, "cinema-portfolio-item-image", "300px");
    this.header = FWAPI.CreateElement("h2", title, "cpi-centered-text");
    this.desc = FWAPI.CreateElement("p", desc, "p");

    // Append image to link
    FWAPI.AppendElement(this.link, this.image);

    // Append all others to div
    FWAPI.AppendElement(this.div, this.link);
    FWAPI.AppendElement(this.div, this.header);
    FWAPI.AppendElement(this.div, this.desc);
  }

  Get() { return this.div; }

  #div;
  #link;
  #image;
  #header;
  #desc;
}

export class EmbeddedVimeo
{
  // All parameters must be strings
  constructor(embedSrc)
  {
    let iframeElem = FWAPI.CreateElement("iframe", "", "video-reel-content");
    iframeElem.classList.add("video-reel-content");
    iframeElem.src = embedSrc;
    iframeElem.allow = "autoplay; fullscreen; picture-in-picture";
    iframeElem.style = "border:none;"

    this.videoDivContainer = FWAPI.CreateElement("div", "", "video-reel");
    FWAPI.AppendElement(this.videoDivContainer, iframeElem);

    this.scriptElem = FWAPI.CreateElement("script", "", "script");
    this.scriptElem.src = "https://player.vimeo.com/api/player.js"
  }

  AppendTo(parent)
  {
    let parentElem;
    if (typeof parent === "string")
      parentElem = document.getElementById(parent);
    else
      parentElem = parent;

    FWAPI.AppendElement(parentElem, this.videoDivContainer);
    FWAPI.AppendElement(parentElem, this.scriptElem);
  }

  #scriptElem;
  #videoDivContainer;
}
