const snipxEditorTemplate = document.getElementById('snipx-editor')
const snipxSettingsTemplate = document.getElementById('snipx-settings')
const snipxSettingsCloserIcon = document.getElementById('snipx-settings-closer')

snipxSettingsCloserIcon.addEventListener('click', (e) => {
    snipxSettingsTemplate.style.display = 'none'
    snipxEditorTemplate.style.display = 'block'
    localStorage.setItem('SnipXPage', 'editor')
})