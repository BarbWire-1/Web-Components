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
      (await fetch('/Components/Component1/style.css')).text(),
    ]);

    this.constructor.template = templateText;
    this.constructor.styles = stylesText;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${this.constructor.styles}
      </style>
      ${this.constructor.template}
    `;
  }
}

if (!customElements.get('component-1')) {
  customElements.define('component-1', Component1);
}
