export default (function() {
    chrome.storage.local.get(function(result) {
        const auth = 
        `<main id="auth">
            <p>Your server isn't running.</p>
            <a href="${result.docsInstall}" target="_blank">How to run SnipX</a>
        </main>`
    
        class SnipxAuth extends HTMLElement {
            constructor() {
                super()
                this.innerHTML = auth
            }
        }
        
        window.customElements.define('snipx-auth', SnipxAuth)
    })
})()