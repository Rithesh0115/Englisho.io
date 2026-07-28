import { SessionManager, getRootPath } from '../services/SessionManager.js';

class Navbar extends HTMLElement {
    connectedCallback() {
        const root = getRootPath();
        const user = SessionManager.getUser();

        let authSection = `
            <a href="${root}pages/auth/sign-in.html" class="nav-link" style="margin-right: 1rem;">Log in</a>
            <a href="${root}pages/core/role-select.html" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Sign Up</a>
        `;

        if (user) {
            authSection = `
                <a href="${root}pages/features/dashboard.html" class="nav-link" style="margin-right: 1rem; font-weight: 700; color: var(--clr-primary);">Hi, ${user.name}</a>
                <button id="logoutBtn" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Log Out</button>
            `;
        }

        this.innerHTML = `
            <nav class="nav-bar">
                <a href="${root}index.html" class="nav-brand">
                    <div style="width: 32px; height: 32px; background: var(--clr-primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">E</div>
                    <span>EnglishO</span>
                </a>
                <div class="nav-links">
                    <a href="${root}index.html" class="nav-link">Home</a>
                    <a href="${root}pages/info/service.html" class="nav-link">Platform</a>
                    <a href="${root}pages/info/about.html" class="nav-link">Methodology</a>
                    <a href="${root}pages/info/contact.html" class="nav-link">Contact</a>
                </div>
                <div>
                    ${authSection}
                </div>
            </nav>
        `;

        const logoutBtn = this.querySelector('#logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                SessionManager.logoutUser();
            });
        }
    }
}

customElements.define('englisho-navbar', Navbar);
