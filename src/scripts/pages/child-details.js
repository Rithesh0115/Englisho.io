import { SessionManager } from '../services/SessionManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const name = document.getElementById('nameInput').value.trim();
            const age = document.getElementById('ageInput').value.trim();

            if (name === '' || age === '') {
                alert('Please enter both your name and age.');
            } else {
                SessionManager.loginUser({ name, age, role: 'Child' });
                window.location.href = 'greeting.html';
            }
        });
    }
});
