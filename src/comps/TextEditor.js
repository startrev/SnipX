export default (function() {
    chrome.storage.local.get(function(result) {
        const textEditor = 
            `<textarea
            autocomplete="false" 
            autocorrect="false" 
            autocapitalize="false" 
            spellcheck="false">${result.editorText[result.editor]}</textarea>`
    
        class SnipxTextEditor extends HTMLElement {
            constructor() {
                super()
                this.innerHTML = textEditor
            }

            hoverEvent(e) { result.editorLock ? e.target.disabled = true : e.target.disabled = false }

            keydownEvent(e) {
                // Insert Tab Space
                // export this function in seperate file
                if(e.key == 'Tab') {
                    let curPos = document.querySelector("textarea").selectionStart
                    let curTxt = document.querySelector("textarea").value
                    let iTxt = ''

                    for(let i = 0; i < result.editorTab; i++) { iTxt = iTxt + ' ' }
                    curTxt = curTxt.slice(0, curPos) + iTxt + curTxt.slice(curPos)
                    
                    document.querySelector("textarea").value = curTxt
                    document.querySelector("textarea").selectionEnd = curPos + result.editorTab
                }
            }
    
            connectedCallback() {
                this.addEventListener('mouseover', e => this.hoverEvent(e))
                this.addEventListener('keydown', e => this.keydownEvent(e))
            }
    
            disconnectedCallback() {
                this.removeEventListener('mouseover', this.hoverEvent, true)
                this.removeEventListener('keydown', this.keydownEvent, true)
            }
        }
    
        window.customElements.define('snipx-text-editor', SnipxTextEditor)
    })
})()

