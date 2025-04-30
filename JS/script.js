let startLocation = location.href.slice(0, location.href.search("index.html"));
startLocation += "index.html";
const anchors = new Array("#start","#about","#biomes","#bosses","#dictionary","#credits");
const menuButtons = document.querySelectorAll(".menu-button");
const biomeMenu = document.querySelectorAll(".biome-menu");

function showBiome() {
  this.nextSibling.nextSibling.style.height = "500px";
  this.nextSibling.nextSibling.style.boxShadow = "2px 2px 25px 1px #f9cf83";
  this.removeEventListener("click", showBiome);
  this.addEventListener("click", hideBiome);
  this.children[1].firstChild.style.transform = "rotate(180deg)";
}

function hideBiome() {
  this.nextSibling.nextSibling.style.height = "0";
  this.nextSibling.nextSibling.style.boxShadow = "none";
  this.removeEventListener("click", hideBiome);
  this.addEventListener("click", showBiome);
  this.children[1].firstChild.style.transform = "rotate(0deg)";
}

if(location.href != startLocation) {
  location.href = startLocation;
}

for (let i = 0; i < menuButtons.length ; i++) {
  menuButtons[i].addEventListener("click", () => {
    location.href = anchors[i];
  });
}

document.querySelector(".continue").addEventListener("click", () => {
  location.href = anchors[1];
});

for (let i = 0 ; i < biomeMenu.length ; i++) {
  biomeMenu[i].addEventListener("click", showBiome);
}

