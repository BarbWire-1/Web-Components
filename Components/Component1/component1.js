export class Component1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadTemplate();
  }

    async loadTemplate() {
    // needs ABSOLUTE paths here as processed from root!!!
    const response = await fetch('Components/Component1/component1.html');
    const template = await response.text();
    this.shadowRoot.innerHTML = `
      <style>
        @import 'Components/Component1/component1.css';
      </style>
      ${template}
    `;
  }
}

customElements.define('component-1', Component1);
