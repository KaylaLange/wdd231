import { initHamburger } from "./hamburger.js";
import { fetchMemberData } from "./members.js";
import { initweather } from "./weather.js";
import { updateDates } from "./getdate.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    fetchMemberData();
    initweather();
    updateDates();
});