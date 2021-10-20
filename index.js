const createNavLinkElement = (href, innerHTML, style) => {
  let navLinkItemElement = document.createElement("a");

  navLinkItemElement.classList.add(style);
  navLinkItemElement.href = href;
  navLinkItemElement.innerHTML = innerHTML;

  return navLinkItemElement;
}

let navLinkItems = [
  createNavLinkElement("index.html", "Cinematography", "navlink-item-active"),
  createNavLinkElement("color.html", "Color Grading", "navlink-item"),
  createNavLinkElement("about.html", "About", "navlink-item")
];

let navlinkDivElem = document.getElementById("navlinks");

for (let i = 0; i < 3; i++)
{
  navlinkDivElem.appendChild(navLinkItems[i]);
}
