
// Codewith_Kachi
const arrow1 = document.getElementsById("arrowOne");
const openPopUp = document.querySelector(".container");
document.getElementById("popspan").style.opacity = "1.0";
document.getElementById("skill-red").style.opacity = "0.5";
const spanImage = document.getElementById("pop-logo");
function openPopUp() {
    
    
    // const spanText = document.getElementById('#pop-logo-text')
    
    if (arrow1.Id="arrowOne") {
        spanImage.setAttribute("src", "html-logo.png");
        openPopUp.classList.add("open-popUp");
    
    } else {
        console.log(arrow1.id)
    }
    

}
arrow1.addEventListener('click',openPopUp)
    

function closePopUp() {
    const closePopUp = document.querySelector(".container");
    closePopUp.classList.remove("open-popUp")
    // document.getElementById("popspan").style.opacity = "1.0";
    // const bodyblur = document.getElementById("body")
    document.getElementById("skill-red").style.opacity = "1.0";
    
}
// window.onclick = function (e) {
//     lf(e.target.className === "open-popUp"){
//         e.target.style.display="none"
//     }
// }