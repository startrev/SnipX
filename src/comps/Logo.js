export default class SnipxLogo extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<a href="https://google.com" target="_blank">${this.getAttribute('text')}</a>`
    }
}

window.customElements.define('snipx-logo', SnipxLogo)