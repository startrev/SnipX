export default class SnipxLogo extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<a href="${this.getAttribute('href')}" target="_blank">${this.getAttribute('text')}</a>`
    }
}

window.customElements.define('snipx-logo', SnipxLogo)