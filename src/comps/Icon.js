import pageHandler from '../utils/pageHandler.js'
import stateHandler from '../utils/stateHandler.js'
import themeHandler from '../utils/themeHandler.js'
import editorState from '../utils/editorState.js'
import editorLock from '../utils/editorLock.js'

export default class SnipxIcon extends HTMLElement {
    constructor() {
        super()
        this.icon = this.getAttribute('icon')
        this.innerHTML = `<span class="material-icons">${this.icon}</span>`
    }

    checkNode(n) { if(n.nodeName === 'SNIPX-ICON') return n.childNodes[0]; return n }

    clickEvent(e) {
        let node = this.checkNode(e.target)
        switch(node.innerText) {
            case 'account_circle': case 'arrow_back': pageHandler(node); break
            case 'toggle_on': case 'toggle_off': stateHandler(node); break
            case 'dark_mode': case 'light_mode': themeHandler(node); break
            case 'visibility': case 'visibility_off': editorState(node); break
            case 'lock_outline': case 'lock_open': editorLock(node); break
        }
    }

    hoverEvent(e) {
        let node = this.checkNode(e.target)
        // Implement hidden details, revealed upon hover
    }

    connectedCallback() {
        this.addEventListener('click', e => this.clickEvent(e))
        this.addEventListener('mouseover', e => this.hoverEvent(e))
    }
    disconnectedCallback() {
        this.removeEventListener('click', this.clickEvent, true)
        this.removeEventListener('mouseover', this.hoverEvent, true)
    }
}

window.customElements.define('snipx-icon', SnipxIcon)