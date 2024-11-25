import { initHamburger } from "./hamburger.js";
import { updateDates } from "./getdate.js";
import { formatTimeStamp } from "./thankyou.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    updateDates();
    formatTimeStamp();
});