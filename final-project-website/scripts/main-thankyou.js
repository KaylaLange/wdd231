import { initHamburger } from "./hamburger.js";
import { updateDates } from "./getdate.js";
import { show } from "./thankyou.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    updateDates();
    show('timestamp');
});