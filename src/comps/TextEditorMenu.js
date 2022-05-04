import './Icon.js'
import editorChange from '../utils/editorChange.js'

export default (function() {
    chrome.storage.local.get(function(result) {
        let state, lock

        result.editorState === true ? state = 'visibility': state = 'visibility_off'
        result.editorLock === true ? lock = 'lock_outline': lock = 'lock_open'

        const menu = 
        `<aside>
            <div id="editor-actions">
                <select>
                    <option value="css">css</option>
                    <option value="js">js</option>
                    <option value="text">text</option>
                </select>
                <div>
                    <snipx-icon icon="${state}"></snipx-icon>
                    <snipx-icon icon="${lock}"></snipx-icon>
                </div>
                <p id="tabURL"></p>
            </div>
            <div>
                <button class="menu-button" id="editorClear">clear</button>
                <button class="menu-button" id="editorSave">save</button>
            </div>
        </aside>`
        
        class SnipxEditorMenu extends HTMLElement {
            constructor() {
                super()
                this.innerHTML = menu
                this.selectElement = this.querySelector('select')
                this.selectElement.value = result.editor
                this.querySelector('#tabURL').innerText = result.tabURL
            }

            changeEvent(e) { editorChange(e) }

            connectedCallback() {
                this.selectElement.addEventListener('change', e => this.changeEvent(e))
            }
    
            disconnectedCallback() {
                this.selectElement.removeEventListener('change', this.changeEvent, true)
            }
        }
        
        window.customElements.define('snipx-editor-menu', SnipxEditorMenu)
    })
})()

