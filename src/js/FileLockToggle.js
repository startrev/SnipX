const snipxEditorFileLock = document.getElementById('snipx-editor-action-locked')
const snipxEditorFileUnlock = document.getElementById('snipx-editor-action-unlocked')

if(localStorage.getItem('SnipXFileIsLocked')) {
    snipxEditorFileUnlock.style.display = 'none'
}
else snipxEditorFileLock.style.display = 'none'

function fileLock() {
    snipxEditorFileUnlock.style.display = 'none'
    snipxEditorFileLock.style.display = 'inline-block'
}
function fileUnlock() {
    snipxEditorFileLock.style.display = 'none'
    snipxEditorFileUnlock.style.display = 'inline-block'
}
if(!localStorage.getItem('SnipXFileIsLocked')) {
    localStorage.setItem('SnipXFileIsLocked', false)
    snipxEditorFileUnlock.style.display = 'none'
    snipxEditorFileLock.style.display = 'inline-block'
}
else {
    if(localStorage.getItem('SnipXFileIsLocked') === true) {
        snipxEditorFileLock.style.display = 'none'
        snipxEditorFileUnlock.style.display = 'inline-block'
    }
    if(localStorage.getItem('SnipXFileIsLocked') === false) {
        snipxEditorFileUnlock.style.display = 'none'
        snipxEditorFileLock.style.display = 'inline-block'
    }
}

// Lock File
snipxEditorFileLock.addEventListener('click', (e) => {
    localStorage.setItem('SnipXFileIsLocked', true)
    fileUnlock()
})
// Unlock File
snipxEditorFileUnlock.addEventListener('click', (e) => {
    localStorage.setItem('SnipXFileIsLocked', false)
    fileLock()
})