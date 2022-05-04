export default function stateHandler(node) {
    chrome.storage.local.get(function(result) {
        switch(node.innerHTML) {
            case 'toggle_on':
                chrome.storage.local.set({'state': false})
                node.innerHTML = 'toggle_off'
                break
            case 'toggle_off':
                chrome.storage.local.set({'state': true})
                node.innerHTML = 'toggle_on'
                break
        }
    })
}