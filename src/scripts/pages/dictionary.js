import { fetchDictionaryData } from '../services/dictionaryApi.js';
import { speakText } from '../utils/tts.js';

const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const phoneticEl = document.getElementById("phonetic");
const partOfSpeechEl = document.getElementById("part-of-speech");
const meaningEl = document.getElementById("meaning");
const exampleEl = document.getElementById("example");
const audioEl = document.getElementById("audio");
const audioGroupEl = document.getElementById("audio-group");
const historyListEl = document.getElementById("history-list");   // Fix #1: element now exists in HTML
const historyPanelEl = document.getElementById("history-panel"); // Fix #1: show panel once history exists
const speakBtn = document.getElementById("speak-btn");

let searchHistory = [];

async function handleSearch(word) {
  if (!word.trim()) return;
  try {
    // Show loading state
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerHTML = `<p>Searching the meaning of <strong>"${word}"</strong>...</p>`;
    
    const result = await fetchDictionaryData(word);

    if (result.title) {
      // Word not found
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      if (phoneticEl) phoneticEl.innerText = '';
      if (partOfSpeechEl) partOfSpeechEl.innerText = '';
      meaningEl.innerText = "No definition found for this word.";
      exampleEl.innerText = "Try checking the spelling and searching again.";
      audioGroupEl.style.display = "none";
      speakBtn.style.display = "none";
    } else {
      // Success
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      speakBtn.style.display = "flex";
      
      titleEl.innerText = result[0].word;

      // Update phonetic tag
      const phonetic = result[0].phonetic || (result[0].phonetics?.find(p => p.text)?.text) || '';
      if (phoneticEl) phoneticEl.innerText = phonetic;

      // Update part of speech tag
      const pos = result[0].meanings?.[0]?.partOfSpeech || '';
      if (partOfSpeechEl) partOfSpeechEl.innerText = pos;

      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      
      const example = result[0].meanings[0].definitions[0].example;
      exampleEl.innerText = example ? `"${example}"` : "No example available.";

      // Find audio
      const phonetics = result[0].phonetics.find(p => p.audio);
      if (phonetics && phonetics.audio) {
        audioEl.src = phonetics.audio;
        audioGroupEl.style.display = "block";
      } else {
        audioGroupEl.style.display = "none";
      }
    }
    addToHistory(word);
  } catch (error) {
    console.error(error);
    infoTextEl.innerHTML = `<p style="color: var(--clr-danger);">Network error — please check your connection and try again.</p>`;
    infoTextEl.style.display = "block";
  }
}

function addToHistory(word) {
  const normalised = word.toLowerCase().trim();
  if (!searchHistory.includes(normalised)) {
    searchHistory.unshift(normalised);
    // Keep only last 10
    if (searchHistory.length > 10) searchHistory.pop();
    renderHistory();
  }
}

function renderHistory() {
  if (!historyListEl) return;
  historyListEl.innerHTML = "";
  // Fix #1: Show the history panel once there are items
  if (historyPanelEl) historyPanelEl.style.display = searchHistory.length ? "block" : "none";
  
  searchHistory.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    li.addEventListener('click', () => {
      inputEl.value = word;
      handleSearch(word);
    });
    historyListEl.appendChild(li);
  });
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    handleSearch(e.target.value.trim());
  }
});

speakBtn.addEventListener("click", () => {
  speakText(titleEl.innerText, meaningEl.innerText);
});
