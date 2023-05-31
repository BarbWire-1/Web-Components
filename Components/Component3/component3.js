export class Component3 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadTemplate();
  }

  async loadTemplate() {
    const response = await fetch('Components/Component3/component3.html');
    const htmlContent = await response.text();
      //console.log(htmlContent)
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
      //console.log(doc)
    const template = doc.querySelector('template');

    const shadowRoot = this.shadowRoot;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

if (!customElements.get('component-3')) {
  customElements.define('component-3', Component3);
}