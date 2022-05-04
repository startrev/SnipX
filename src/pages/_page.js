// Import Pages
import '../pages/Auth.js'
import '../pages/Editor.js'
import '../pages/Profile.js'

class SnipxPage extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<snipx-editor></snipx-editor>`
    }
}

window.customElements.define('snipx-page', SnipxPage)