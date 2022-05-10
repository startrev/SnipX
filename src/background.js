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
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.injectCSS) {
            let 
                semiPath = request.injectCSS,
                cssPath = semiPath + '.css'

            fetch(cssPath)
                .then(response => response.text())
                .then(text => sendResponse(text))
                // .catch(error => sendResponse(error))

            return true
        }
        if(request.injectJS) {
            let 
                semiPath = request.injectJS,
                jsPath = semiPath + '.js'

            fetch(jsPath)
                .then(response => response.text())
                .then(text => sendResponse(text))
                // .catch(error => sendResponse(error))

            return true
        }
    }
)