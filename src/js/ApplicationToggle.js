const snipxTurnOnIcon = document.getElementById('snipx-header-turnon-icon')
const snipxTurnOffIcon = document.getElementById('snipx-header-turnoff-icon')

snipxTurnOnIcon.addEventListener('click', (e) => {
    snipxTurnOnIcon.style.display = 'none'
    snipxTurnOffIcon.style.display = 'inline-block'
})
snipxTurnOffIcon.addEventListener('click', (e) => {
    snipxTurnOffIcon.style.display = 'none'
    snipxTurnOnIcon.style.display = 'inline-block'
})