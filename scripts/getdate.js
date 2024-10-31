const currentYearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear()
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModified = new Date(document.lastModified);
const formattedDateTime = lastModified.toLocaleString(`en-US`, {
    year: 'numeric', 
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});
lastModifiedElement.textContent = `Last Modified: ${formattedDateTime}`;