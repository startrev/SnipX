import './Icon.js'
import editorChange from '../utils/editorChange.js'
import editorSave from '../utils/editorSave.js'
import editorClear from '../utils/editorClear.js'

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
                this.saveElement = this.querySelector('#editorSave')
                this.clearElement = this.querySelector('#editorClear')

                this.selectElement.value = result.editor
                this.querySelector('#tabURL').innerText = result.tabURL
            }

            clickEvent(e) {
                switch(e.target.innerText) {
                    case 'save': editorSave(e); break
                    case 'clear': editorClear(e); break
                }
            }

            changeEvent(e) { editorChange(e) }

            connectedCallback() {
                this.selectElement.addEventListener('change', e => this.changeEvent(e))
                this.saveElement.addEventListener('click', e => this.clickEvent(e))
                this.clearElement.addEventListener('click', e => this.clickEvent(e))
            }
    
            disconnectedCallback() {
                this.selectElement.removeEventListener('change', this.changeEvent, true)
                this.saveElement.removeEventListener('click', this.clickEvent, true)
                this.clearElement.removeEventListener('click', this.clickEvent, true)
            }
        }
        
        window.customElements.define('snipx-editor-menu', SnipxEditorMenu)
    })
})()

