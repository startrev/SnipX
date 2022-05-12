chrome.storage.local.get(function(result) {
    document.addEventListener('keydown', e => {
        if(result.editorLock) { e.preventDefault() }
        if(e.key == 'Tab') { e.preventDefault() }
        if(e.key == 'Control') {
            document.addEventListener('keydown', _e => {
                if(_e.key == 's') { 
                    if(document.querySelector('#editorSave')) {
                        _e.preventDefault()
                        document.querySelector('#editorSave').click()
                        window.location.reload()
                    }
                }
            })
        }
    })
})