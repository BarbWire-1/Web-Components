export class Component1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

    connectedCallback() {
      
        this.loadTemplate();
  }

  async loadTemplate() {
    const response = await fetch('Components/component1/component1.html');
    const template = await response.text();
    this.constructor.template = template;
    console.log('loading...')
    if (!customElements.get('component-2')) {
      customElements.define('component-2', Component2);
    }

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import 'Components/component1/style.css';
      </style>
      ${this.constructor.template}
    `;
  }
}

if (!customElements.get('component-1')) {
  customElements.define('component-1', Component1);
}
