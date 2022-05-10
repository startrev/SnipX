let 
    breakAt = 3,
    truncateAt = 25
    _BodyNode = document.getElementsByTagName('body')[0],
    _CSSNode = document.createElement('style'),
    _JSNode = document.createElement('script')

function truncateString(str, num) {
    if(str.length <= num) return str
    return str.slice(0, num) + '...' 
}

function urlHandler(url) {
    let mainArray = url.split(''),
        newArray = [],
        slashCount = 0

    for(let i = 0; i <= mainArray.length; i++) { 
        if(mainArray[i] === '/') slashCount++
        if(slashCount === breakAt) break
        newArray.push(mainArray[i])
    }
    
    let newURL = newArray.join('')
    
    if(newURL.includes('http://')) return truncateString(newURL.replace('http://', ''), truncateAt)
    else return truncateString(newURL.replace('https://', ''), truncateAt)
}

function urlTarget(url, port) {
    return `http://localhost:${port}/${url}/${url}`
}

let currentURL = urlHandler(window.location.href)

chrome.storage.local.get(function(result) {

    chrome.runtime.sendMessage({injectCSS: urlTarget(currentURL, result.port)}, function(response) {
        if(
            !response.startsWith('<!DOCTYPE html>') && 
            !response.endsWith('</html>') &&
            !response.includes('<title>Error</title>')
        ) {
            _CSSNode.innerHTML = response
            _CSSNode.setAttribute('id', 'snipx_css_node')
            _BodyNode.appendChild(_CSSNode)
        }

    })

    chrome.runtime.sendMessage({injectJS: urlTarget(currentURL, result.port)}, function(response) {
        if(
            !response.startsWith('<!DOCTYPE html>') && 
            !response.endsWith('</html>') &&
            !response.includes('<title>Error</title>')
        ) {
            let chromeJS = chrome.runtime.getURL(
                `/api/public/${currentURL}/${currentURL}.js`
            )
            _JSNode.setAttribute('src', chromeJS)
            _JSNode.setAttribute('id', 'snipx_js_node')
            _BodyNode.appendChild(_JSNode)
        }
    })

})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.reloadTab === true) {
            // handle
            window.location.reload()
            sendResponse({farewell: "goodbye"})
        }
        if(request.appState === true) {
            // handle
            // window.location.reload()
            console.log('true')
            sendResponse({farewell: "goodbye"})
        }
        if(request.appState === false) {
            // handle
            // window.location.reload()
            console.log('false')
            sendResponse({farewell: "goodbye"})
        }
    }
)