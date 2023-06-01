export class Component4 extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
  
    
        this.template = document.createElement('template')
        this.template.innerHTML = `
<style>
    :host {
        display: block;
        --bg: lightgrey;
        --title: black;
        background-color: var(--bg);
        padding: 10px;
        margin: 0;
        width: 50vw;
    }

    h2 {
        color: var(--title);
    }
    :host([green]){
        padding:10px;
        background: #b0fa8e;
        --title: #938efa;
        color:var(--title);
        
    }
</style>
<div >
    <h2 part="title">Component 4</h2>
    <p>Template string in class.</p>
</div>

`
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    connectedCallback() {
       
  // do anything
  }
 
  
}

if (!customElements.get('component-4')) {
  customElements.define('component-4', Component4);
}