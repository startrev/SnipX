const snipxEditorTemplate = document.getElementById('snipx-editor')
const snipxSettingsTemplate = document.getElementById('snipx-settings')
const snipxSettingsIcon = document.getElementById('snipx-header-settings-icon')

snipxSettingsIcon.addEventListener('click', (e) => {
    snipxEditorTemplate.style.display = 'none'
    snipxSettingsTemplate.style.display = 'block'
})