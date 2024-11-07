document.addEventListener("DOMContentLoaded", () => {
    fetchMemberData();

    // to fetch json data and display on page
    async function fetchMemberData() {
        try {
            const response = await fetch('data/members.json'); 
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displayMembers(members) {
        const membersContainer = document.getElementById('members');
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');
            memberDiv.innerHTML = `
            <h2>${member.business_name}</h2>
            <p>${member.address}</p>
            <p>${member.phone_number}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>`;

            membersContainer.appendChild(memberDiv);
        });
    }

    // grid and list button 
    const gridButton = document.querySelector('#grid');
    const listButton = document.querySelector('#list');
    const display = document.querySelector('members');

    const toggleView = (view) => {
        display.classList.remove('grid', 'list');
        display.classList.add(view);
    };

    toggleView('grid');

    gridButton.addEventListener('click', () => toggleView('grid'));
    listButton.addEventListener('click', () => toggleView('list'));

});