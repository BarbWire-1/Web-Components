export class Component1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadTemplateAndStyles()
      .then(() => this.render())
      .catch((error) => console.error(error));
  }

  async loadTemplateAndStyles() {
    const [templateText, stylesText] = await Promise.all([
      (await fetch('/Components/Component1/component1.html')).text(),
      
    ]);

    this.constructor.template = templateText;
  
  }

  render() {
    this.shadowRoot.innerHTML = `
      ${this.constructor.template}
    `;
  }
}

if (!customElements.get('component-1')) {
  customElements.define('component-1', Component1);
}
