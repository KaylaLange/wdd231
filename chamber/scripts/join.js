export function join() {
    const memberships = [
        {
            level: 'Non-Profit',
            cost: 'Free',
            benefits: [
                'Access to select community events',
                'Basic online training sessions and resources',
                'Mention in the organization\'s newsletter',
                'Discounted rates for specific non-profit events',
                'Access to free informational resources and support'
            ]
        },
        {
            level: 'Bronze',
            cost: '$100',
            benefits: [
                'Access to all community events and quarterly networking events',
                'Access to basic and intermediate training sessions',
                'Bronze-level feature on the home page and social media shoutouts',
                '10% discount on all events and workshops',
                'Free informational resources and priority support'
            ]
        },
        {
            level: 'Silver',
            cost: '$250',
            benefits: [
                'Priority access to all events, including annual conferences',
                'Access to all training sessions (basic, intermediate, and advanced)',
                'Silver-level feature on the home page, newsletter spotlights, and social media promotions',
                '20% discount on all events and workshops',
                'Priority support and access to an exclusive members-only forum'
            ]
        },
        {
            level: 'Gold',
            cost: '$500',
            benefits: [
                'VIP access to all events, exclusive invitations to high-profile events, and meet-and-greets with industry leaders',
                'Unlimited access to all training sessions and one-on-one coaching sessions',
                'Gold-level feature on the home page, premium newsletter spotlights, dedicated social media campaigns, and featured articles',
                '30% discount on all events and workshops, plus free attendance to select events',
                'Dedicated support manager, exclusive members-only forum, and comprehensive resource library'
            ]
        }
    ];

    displayMembershipTitles(memberships);
}

export async function displayMembershipTitles(memberships) {
    const membershipContainers = {
        'Non-Profit': document.getElementById('non-profit-container'),
        'Bronze': document.getElementById('bronze-container'),
        'Silver': document.getElementById('silver-container'),
        'Gold': document.getElementById('gold-container')
    };

    memberships.forEach(membership => {
       const card = document.createElement('div');
       card.classList.add('membership-card');
       card.innerHTML = `
            <h3>${membership.level}</h3>
            <button class="open-dialog">View Benefits</button>
        `;
        
        const dialog = document.createElement('dialog');
        dialog.innerHTML = `
            <h3>${membership.level}</h3>
            <p>Cost: ${membership.cost}</p>
            <ul>
                ${membership.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <button class="close-dialog">Close</button>
        `;

        card.querySelector('.open-dialog').addEventListener('click', () => {
            dialog.showModal();
            console.log(`Dialog for ${membership.level} opened.`);
        });
        dialog.querySelector('.close-dialog').addEventListener('click', () => {
            dialog.close();
            console.log(`Dialog for ${membership.level} closed.`);
        });

        membershipContainers[membership.level].appendChild(card);
        document.body.appendChild(dialog);
    });

    console.log('Membership titles displayed:', memberships.map(m => m.level).join(', '));
}

