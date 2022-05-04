export default function pageHandler(node) {
    chrome.storage.local.get(function(result) {
        switch(result.page) {
            case 'auth':
                if(result.server) {
                    chrome.storage.local.set({'page': 'editor'})
                    document.querySelector('snipx-page').innerHTML = '<snipx-editor></snipx-editor>'
                    document.getElementById('tabURL').innerText = result.tabURL
                }
                else {
                    chrome.storage.local.set({'page': 'auth'})
                    document.querySelector('snipx-page').innerHTML = '<snipx-auth></snipx-auth>'
                }
                node.innerHTML = 'account_circle'
                break
            case 'editor':
                chrome.storage.local.set({'page': 'profile'})
                node.innerHTML = 'arrow_back'
                document.querySelector('snipx-page').innerHTML = '<snipx-profile></snipx-profile>'
                break
            case 'profile':
                chrome.storage.local.set({'page': 'editor'})
                node.innerHTML = 'account_circle'
                document.querySelector('snipx-page').innerHTML = '<snipx-editor></snipx-editor>'
                document.getElementById('tabURL').innerText = result.tabURL
                break
        }
    })
}

