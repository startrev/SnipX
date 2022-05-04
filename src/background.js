// App Installation
chrome.runtime.onInstalled.addListener(function() {
    const snipxConfigURL = chrome.runtime.getURL('config.json')
    fetch(snipxConfigURL)
        .then(response => response.json())
        .then(json =>  chrome.storage.local.set(json))
})

// Incognito Access
chrome.extension.isAllowedIncognitoAccess(function(isAllowedAccess) {
    if(isAllowedAccess) {
        console.log('we have incognito access')
        return
    }
})

// Runtime Events
chrome.runtime.onMessage.addListener(function(message, callback) {
    if(!message) return
    switch(message.command) {
        case 'setAlarm':
            chrome.alarms.create({delayInMinutes: 5}); break
        case 'runLogic':
            chrome.tabs.executeScript({file: 'logic.js'}); break
        case 'changeColor':
            chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="orange"'}); break
    }
    return true
})