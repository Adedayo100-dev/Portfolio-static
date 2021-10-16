
// SideNav Toggle
var sidenav = document.getElementById("sidenav");
var navbarTogglerButton = document.getElementById("navbartoggler");
function toggleNav() {
    sidenav.classList.toggle("nav-open");
   navbarTogglerButton.classList.toggle("navbar-toggler-open");
}

// Hover Button Script
var btnAnimate = document.querySelectorAll('.btn-animate');
//Create for loop for btn-cv too
for (let i = 0; i < btnAnimate.length; i++) {
    btnAnimate[i].onmousemove = function(e){
    const x = e.pageX - btnAnimate[i].offsetLeft;
    const y = e.pageY - btnAnimate[i].offsetTop;

    btnAnimate[i].style.setProperty('--x', x + 'px');
    btnAnimate[i].style.setProperty('--y', y + 'px');
    }
}

// Accordion Toggle
// var accordionHead = document.querySelectorAll('.accordion-head');
// var accordionBody = document.querySelectorAll('.accordion-body');
// var accordionFlush = document.querySelectorAll('.accordion-flush');
 
// for (let i = 0; i < accordionHead.length; i++) {
//     accordionHead[i].onclick = function(e) {
//         accordionBody[i].classList.toggle("accordion-open"); 
//         accordionFlush[i].classList.toggle("accordion-flush-open");
//     }  
// }


//Theme Toggle

document.getElementById("themeCheck").addEventListener("change", function() {
  body.classList.toggle("light-theme");
});
//alert("isChecked");

const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const testimonialCard = testimonials.getElementsByClassName('testimonial-card');
const lengthTestimonialCard = testimonialCard.length;
const testArrow = document.querySelector('.test-arrows-2');
const nextBtn = testArrow.querySelector('.test-next');
const prevBtn = testArrow.querySelector('.test-prev');
const itemWidth = testimonials.querySelector('.testimonial-card').offsetWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        // The scroll position is not at the beginning of last item
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else
        // Last item reached. Go back to first item by setting scroll position to 0
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem() {
    if(scroller.scrollLeft != 0)
        // The scroll position is not at the beginning of first item
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
        // This is the first item. Go to last item by setting scroll position to scroller width
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}
document.querySelector('.test-counter').innerHTML = "1" + "/"  + lengthTestimonialCard;
