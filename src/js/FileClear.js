const snipxEditorClearBtn = document.getElementById('snipx-editor-menu-clearBtn')
const snipxEditorTextarea = document.getElementById(`snipx-editor-textarea-${localStorage.getItem('SnipXFile')}`)

snipxEditorClearBtn.addEventListener('click', (e) => {
    // console.log(snipxEditorTextarea.value)
    snipxEditorTextarea.value = ''
    // window.location.reload()
})