export default function editorClear(e) {
    chrome.storage.local.get(function(result) {
        // Check if on valid url(browser specific urls are considered invalid)
        if(!result.tabURL.includes(':') && document.querySelector('textarea')) {
            // If text editor data doesn't = default value
            if(document.querySelector('textarea')) {
                document.querySelector('textarea').value = ''
                document.querySelector('#editorSave').click()
            }
        }
    })
}