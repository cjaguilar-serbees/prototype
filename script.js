function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}


