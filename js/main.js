
let nav = document.getElementById("nav-menu");
let navBarToggle = document.getElementById("nav-toggle");

const openMenu = () =>{
  navBarToggle.classList.toggle('active');
  nav.classList.toggle("active");
}

navBarToggle.addEventListener('click', openMenu);

//lees minder/ lees meer functie op de thema pagina
const readMore = (gridItemClass) =>  {
  let dots = document.getElementById(gridItemClass).querySelector(".dots");
  let moreText = document.getElementById(gridItemClass).querySelector(".readmore");
  let btnText = document.getElementById(gridItemClass).querySelector(".readmore-btn");

  if (dots.style.display === "none") {
     dots.style.display = "inline";
     btnText.innerHTML = "Lees meer";
     moreText.style.display = "none";
   }
   else {
     dots.style.display = "none";
     btnText.innerHTML = "Lees minder";
     moreText.style.display ="inline";
   }
}
