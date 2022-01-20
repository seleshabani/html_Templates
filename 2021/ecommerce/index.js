let menuToggler = document.querySelector("[data-menu-toggler]");
let menuHandler = document.querySelector("[data-menu-handler]");

menuToggler.addEventListener("click",()=>{

   let props = getDisplayProps(menuHandler);
   if(props === "flex") {
    menuHandler.style.display = "none";
   }else {
    menuHandler.style.display = "flex";
    menuHandler.classList.add('animate-menu');
   }
})
/**
 * Récupère la proprieté display d'un élèment html
 * @param {*} el 
 */
function getDisplayProps(el) {
   let displayProp = getComputedStyle(el,null).display;
   return displayProp;
}