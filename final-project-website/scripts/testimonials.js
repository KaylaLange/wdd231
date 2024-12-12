export function initializeCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showItems(index) {
        items.forEach((item, i) => {
            item.classList.remove('show', 'hide-left', 'enter-left');
            item.style.opacity = '0';
        });

        const previousItem = (index - 1 + items.length) % items.length;

        if (items[previousItem]) {
            items[previousItem].classList.add('hide-left');
        }

        if (items[index]) {
            items[index].classList.add('enter-left');
            setTimeout(() => {
                items[index].classList.add('show');
                items[index].style.opacity = '1';
            }, 10);
        }
    }

    function nextItem() {
        currentItem = (currentItem + 1) % items.length;
        showItems(currentItem);
    }

    function prevItem() {
        currentItem = (currentItem - 1 + items.length) % items.length;
        showItems(currentItem);
    }

    showItems(currentItem);

    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    if (nextButton) {
        nextButton.addEventListener('click', nextItem);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevItem);
    }

    setInterval(nextItem, 11000);

    window.addEventListener('resize', () => showItems(currentItem));
}

export function loadTestimonials() {
    const carousel = document.getElementById('testimonial-carousel');

    fetch('data/testimonials.json')
        .then(response => response.json())
        .then(testimonials => {
            testimonials.forEach(testimonial => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';

                carouselItem.innerHTML = `
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <h3>${testimonial.name} - <em>${testimonial.location}</em></h3>
                    <p>"${testimonial.quote}"</p>
                `;
                carousel.appendChild(carouselItem);
            });

            initializeCarousel();
        })
        .catch(error => console.error('Error loading testimonials:', error));
}

