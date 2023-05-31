export class Component2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

    async connectedCallback() {
      
    await this.loadTemplate();
  }

  async loadTemplate() {
    const response = await fetch('Components/component2/component2.html');
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
        @import 'Components/component2/component2.css';
      </style>
      ${this.constructor.template}
    `;
  }
}

if (!customElements.get('component-2')) {
  customElements.define('component-2', Component2);
}
