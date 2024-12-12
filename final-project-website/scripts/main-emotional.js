import { initHamburger } from "./hamburger.js";
import { updateDates } from "./getdate.js";
import { setupModals, setupBreathingExercise, setupGratefulExercise } from "./mindful-modals.js";

document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    updateDates();
    setupModals();
    setupBreathingExercise();
    setupGratefulExercise();
});