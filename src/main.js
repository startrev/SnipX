// Header Menu Icons/Buttons
const stateButton = document.getElementById('state_button')
const themeButton = document.getElementById('theme_button')
const settingsButton = document.getElementById('settings_button')

// Snipx Pages
const editorPage = document.getElementById('editor_page')
const settingsPage = document.getElementById('settings_page')

// Create localStorage key/value if not there already
let defaultStorage = {
    SnipxTheme: 'dark',
    SnipxIsActive: 'true',
    SnipxPage: 'editor',
    SnipxEditor: 'css',
    SnipxEditorRender: 'true',
    SnipxEditorLock: 'false'
}

// Get only the domain name of the activeTab's URL
chrome.tabs.query({ 
    active: true, 
    currentWindow: true 
}, ([currentTab]) => { 
    let array = currentTab.url.split('')
    let newArray = []
    let slashCount = 0
    for(let i = 0; i <= array.length; i++) { 
        newArray.push(array[i])
        if(array[i] === '/') slashCount++
        if(slashCount === 3) break
    }
    let currentTabURL = newArray.join('')
    currentTabURL = currentTabURL.substr(0, currentTabURL.length - 1)
    // Insert URL directly into localStorage
    localStorage.setItem('SnipxTabURL', currentTabURL)
})

// Set localStorage defaultStorage values
Object.entries(defaultStorage).forEach(([key, value]) => {
    if(!localStorage.getItem(key)) localStorage.setItem(key, value)
})

// Load UI using values in localStorage
window.addEventListener('load', (e) => {
    // Update STATE render
    if(localStorage.getItem('SnipxIsActive') === 'true') {
        stateButton.innerText = 'toggle_on'
    }
    if(localStorage.getItem('SnipxIsActive') === 'false') {
        stateButton.innerText = 'toggle_off'
    }
    // Update THEME render
    if(localStorage.getItem('SnipxTheme') === 'dark') {
        // Display light mode icon
        themeButton.innerText = 'light_mode'
        // Load dark mode theme
    }
    if(localStorage.getItem('SnipxTheme') === 'light') {
        // Display dark mode icon
        themeButton.innerText = 'dark_mode'
        // Load light mode theme
    }
    // Update SECTION render
    if(localStorage.getItem('SnipxPage') === 'editor') {
        editorPage.style.display = 'flex'
    }
    if(localStorage.getItem('SnipxPage') === 'settings') {
        settingsPage.style.display = 'flex'
    }

}, false)