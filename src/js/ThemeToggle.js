const snipxThemeLightIcon = document.getElementById('snipx-header-themelight-icon')
const snipxThemeDarkIcon = document.getElementById('snipx-header-themedark-icon')
const snipxEditor = document.getElementById('snipx-editor')
const snipxLoader = document.getElementById('snipx-loader')

function createStyleElement(id, href) {
    const el = document.createElement('link')
    el.rel = 'stylesheet'
    el.id = id
    el.href = href
    return el
}

if(!localStorage.getItem('SnipXTheme')) {
    localStorage.setItem('SnipXTheme', 'dark')
    snipxThemeLightIcon.style.display = 'inline-block'
    const el = createStyleElement('snipx-theme-file', 'css/theme.dark.css')
    document.head.appendChild(el)
}
else {
    if(localStorage.getItem('SnipXTheme') === 'dark') {
        snipxThemeLightIcon.style.display = 'inline-block'
        const el = createStyleElement('snipx-theme-file', 'css/theme.dark.css')
        document.head.appendChild(el)
    }
    if(localStorage.getItem('SnipXTheme') === 'light') {
        snipxThemeDarkIcon.style.display = 'inline-block'
        const el = createStyleElement('snipx-theme-file', 'css/theme.light.css')
        document.head.appendChild(el)
    }
}

// Change to Dark Theme
snipxThemeLightIcon.addEventListener('click', (e) => {
    // Switch Icon to Dark Mode Icon
    snipxThemeLightIcon.style.display = 'none'
    snipxThemeDarkIcon.style.display = 'inline-block'
    // Update Local Storage to Light Mode
    localStorage.setItem('SnipXTheme', 'light')
    // Switch Theme File
    // NOT WORKING PROPERLY
    window.location.reload()
    // const el = document.getElementById('snipx-theme-file')
    // el.setAttribute('href', 'css/theme.dark.css')
})
// Change to Light Theme
snipxThemeDarkIcon.addEventListener('click', (e) => {
    // Switch Icon to Light Mode Icon
    snipxThemeDarkIcon.style.display = 'none'
    snipxThemeLightIcon.style.display = 'inline-block'
    // Update Local Storage to Dark Mode
    localStorage.setItem('SnipXTheme', 'dark')
    // Switch Theme File
    // NOT WORKING PROPERLY
    window.location.reload()
    // const el = document.getElementById('snipx-theme-file')
    // el.setAttribute('href', 'css/theme.light.css')
})