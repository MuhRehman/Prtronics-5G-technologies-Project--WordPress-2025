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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}














// -----------------------slider -----
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 1;

function changeSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
  current = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => changeSlide(index));
});

// Auto slide every 4 seconds
setInterval(() => {
  let next = (current + 1) % slides.length;
  changeSlide(next);
}, 4000);

// -----------------------slider -----