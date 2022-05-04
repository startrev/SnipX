// Snipx
import urlHandler from './utils/urlHandler.js'
import './utils/editorShortcuts.js'
import './comps/Header.js'
import './pages/_page.js'

let page = document.querySelector('snipx-page')
let cssTheme = document.querySelector('#cssTheme')

chrome.storage.local.get(function(result) {
    // Check if server is active and set in chrome.storage
    fetch(`http://localhost:${result.port}`)
        .then(r => r.text())
        .then(result => chrome.storage.local.set({'server': true}))
        .catch(e => chrome.storage.local.set({'server': false}))

    // Set app page
    switch(result.server) {
        case false: chrome.storage.local.set({'page': 'auth'}); break
        case true: chrome.storage.local.set({'page': 'editor'}); break
    }

    // Handle content-scripts
    if(result.state === true) {
        console.log('toggle scripts on.')
    }

    // Load theme file
    result.theme === 'dark' ? 
        cssTheme.setAttribute('href', 'styles/theme/dark.css'):
        cssTheme.setAttribute('href', 'styles/theme/light.css')

    // Load page component
    switch(result.page) {
        case 'auth': page.innerHTML = '<snipx-auth></snipx-auth>'; break
        case 'editor': page.innerHTML = '<snipx-editor></snipx-editor>'; break
        case 'profile': page.innerHTML = '<snipx-profile></snipx-profile>'; break
    }
})

// Set current tabURL
chrome.tabs.query({ active: true, currentWindow: true }, ([currentTab]) => { 
    let currentTabURL = urlHandler(currentTab.url)
    chrome.storage.local.set({'tabURL': currentTabURL})
    if(document.getElementById('tabURL')) document.getElementById('tabURL').innerText = currentTabURL
})