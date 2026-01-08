class CustomFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    
    this.innerHTML = `
      <footer class="mt-20 pb-6 flex justify-center w-full">
        <div class="glass-nav px-6 py-3 rounded-2xl text-center text-sm shadow-lg">
          <p class="opacity-70">© ${year} Cid Kageno — All Rights Reserved.</p>
          <p class="opacity-50 text-xs mt-1">Built with 💜 and Atomic Energy</p>
        </div>
      </footer>
    `;
  }
}
customElements.define("custom-footer", CustomFooter);
