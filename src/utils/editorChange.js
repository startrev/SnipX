export default function editorChange(event) {
    switch(event.target.value) {
        case 'css':
            chrome.storage.local.set({'editor': 'css'})
            window.location.reload()
            break
        case 'js':
            chrome.storage.local.set({'editor': 'js'})
            window.location.reload()
            break
        case 'text':
            chrome.storage.local.set({'editor': 'text'})
            window.location.reload()
            break
    }
}