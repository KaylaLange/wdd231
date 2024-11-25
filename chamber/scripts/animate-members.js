export function animateMemberCards() {
    const cards = document.querySelectorAll('.membership-container');

    cards.forEach(card => card.classList.add('loaded'));
}