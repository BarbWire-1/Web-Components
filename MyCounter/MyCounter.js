const template = document.createElement('template');
template.innerHTML = `
  <style>

    * {
			font-family: Arial;
      font-size: 200%;
			}
			
    :host {
        background-color: var(--btnFill1, yellow);
			--shadow: 4px 3px 2px #7A7A7A;
			--btnFill: orange;
			position: fixed;
      display: inline-block;
      padding: 20px;
			border: 1px solid grey;
			border-radius: 10px;
			box-shadow: var(--shadow);
		}
		/*cascading styles with attributes*/
		:host([centered]){
			left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
		}
		
		:host([scaled]){
			transform: scale(3,3);
		}
		
		

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: var(--btnFill);
      color: white;
		
			text-shadow: var(--shadow);
			box-shadow: var(--shadow)
}
    }
  </style>
  <button id="dec">-</button>
  <span id="count"></span>
	<!-- exposing for css use pseudoClass component or el::part(addBtn)-->
  <button id="inc" part="addBtn">+</button>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById('count').innerHTML = count;
  }
}

customElements.define('my-counter', MyCounter);

const testStyle = document.getElementById('counter1');




