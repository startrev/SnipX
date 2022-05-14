export default (function() {
    chrome.storage.local.get(function(result) {
        const textEditor = 
            `<textarea
            autocomplete="false" 
            autocorrect="false" 
            autocapitalize="false" 
            spellcheck="false"></textarea>`
    
        class SnipxTextEditor extends HTMLElement {
            constructor() {
                super()
                this.innerHTML = textEditor
                this.querySelector('textarea').innerHTML = result.editorText[result.editor]
            }
        }
    
        window.customElements.define('snipx-text-editor', SnipxTextEditor)
    })
})()

