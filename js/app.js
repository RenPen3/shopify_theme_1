const ham = document.getElementById('hamburger-menu');
const subMenu = document.getElementById('sub-menu');
const x = document.getElementById('x-btn');
const navLinks = document.querySelectorAll('.nav-link');
// const dropDowns = document.querySelectorAll('.nav-drop');

// navLinks.forEach(navLink => {
//   navLink.addEventListener('click', () => {
//     const dropDowns = document.querySelector('.nav-drop');
//     dropDowns.classList.toggle('down');

//     console.log(dropDowns);

//   })
// });




ham.addEventListener("click", () => {
  subMenu.classList.toggle('show');
  console.log(x);
});

x.addEventListener("click", () => {
  subMenu.classList.remove('show')
  console.log("Working");
});

