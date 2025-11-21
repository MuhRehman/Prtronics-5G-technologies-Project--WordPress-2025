let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 112000); 
}



// slider------------
const tcardItems = document.querySelectorAll(".tcard-item");
const tcardDots = document.querySelectorAll(".tcard-dot");
let tcardIndex = 0;

// Detect if on mobile
function isMobile() {
  return window.innerWidth <= 600;
}

// Set active slide + dot
function tcardSetActive(index) {

   if (isMobile()) return; // Disable active highlighting logic on mobile

  tcardItems.forEach(item => item.classList.remove("tcard-active"));
  tcardDots.forEach(dot => dot.classList.remove("tcard-dot-active"));

  tcardItems[index].classList.add("tcard-active");
  tcardDots[index].classList.add("tcard-dot-active");

  tcardIndex = index;
}

// Click event for dots
tcardDots.forEach((dot, index) => {
  dot.addEventListener("click", () => tcardSetActive(index));
});

// Auto slide every 4 seconds
setInterval(() => {
    if (isMobile()) return; // skip for mobile
  let next = (tcardIndex + 1) % tcardItems.length;
  tcardSetActive(next);
}, 4000);




// slider------------


