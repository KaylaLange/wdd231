export function formatTimeStamp(timestamp) {
    const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }

//Grab the entire url for this page including the attached GET values
const currentUrl = window.location.href;

//Divide the url into two halves
const everything = currentUrl.split('?');

let formData = everything[1]?.split('&');

function show(cup) {
    let result = '';
    if (formData) {
        formData.forEach((element) => {
            if(element.startsWith(cup)) {
                result = decodeURIComponent(element.split('=')[1]);
                result = result.replace(/\+/g, ' ');
                if (cup === 'membership-level') {
                    result = result.toUpperCase();
                }
                if (cup === 'timestamp') {
                    result = formatTimeStamp(result);
                }
            }
        });
    }
    return(result);
} // end show

document.addEventListener('DOMContentLoaded', function() {
    const showInfo = document.querySelector('#results')
    if (showInfo) {
        showInfo.innerHTML = `
        <h2>Form Submission Details</h2>
        <p>${show('first-name')} ${show('last-name')}, ${show('organization-title')}</p>
        <p>Applying for ${show('membership-level')} membership for ${show('business-name')}</p>
        <p>Your Phone: ${show('phone')}</p>
        <p>Your Email: <a href>${show('email')}</a></p>
        <p>Submitted On: ${show('timestamp')}</p>
        `;
    } else {
        console.error('Element with ID "results" not found.');
    }
});
