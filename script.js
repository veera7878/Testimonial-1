const testimonials = [{
    name: "Alice Johnson",
    text: "This service has changed my life! The team is fantastic and the product is top-notch.",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
}, {
    name: "Mark Thompson",
    text: "Highly recommend to anyone looking for quality and reliability. Five stars!",
    img: "https://randomuser.me/api/portraits/men/44.jpg"
}, {
    name: "Sara Lee",
    text: "Customer support was amazing. They went above and beyond to help me out.",
    img: "https://randomuser.me/api/portraits/women/24.jpg"
}];

let index = 0;

const img = document.querySelector('.testimonial-img');
const text = document.querySelector('.testimonial-text');
const name = document.querySelector('.testimonial-name');

function showTestimonial(i) {
    const testimonial = testimonials[i];
    img.src = testimonial.img;
    text.textContent = testimonial.text;
    name.textContent = testimonial.name;
}

function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
}

function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}


showTestimonial(index);