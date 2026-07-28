export function speakText(title, meaning) {
    if(title && meaning && meaning !== "No definition found.") {
        const synth = window.speechSynthesis;
        synth.cancel(); // Cancel any ongoing speech
        const utterance = new SpeechSynthesisUtterance(`${title}. ${meaning}`);
        synth.speak(utterance);
    }
}
