document.addEventListener("DOMContentLoaded", () => {
    fetchMemberData();
});

async function fetchMemberData() {
    try {
        const response = await fetch('../data/members.json');
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