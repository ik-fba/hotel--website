const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    button.innerHTML = 'Added to Cart!';
    button.classList.add('added');

    setTimeout(() => {
      button.innerHTML = 'Add to Cart <i class="bx bx-cart"></i>';
      button.classList.remove('added');
    }, 3000);
  });
});

let menu = document.getElementById("menu");
let navbar = document.querySelector(".navmenu");

menu.onclick = function(){
  menu.classList.toggle("openmenu");
  navbar.classList.toggle('open');
};