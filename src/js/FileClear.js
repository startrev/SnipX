const snipxEditorClearBtn = document.getElementById('snipx-editor-menu-clearBtn')
const snipxEditorTextarea = document.getElementById('snipx-editor-textarea')

snipxEditorClearBtn.addEventListener('click', (e) => {
    snipxEditorTextarea.value = ''
})