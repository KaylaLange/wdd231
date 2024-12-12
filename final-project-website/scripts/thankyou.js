export function show(cup) {
    const currentUrl = window.location.href;
    const everything = currentUrl.split('?');
    let formData = everything[1]?.split('&');
    let result = '';
    if (formData) {
        formData.forEach((element) => {
            if(element.startsWith(cup)) {
                result = decodeURIComponent(element.split('=')[1]);
                result = result.replace(/\+/g, ' ');
                if (cup === 'first-name' || cup === 'last-name') {
                    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
                }
            }
        });
    }
    return(result);
}

document.addEventListener('DOMContentLoaded', function() {
    const showInfo = document.querySelector('#results')
    if (showInfo) {
        showInfo.innerHTML = `
        <h3>Your Wellness Journey Begins Now</h3>
        <p>${show('first-name')} ${show('last-name')}</p>
        <p><a href>${show('email')}</a></p>
        `;
    } else {
        console.error('Element with ID "results" not found.');
    }
});
