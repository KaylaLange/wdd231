function getOrdinalSuffix(order) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = order % 100;

    return order + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const all = document.querySelector('#all');
const idaho = document.querySelector('#idaho');
const nonus = document.querySelector('#nonus');
const ten = document.querySelector('#ten');
const childs = document.querySelector('#childs');
const childl = document.querySelector('#childl');
const old = document.querySelector('#old');

const getProphets = async (filter = 'all') => {
    let response = await fetch(url);
    let prophets = await response.json();
    prophets = prophets.prophets;

    switch (filter) {
        case 'idaho':
            prophets = prophets.filter((prophet) =>
            prophet.birthplace === 'Idaho');
            break;
        case 'nonus':
            prophets = prophets.filter((prophet) =>
            prophet.birthplace === 'England');
            break;
        case 'ten':
            prophets = prophets.filter((prophet) => prophet.length >= 15);
            break;
        case 'childs':
            prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
            break;
        case 'childl':
            prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
            break;
        case 'old':
            prophets = prophets.filter((prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95);
            break;
        default:
            break;
    }

    displayProphets(prophets);
};

const displayProphets = (prophets) => {
    cards.innerHTML = '';
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        card.classList.add('card');

        let fullName = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.innerHTML = `Date of birth: ${prophet.birthdate}`;
        birthplace.innerHTML = `Place of birth: ${prophet.birthplace}`;

        const ordinalOrder = getOrdinalSuffix(prophet.order);
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${ordinalOrder} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphets();

all.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('all');
    all.classList.add('active');
});

idaho.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('idaho');
    idaho.classList.add('active');
});

nonus.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('nonus');
    nonus.classList.add('active');
});

ten.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('ten');
    ten.classList.add('active');
});

childs.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('childs');
    childs.classList.add('active');
});

childl.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('childl');
    childl.classList.add('active');
});

old.addEventListener('click', () => {
    clearButtonClasses();
    getProphets('old');
    old.classList.add('active');
});

function getAgeAtDeathInYears(birthdate, deathdate) {
    let birth = new Date(birthdate);
    let death = new Date(deathdate);
    if (deathdate == null) {
        death = new Date();
    }
    return Math.floor((death-birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
    filterbuttons = document.querySelectorAll('button');
    filterbuttons.forEach(button => button.className='');
}
