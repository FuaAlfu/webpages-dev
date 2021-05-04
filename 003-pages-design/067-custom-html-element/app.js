class CustomElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '-- custom element --';
    }
}

customElements.define('custom-element', CustomElement);