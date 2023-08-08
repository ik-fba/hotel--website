let menu = document.getElementById("menu");
let navbar = document.querySelector(".navmenu");

menu.onclick = function(){
  menu.classList.toggle("openmenu")
  navbar.classList.toggle('open');
}