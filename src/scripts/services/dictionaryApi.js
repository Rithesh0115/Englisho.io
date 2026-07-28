export async function fetchDictionaryData(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
}
