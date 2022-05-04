import './Logo.js'
import './Icon.js'
import manifest from '../../manifest.json' assert {type: 'json'}

chrome.storage.local.get(function(result) {
    let theme,page,state,docs = result.docs

    result.state === true ? state = 'toggle_on': state = 'toggle_off'
    result.theme === 'dark' ? theme = 'light_mode': theme = 'dark_mode'
    result.page === 'profile' ? page = 'arrow_back': page = 'account_circle'

    const header = 
    `<header>
        <div>
            <snipx-logo href="${docs}" text="${manifest.name}"></snipx-logo>
        </div>
        <div>
            <snipx-icon icon="${state}"></snipx-icon>
            <snipx-icon icon="${theme}"></snipx-icon>
            <snipx-icon icon="${page}"></snipx-icon>
        </div>
    </header>`

    class SnipxHeader extends HTMLElement {
        constructor() {
            super()
            this.innerHTML = header
        }
    }

    window.customElements.define('snipx-header', SnipxHeader)
})

