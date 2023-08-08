// Get references to all "Add to Cart" buttons with the class "add-to-cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Loop through each button and add a click event listener
addToCartButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    button.innerHTML = 'Added to Cart!';
    button.classList.add('added');

    setTimeout(function() {
      button.innerHTML = 'Add to Cart <i class="bx bx-cart"></i>';
      button.classList.remove('added');
    }, 3000);
  });
});

// Your existing code for the menu toggle
let menu = document.getElementById("menu");
let navbar = document.querySelector(".navmenu");

menu.onclick = function(){
  menu.classList.toggle("openmenu");
  navbar.classList.toggle('open');
};
