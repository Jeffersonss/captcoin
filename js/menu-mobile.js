const btnMenu = document.querySelector(".menu button")
console.log(btnMenu);
const menu = document.querySelector(".lista__menu")
console.log(menu)

btnMenu.addEventListener("click",(e)=>{
   e.preventDefault()
   menu.classList.toggle("show")
})