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
    const templateHTML = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(templateHTML, 'text/html');
      
    const template = doc.querySelector('template');

    const shadowRoot = this.shadowRoot;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

if (!customElements.get('component-3')) {
  customElements.define('component-3', Component3);
}