if(!localStorage.getItem('SnipXPage')) {
    localStorage.setItem('SnipXPage', 'editor')
    const settings = document.getElementById('snipx-settings')
    const editor = document.getElementById(`snipx-editor-textarea-${localStorage.getItem('SnipXFile')}`)
    settings.style.display = 'none'
    editor.style.display = 'block'
}
else {
    if(localStorage.getItem('SnipXPage') === 'editor') {
        const settings = document.getElementById('snipx-settings')
        const editor = document.getElementById(`snipx-editor-textarea-${localStorage.getItem('SnipXFile')}`)
        settings.style.display = 'none'
        editor.style.display = 'block'
    }
    if(localStorage.getItem('SnipXPage') === 'settings') {
        const editor = document.getElementById('snipx-editor')
        const settings = document.getElementById('snipx-settings')
        editor.style.display = 'none'
        settings.style.display = 'block'
    }
}
