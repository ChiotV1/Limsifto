const messages = [
    "Estaf segufo?😿",
    "Muymuy segufo?😿",
    "😿😿😿",
    "Amofi pofavof😭",
    "Piensalo una vef maf😭",
    "Si dices qno estare mui mui trifte😿",
    "😿😿😿😿😿😿😿😿",
    "Voi a lloraf",
    "Si eso quieref, dejare de preguntaf",
    "ME VALE AHORA DI QUE SI 😾😾😾"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}