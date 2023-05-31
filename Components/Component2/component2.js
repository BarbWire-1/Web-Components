export class Component2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadTemplate();
  }

  async loadTemplate() {
    const template = await fetch('Components/Component2/component2.html');
      this.template = await template.text();
    
    console.log('loading...');
    if (!customElements.get('component-2')) {
      customElements.define('component-2', Component2);
    }

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = ` 
      ${this.template}
    `;
  }
}

if (!customElements.get('component-2')) {
  customElements.define('component-2', Component2);
}
