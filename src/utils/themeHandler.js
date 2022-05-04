export default function themeHandler(node) {
    switch(node.innerHTML) {
        case 'dark_mode':
            chrome.storage.local.set({'theme': 'dark'})
            node.innerHTML = 'light_mode'
            window.location.reload()
            break
        case 'light_mode':
            chrome.storage.local.set({'theme': 'light'})
            node.innerHTML = 'dark_mode'
            window.location.reload()
            break
    }
}