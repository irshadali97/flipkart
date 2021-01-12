// function left() {
//     const array = Array.from(document.querySelectorAll(".slide"))  ;
//     const button = document.querySelector(".rightBt")
//     console.log(array)
//     for(let i = 0 ; i<array.length ; i++) {
//         button.addEventListener("click" ,function() {
        
//         })
//     }
    
// }
// left()

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle") ;
    var menu = document.querySelector(".menu") ;
    menuToggle.classList.toggle("active") ;
    menu.classList.toggle("active") ;
}
