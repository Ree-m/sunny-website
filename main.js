const menu=document.querySelector('.menu');
const menuItems = document.querySelector('.menu-item');
const hamburger=document.querySelector('.hamburger')
const xMark=document.querySelector('.x-mark');
const menuIcon= document.querySelector('.menu-icon');

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      xMark.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("show-menu");
      xMark.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);

  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
  