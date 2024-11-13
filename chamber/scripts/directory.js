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
            const memberItemDiv = document.createElement('div');
            memberItemDiv.classList.add('member-item');

            memberItemDiv.innerHTML = `
            <img src="${member.business_image}" alt="${member.business_name}" class="business-image" height=${member['image-height']}" loading="lazy">
            <div class="member-name">${member.business_name}</div>
            <div class="member-address">${member.address}</div>
            <div class="member-phone">${member.phone_number}</div>
            <div class="member-website"><a href="${member.website}" target"_blank">${member.website}</a></div>`;
    
            membersContainer.appendChild(memberItemDiv);
        });
    }

    // grid and list button 
    const gridButton = document.querySelector('#grid');
    const listButton = document.querySelector('#list');
    const display = document.querySelector('#members');

    const toggleView = (view) => {
        display.classList.remove('grid', 'list');
        display.classList.add(view);

        if (view === 'grid') {
            gridButton.classList.add('active');
            listButton.classList.remove('active');
        } else {
            listButton.classList.add('active');
            gridButton.classList.remove('active');
        }
    };

    toggleView('grid');

    gridButton.addEventListener('click', () => toggleView('grid'));
    listButton.addEventListener('click', () => toggleView('list'));

});

 // hamburger button 
 const hamburgerElement = document.querySelector('#hambutton');
 const navElement = document.querySelector('#animateme');

 hamburgerElement.addEventListener('click', () => {
     navElement.classList.toggle('open');
     hamburgerElement.classList.toggle('open'); 
 });
