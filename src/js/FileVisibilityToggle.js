const snipxEditorFileRender = document.getElementById('snipx-editor-action-shown')
const snipxEditorFileRemoveRender = document.getElementById('snipx-editor-action-hidden')

if(localStorage.getItem('SnipXFileIsRendered') === true) {
    snipxEditorFileRender.style.display = 'none'
    snipxEditorFileRemoveRender.style.display = 'inline-block'
}
else {
    snipxEditorFileRemoveRender.style.display = 'none'
    snipxEditorFileRender.style.display = 'inline-block'
}

snipxEditorFileRender.addEventListener('click', (e) => {
    localStorage.setItem('SnipXFileIsRendered', false)
    snipxEditorFileRender.style.display = 'none'
    snipxEditorFileRemoveRender.style.display = 'inline-block'
})

snipxEditorFileRemoveRender.addEventListener('click', (e) => {
    localStorage.setItem('SnipXFileIsRendered', true)
    snipxEditorFileRemoveRender.style.display = 'none'
    snipxEditorFileRender.style.display = 'inline-block'
})