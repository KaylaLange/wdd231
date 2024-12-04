import { initHamburger } from "./hamburger.js";
import { updateDates } from "./getdate.js";
import { setTimeStamp } from "./discover-localstorage.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    updateDates();
    setTimeStamp();
});