const current = document.querySelector("#current-img")
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.5

imgs.forEach(img => img.addEventListener("click",imgClick))
imgs[0].style.opacity = opacity;

function imgClick(e){
//Change back the opacity
 imgs.forEach(img => (img.style.opacity = 1))
//change img source
  current.src = e.target.src;
//change opacity
e.target.style.opacity = opacity;
// Add fadeIn class
current.classList.add("change")
//Set timeout to remove the class
setTimeout(() => current.classList.remove("change"),500);

}
