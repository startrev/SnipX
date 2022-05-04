chrome.storage.local.get(function(result) {
    document.addEventListener('keydown', e => {
        if(result.editorLock) { e.preventDefault() }
        if(e.key == 'Tab') { e.preventDefault() }
    })
})