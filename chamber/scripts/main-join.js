import { initHamburger } from "./hamburger.js";
import { join } from "./join.js";
import { updateDates } from "./getdate.js";
import { setTimeStamp } from "./timestamp.js";
import { animateMemberCards } from "./animate-members.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    join();
    updateDates();
    setTimeStamp();
    animateMemberCards();
});