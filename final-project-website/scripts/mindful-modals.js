const breathingModal = document.getElementById('breathing-modal');
const gratefulModal = document.getElementById('grateful-modal');

const breathingCard = document.getElementById('breathing-exercise-card');
const gratefulCard = document.getElementById('grateful-vibes-card');
const closeBreathing = document.getElementById('close-breathing');
const closeGrateful = document.getElementById('close-grateful');
const startBreathing = document.getElementById('start-breathing');
const endBreathing = document.getElementById('end-breathing');
const startGrateful = document.getElementById('start-grateful');
const endGrateful = document.getElementById('end-grateful');

export function setupModals() {
    breathingCard.onclick = () => breathingModal.style.display = "block";
    gratefulCard.onclick = () => gratefulModal.style.display = "block";

    closeBreathing.onclick = () => breathingModal.style.display = 'none';
    closeGrateful.onclick = () => gratefulModal.style.display = 'none';

    window.onclick = (event) => {
        if (event.target == breathingModal) breathingModal.style.display = 'none';
        if (event.target == gratefulModal) gratefulModal.style.display = 'none';
    };
}

let breathingTimer;
export function setupBreathingExercise() {
    startBreathing.onclick = () => {
        startBreathing.classList.add('hidden');
        endBreathing.classList.remove('hidden');
        let timeLeft = 60;
        const timerElement = document.getElementById('breathing-timer');
        timerElement.textContent = timeLeft;
    
        breathingTimer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(breathingTimer);
                endBreathing.click();
            }
        }, 1000);
    };
    
    endBreathing.onclick = () => {
        clearInterval(breathingTimer);
        breathingModal.style.display = 'none';
        startBreathing.classList.remove('hidden');
        endBreathing.classList.add('hidden');
    };
}

export function setupGratefulExercise() {
    startGrateful.onclick = () => {
        startGrateful.classList.add('hidden');
        endGrateful.classList.remove('hidden');
        //add timer or prompts here
    };
    
    endGrateful.onclick = () => {
        gratefulModal.style.display = 'none';
        startGrateful.classList.remove('hidden');
        endGrateful.classList.add('hidden');
    };
}
