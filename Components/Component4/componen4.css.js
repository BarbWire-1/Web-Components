export const style = 
`<style>
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
    </style>`