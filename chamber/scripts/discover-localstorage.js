export function setTimeStamp() {
    const now = new Date();
    localStorage.setItem('lastVisit', now.toISOString());
}

function displayVisitMessage() {
    const messageElement = document.querySelector('#localStorage p');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();

    console.log('Last Visit:', lastVisit);
    console.log('Current Time:', now.toISOString());

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        console.log('Last Visit Date:', lastVisitDate);
        console.log('Time Difference (ms):', timeDiff);
        console.log('Days Difference:', daysDiff);

        let message = '';

        if (daysDiff < 1) {
            message = 'Back so soon! Awesome!';
        } else if (daysDiff === 1) {
            message = 'You last visited 1 day ago.';
        } else if (daysDiff > 1) {
            message = `You last visited ${daysDiff} days ago.`;
        }

        messageElement.textContent = message;
    } else {
        messageElement.textContent = 'Welcome! Let us know if you have any questions.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayVisitMessage(); 
    setTimeStamp();        
});
