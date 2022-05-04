export default function editorState(node) {
    switch(node.innerHTML) {
        case 'visibility':
            chrome.storage.local.set({'editorState': false})
            node.innerHTML = 'visibility_off'
            window.location.reload()
            // Toggle current editor state
            break
        case 'visibility_off':
            chrome.storage.local.set({'editorState': true})
            node.innerHTML = 'visibility'
            window.location.reload()
            // Toggle current editor state
            break
    }
}