import { initializeCarousel, loadTestimonials } from "./testimonials.js";
import { initHamburger } from "./hamburger.js";
import { updateDates } from "./getdate.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    updateDates();
    initializeCarousel();
    loadTestimonials();
});