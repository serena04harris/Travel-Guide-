const testimonials = [
    "Wonderlust made planning my vacation so easy and fun!",
    "I had the best time of my life, all thanks to Wonderlust!",
    "Their personalized approach is unbeatable. Highly recommend!",
    "Thanks to Wonderlust, my dream trip became a reality!"
];

let index = 0;

function changeTestimonial() {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonial").textContent = testimonials[index];
}
