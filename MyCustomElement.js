export class MyCustomElement extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    console.log('connected MyCustomElement')
  }
  
  disconnectedCallback() {
    console.log('disconnected MyCustomElement from the DOM')
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    //
  }
  
  adoptedCallback() {
    console.log('adopted MyCustomElement')
  }
}

customElements.define('my-custom-element', MyCustomElement);

const myCustomElement = new MyCustomElement();


// connect
// on define runs all and that way disconnects???
document.body.appendChild(myCustomElement);
document.body.appendChild(myCustomElement);
/**
 * It’s called twice, because Node.appendChild() moves the element from its current position to the new position which triggers the connectedCallback method. If this behavior becomes a concern, you can defer the operation to a requestAnimationFrame callback and cancel all future frames containing connectedCallback calls.
 */

// disconnect
//document.querySelector('my-custom-element').remove(); // 'disconnected MyCustomElement from the DOM'


