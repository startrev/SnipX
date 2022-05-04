import '../comps/TextEditor.js'
import '../comps/TextEditorMenu.js'

const editor = 
`<main id="editor">
    <snipx-editor-menu></snipx-editor-menu>
    <snipx-text-editor></snipx-text-editor>
</main>`

export default class SnipxEditor extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = editor
    }
}

window.customElements.define('snipx-editor', SnipxEditor)