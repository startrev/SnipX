// wrap in a chrome.storage.local.get()
// use link from config file
const auth = 
`<main id="auth">
    <p>Your server isn't running.</p>
    <a href="https://google.com" target="_blank">How to run SnipX</a>
</main>`

export default class SnipxAuth extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = auth
    }
}

window.customElements.define('snipx-auth', SnipxAuth)