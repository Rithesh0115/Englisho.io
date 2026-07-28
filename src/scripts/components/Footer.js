class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer-modern mt-xl">
                <div class="container flex justify-between items-center">
                    <div class="flex items-center gap-sm">
                        <div style="width: 24px; height: 24px; background: var(--clr-text-muted); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.7rem;">E</div>
                        <span style="font-weight: 600; color: var(--clr-text);">EnglishO</span>
                    </div>
                    <div class="flex gap-lg">
                        <a href="#" class="nav-link">Privacy</a>
                        <a href="#" class="nav-link">Terms</a>
                        <a href="#" class="nav-link">Twitter</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('englisho-footer', Footer);
