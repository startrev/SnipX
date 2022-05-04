export default function editorLock(node) {
    switch(node.innerHTML) {
        case 'lock_outline':
            chrome.storage.local.set({'editorLock': false})
            node.innerHTML = 'lock_open'
            window.location.reload()
            document.querySelector('textarea').disabled = false
            break
        case 'lock_open':
            chrome.storage.local.set({'editorLock': true})
            node.innerHTML = 'lock_outline'
            window.location.reload()
            document.querySelector('textarea').disabled = true
            break
    }
}