export function setTimeStamp() {
    const form = document.querySelector('.join-form');
    const timeStampInput = document.getElementById('timestamp');

    if (form && timeStampInput) {
        form.addEventListener('submit', function() {
            const now = new Date();
            timeStampInput.value = now.toISOString();
        });
    } else {
        console.error('Form or timestamp input not found.');
    }
}
document.addEventListener('DOMContentLoaded', setTimeStamp);