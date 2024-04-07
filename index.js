let currentCardIndex = 0;
const flashcards = document.querySelectorAll('.flashcard');

function toggleCard() {
    const term = flashcards[currentCardIndex].querySelector('.term');
    const definition = flashcards[currentCardIndex].querySelector('.definition');

    term.classList.toggle('hidden');
    definition.classList.toggle('hidden');

    flashcards[currentCardIndex].classList.toggle('flipped'); // Toggle rotation
}

function nextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

function updateCard() {
    for (let i = 0; i < flashcards.length; i++) {
        if (i === currentCardIndex) {
            flashcards[i].style.display = 'block';
        } else {
            flashcards[i].style.display = 'none';
        }
    }
}
