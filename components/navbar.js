class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-5">
        <nav class="glass-nav py-3 px-6 rounded-2xl shadow-xl backdrop-blur-xl flex gap-6 text-sm font-medium transition-all duration-300">
          <a href="#home" class="hover:text-[#6c5ce7] hover:scale-105 transition-all">Home</a>
          <a href="#projects" class="hover:text-[#6c5ce7] hover:scale-105 transition-all">Projects</a>
          <a href="#tools" class="hover:text-[#6c5ce7] hover:scale-105 transition-all">Tools</a>
          <a href="#contact" class="hover:text-[#6c5ce7] hover:scale-105 transition-all">Contact</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("custom-navbar", CustomNavbar);
