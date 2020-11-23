const readButt = document.querySelector('.read_butt');
const listenButt = document.querySelector('.listen_butt');
const sentenceDisplay = document.querySelector('.sentence_display');

function speak(message) {
  var msg = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(msg);
}

readButt.addEventListener('click', async () => {
  const raw = await fetch('/sentence');
  const data = await raw.json();
  sentenceDisplay.innerText = data.sentence;
});
listenButt.addEventListener('click', async () => {
  const raw = await fetch('/sentence');
  const data = await raw.json();
  console.log(data);
  sentenceDisplay.innerText = data.sentence;
  speak(data.sentence);
});
