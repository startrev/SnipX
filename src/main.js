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
    // Create an array out of the 'currentTab.url'
    let array = currentTab.url.split('')
    let newArray = []
    // We stop counting 'slashCount' after 3 because we know the 
    // base domain always lives within 3 slashes: 'https:[/][/]google.com[/]' 
    let slashCount = 0
    // Loop through the entire url
    for(let i = 0; i <= array.length; i++) { 
        if(array[i] === '/') slashCount++
        if(slashCount === 3) break
        // Push valid characters into 'newArray'
        newArray.push(array[i])
    }
    let currentTabURL = newArray.join('')
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
    switch(localStorage.getItem('SnipxIsActive')) {
        case 'true': stateButton.innerText = 'toggle_on'; break
        case 'false': stateButton.innerText = 'toggle_off'; break
    }
    // Update THEME render
    switch(localStorage.getItem('SnipxTheme')) {
        case 'dark': themeButton.innerText = 'light_mode'; break
        case 'light': themeButton.innerText = 'dark_mode'; break
    }
    // Update SECTION render
    switch(localStorage.getItem('SnipxPage')) {
        case 'editor': editorPage.style.display = 'flex'; break
        case 'settings': settingsPage.style.display = 'flex'; break
    }
}, false)

// Load Event Listeners towards the end of the file
// STATE
stateButton.addEventListener('click', (e) => {
    switch(localStorage.getItem('SnipxIsActive')) {
        case 'true':
            localStorage.setItem('SnipxIsActive', 'false')
            stateButton.innerText = 'toggle_off'
            // Remove all rendered snippets from the browser
            break
        case 'false':
            localStorage.setItem('SnipxIsActive', 'true')
            stateButton.innerText = 'toggle_on'
            // Render all snippets to the browser
            break   
    }
}, false)
// THEME
themeButton.addEventListener('click', (e) => {
    switch(localStorage.getItem('SnipxTheme')) {
        case 'dark':
            localStorage.setItem('SnipxTheme', 'light')
            themeButton.innerText = 'dark_mode'
            // Load light theme
            break
        case 'light':
            localStorage.setItem('SnipxTheme', 'dark')
            themeButton.innerText = 'light_mode'
            // Load dark theme
            break   
    }
}, false)
// SETTINGS
settingsButton.addEventListener('click', (e) => {
    switch(localStorage.getItem('SnipxPage')) {
        // Load editor page
        case 'editor':
            localStorage.setItem('SnipxPage', 'settings')
            editorPage.style.display = 'none'
            settingsPage.style.display = 'flex'
            break
        // Load settings page
        case 'settings':
            localStorage.setItem('SnipxPage', 'editor')
            settingsPage.style.display = 'none'
            editorPage.style.display = 'flex'
            break   
    }
}, false)