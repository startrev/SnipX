import './Icon.js'
import editorChange from '../utils/editorChange.js'
import editorSave from '../utils/editorSave.js'

export default (function() {
    chrome.storage.local.get(function(result) {

        const menu = 
        `<aside>
            <div id="editor-actions">
                <select>
                    <option value="css">css</option>
                    <option value="js">js</option>
                    <option value="text">text</option>
                </select>
                <p id="tabURL"></p>
            </div>
            <div>
                <button class="menu-button" id="editorSave">save</button>
            </div>
        </aside>`
        
        class SnipxEditorMenu extends HTMLElement {
            constructor() {
                super()
                this.innerHTML = menu
                
                this.selectElement = this.querySelector('select')
                this.saveElement = this.querySelector('#editorSave')

                this.selectElement.value = result.editor
                this.querySelector('#tabURL').innerText = result.tabURL
            }

            connectedCallback() {
                this.selectElement.addEventListener('change', e => editorChange(e))
                this.saveElement.addEventListener('click', e => editorSave(e))
            }
    
            disconnectedCallback() {
                this.selectElement.removeEventListener('change', editorChange, true)
                this.saveElement.removeEventListener('click', editorSave, true)
            }
        }
        
        window.customElements.define('snipx-editor-menu', SnipxEditorMenu)
    })
})()

