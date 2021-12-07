const snipxFileType = document.getElementById('snipx-editor-menu-select')
const snipxEditorCSS = document.getElementById('snipx-editor-textarea-css')
const snipxEditorJS = document.getElementById('snipx-editor-textarea-js')
const snipxMenuCSS = document.getElementById('snipx-editor-menu-css')
const snipxMenuJS = document.getElementById('snipx-editor-menu-js')

if(!localStorage.getItem('SnipXFile')) {
    localStorage.setItem('SnipXFile', 'css')
    snipxEditorCSS.style.display = 'block'
    snipxMenuCSS.setAttribute('selected', true)
}
else {
    if(localStorage.getItem('SnipXFile') === 'css') {
        snipxEditorCSS.style.display = 'block'
        snipxMenuCSS.setAttribute('selected', true)
    }
    if(localStorage.getItem('SnipXFile') === 'js') {
        snipxEditorJS.style.display = 'block'
        snipxMenuJS.setAttribute('selected', true)
    }
}

snipxFileType.addEventListener('change', (e) => {
    localStorage.setItem('SnipXFile', snipxFileType.value)
    switch(snipxFileType.value) {
        case 'css':
            snipxMenuCSS.setAttribute('selected', true)
            snipxEditorJS.style.display = 'none'
            snipxEditorCSS.style.display = 'block'
            window.location.reload()
            break
        case 'js':
            snipxMenuJS.setAttribute('selected', true)
            snipxEditorCSS.style.display = 'none'
            snipxEditorJS.style.display = 'block'
            window.location.reload()
            break
        default: 
            return undefined
    }
})

