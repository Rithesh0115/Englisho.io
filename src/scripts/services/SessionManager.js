export const SessionManager = {
    getUser() {
        const user = localStorage.getItem('englisho_user');
        return user ? JSON.parse(user) : null;
    },

    loginUser(userData) {
        localStorage.setItem('englisho_user', JSON.stringify(userData));
    },

    logoutUser() {
        localStorage.removeItem('englisho_user');
        window.location.href = getRootPath() + 'index.html';
    }
};

export function getRootPath() {
    const path = window.location.pathname;
    if (path.includes('/pages/features/flashcards/')) return '../../../';
    if (path.includes('/pages/features/quizz/')) return '../../../';
    if (path.includes('/pages/features/')) return '../../';
    if (path.includes('/pages/info/')) return '../../';
    if (path.includes('/pages/auth/')) return '../../';
    if (path.includes('/pages/core/')) return '../../';
    return './';
}
