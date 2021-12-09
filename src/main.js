// Header IDS
const stateButton = document.getElementById('state_button')
const themeButton = document.getElementById('theme_button')
const settingsButton = document.getElementById('settings_button')

// Editor IDS
const editorType = document.getElementById('editor_type')
const editorCSS = document.getElementById('editor_css')
const editorJS = document.getElementById('editor_js')
const editorTaburl = document.getElementById('editor_taburl')
const editorRender = document.getElementById('editor_render')
const editorLock = document.getElementById('editor_lock')

// Page IDS
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
    editorTaburl.innerText = currentTabURL
})

// Set localStorage defaultStorage values
Object.entries(defaultStorage).forEach(([key, value]) => {
    if(!localStorage.getItem(key)) localStorage.setItem(key, value)
})

// Load UI using values in localStorage
window.addEventListener('load', (e) => {
    //            HEADER LOAD
    // .................................
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
        case 'editor': 
            settingsPage.style.display = 'none'
            editorPage.style.display = 'block'
            break
        case 'settings': 
            editorPage.style.display = 'none'
            settingsPage.style.display = 'block'
            break
    }
    //           EDITOR LOAD
    // ................................
    // Update EDITOR render
    switch(localStorage.getItem('SnipxEditor')) {
        case 'css': 
            // console.log(editorType.childNodes)
            editorType.childNodes.forEach(n => {
                if(
                    n.nodeName === 'OPTION' && 
                    n.value === 'css' && 
                    localStorage.getItem('SnipxPage') === 'editor'
                ) {
                    n.setAttribute('selected', null)
                    editorJS.style.display = 'none'
                    editorCSS.style.display = 'flex'
                } 
            })
            break
        case 'js': 
            editorType.childNodes.forEach(n => {
                if(
                    n.nodeName === 'OPTION' && 
                    n.value === 'js' &&
                    localStorage.getItem('SnipxPage') === 'editor'
                ) {
                    n.setAttribute('selected', null)
                    editorCSS.style.display = 'none'
                    editorJS.style.display = 'flex'
                } 
            })
            break
    }
    switch(localStorage.getItem('SnipxEditorRender')) {
        case 'true': editorRender.innerText = 'visibility'; break
        case 'false': editorRender.innerText = 'visibility_off'; break
    }
    switch(localStorage.getItem('SnipxEditorLock')) {
        case 'true': editorLock.innerText = 'lock'; break
        case 'false': editorLock.innerText = 'no_encryption'; break
    }
    //            HEADER UPDATE
    // .................................
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
                editorCSS.style.display = 'none'
                editorJS.style.display = 'none'
                settingsPage.style.display = 'block'
                break
            // Load settings page
            case 'settings':
                localStorage.setItem('SnipxPage', 'editor')
                switch(localStorage.getItem('SnipxEditor')) {
                    case 'css': editorCSS.style.display = 'block'; break
                    case 'js': editorJS.style.display = 'block'; break
                }
                settingsPage.style.display = 'none'
                editorPage.style.display = 'block'
                break   
        }
    }, false)
    //            Editor UPDATE
    // .................................
    // TYPE
    editorType.addEventListener('change', (e) => {
        localStorage.setItem('SnipxEditor', editorType.value)
        switch(editorType.value) {
            case 'css':
                editorJS.style.display = 'none'
                editorCSS.style.display = 'block'
                break
            case 'js':
                editorCSS.style.display = 'none'
                editorJS.style.display = 'block'
                break
        }
    }, false)
    editorRender.addEventListener('click', (e) => {
        switch(localStorage.getItem('SnipxEditorRender')) {
            case 'true':
                localStorage.setItem('SnipxEditorRender', 'false')
                // insert current editor code into TabURL
                window.location.reload()
                break
            case 'false':
                localStorage.setItem('SnipxEditorRender', 'true')
                // remove current editor code from TabURL
                window.location.reload()
                break
        }
    }, false)
    editorLock.addEventListener('click', (e) => {
        switch(localStorage.getItem('SnipxEditorLock')) {
            case 'true':
                localStorage.setItem('SnipxEditorLock', 'false')
                // unlock the current editor
                window.location.reload()
                break
            case 'false':
                localStorage.setItem('SnipxEditorLock', 'true')
                // lock the current editor
                window.location.reload()
                break
        }
    }, false)
}, false)

