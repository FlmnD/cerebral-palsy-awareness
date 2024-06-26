let currentCardIndex = 0;
const flashcard = document.querySelector('.flashcard');
const term = flashcard.querySelector('.term');
const definition = flashcard.querySelector('.definition');
const counter = document.querySelector('.counter');


const terms = [
    ["Who Discovered Cerebral Palsy?", "Dr. William John Little was the first person to define and seriously study cerebral palsy."],
    ["How Many People Have Cerebral Palsy?", "Around 17 milion people have cerebral palsy."],
    ["Will I get Cerebral Palsy?", "You cannot get cerebral palsy as an adult."],
    ["What is the average lifespan for people with cerebral palsy?", "30-70 Years"],
    ["Is there a cure?", "There currently is not a cure for cerbral palsy; however, therapies are used to lower the effects of the symptoms."]
];

counter.innerHTML = currentCardIndex + 1 + "/" + terms.length;

term.getElementsByTagName("p")[0].innerHTML = terms[0][0];
definition.getElementsByTagName("p")[0].innerHTML = terms[0][1];

function toggleCard() {

    term.classList.toggle('hidden');
    definition.classList.toggle('hidden');

    flashcard.classList.toggle('flipped');

}

function nextCard() {
    if (currentCardIndex < terms.length - 1) {
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

    counter.innerHTML = currentCardIndex + 1 + "/" + terms.length;
    term.getElementsByTagName("p")[0].innerHTML = terms[currentCardIndex][0]
    definition.getElementsByTagName("p")[0].innerHTML = terms[currentCardIndex][1]

}
