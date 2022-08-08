const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');
const close = document.querySelector('.close-modal');
for (let card of cards) {
    card.addEventListener('click', () => { 
        const videoId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://youtube.com/embed/${videoId}`;
    });

    close.addEventListener('click', () => { 
        modalOverlay.classList.remove('active');
        modalOverlay.querySelector('iframe').src = ""
    })
}

