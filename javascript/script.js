const phrases = ["Front-end", "Developer"];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = phrases[phraseIndex];
let h1 = document.querySelector('.typewriter');

function typeWriter() {
  if (phraseIndex < phrases.length) {
    if (letterIndex < currentPhrase.length) {
      h1.textContent += currentPhrase.charAt(letterIndex);
      letterIndex++;
    } else {
      h1.textContent += "\n";
      phraseIndex++;
      currentPhrase = phrases[phraseIndex];
      letterIndex = 0;
    }
    setTimeout(typeWriter, 100);
  }
}
typeWriter();