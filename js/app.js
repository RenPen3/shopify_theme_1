const ham = document.getElementById('hamburger-menu');
const subMenu = document.getElementById('sub-menu');
const x = document.getElementById('x-btn');



ham.addEventListener("click", () => {
  subMenu.classList.toggle('show');
  console.log(x);
});

x.addEventListener("click", () => {
  subMenu.classList.remove('show')
  console.log("Working");
});

