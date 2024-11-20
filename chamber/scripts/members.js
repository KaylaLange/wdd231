// to fetch json member data and display on page
export async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json'); 
        const data = await response.json();
        showSpotlightMembers(data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {
    const membersContainer = document.getElementById('members');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberItemDiv = document.createElement('div');
        memberItemDiv.classList.add('member-item');

        memberItemDiv.innerHTML = `
        <div class="member-name">${member.business_name}</div>
        <div class="membership-level">${member.membership}</div>
        <img src="${member.business_image}" alt="${member.business_name}" class="business-image" height=${member['image-height']}" loading="lazy">
        <div class="member-address">${member.address}</div>
        <div class="member-phone">${member.phone_number}</div>
        <div class="member-website"><a href="${member.website}" target"_blank">${member.website}</a></div>`;

        membersContainer.appendChild(memberItemDiv);
    });
}

function showSpotlightMembers(members) {
    const spotlightMembers = members.filter(member => member.membership === 'Silver Member' || member.membership === 'Gold Member');

    spotlightMembers.sort(() => 0.5 - Math.random());

    const selectedMembers = spotlightMembers.slice(0, 3);

    displayMembers(selectedMembers);
}