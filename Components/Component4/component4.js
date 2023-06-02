import { style } from './componen4.css.js';
import {templateString} from './component4.html.js'

export class Component4 extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.template = document.createElement('template')
        this.template.innerHTML = style + templateString

        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    connectedCallback() {
       
  // do anything
  }
 
  
}

if (!customElements.get('component-4')) {
  customElements.define('component-4', Component4);
}