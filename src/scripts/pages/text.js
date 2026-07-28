const textarea = document.querySelector("textarea");
const button = document.getElementById("playBtn");
let isSpeaking = false; // Fix #4: was incorrectly set to true, causing first click to show "Pause"
let intervalId = null;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value.trim();

  if (!text) {
    button.innerText = "▶ Synthesize";
    return;
  }

  if (!synth.speaking) {
    // Not currently speaking — start new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => {
      isSpeaking = false;
      button.innerText = "▶ Synthesize";
      // Fix #11: clear interval when speech ends naturally
      if (intervalId) {
        clearTimeout(intervalId);
        intervalId = null;
      }
    };
    synth.speak(utterance);
    isSpeaking = true;
    button.innerText = "⏸ Pause";
  } else if (synth.speaking && !synth.paused) {
    // Currently speaking — pause it
    synth.pause();
    isSpeaking = false;
    button.innerText = "▶ Resume";
  } else if (synth.paused) {
    // Paused — resume it
    synth.resume();
    isSpeaking = true;
    button.innerText = "⏸ Pause";
  }
};

button.addEventListener("click", textToSpeech);
