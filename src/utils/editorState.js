export default function editorState(node) {
    switch(node.innerHTML) {
        case 'visibility':
            chrome.storage.local.set({'editorState': false})
            node.innerHTML = 'visibility_off'
            window.location.reload()
            chrome.tabs.query({active: true, currentWindow: true}, ([currentTab]) => { 
                chrome.tabs.sendMessage(currentTab.id, {appState: false}, function(response) {
                    console.log(response.farewell)
                })
            })
            // Toggle current editor state
            break
        case 'visibility_off':
            chrome.storage.local.set({'editorState': true})
            node.innerHTML = 'visibility'
            window.location.reload()
            chrome.tabs.query({active: true, currentWindow: true}, ([currentTab]) => { 
                chrome.tabs.sendMessage(currentTab.id, {appState: true}, function(response) {
                    console.log(response.farewell)
                })
            })
            // Toggle current editor state
            break
    }
}