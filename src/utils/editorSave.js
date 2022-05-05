export default function editorSave(e) {
    chrome.storage.local.get(function(result) {
        // Check if on valid url(browser specific urls are considered invalid)
        if(!result.tabURL.includes(':')) {
            // console.log(e.target.innerText)
            if(document.querySelector('textarea')) {
                let editor = document.querySelector('textarea')
                let tabURL = document.querySelector('#tabURL')
                // If text editor data doesn't = default value
                if(editor.value !== result.editorText[result.editor]) {
                    let data = JSON.stringify({ 
                        "entryName": tabURL.innerHTML, 
                        "fileName" : `${tabURL.innerHTML}.${result.editor}`,
                        "fileData": editor.value
                    })

                    let xhr = new XMLHttpRequest()
                    xhr.open("POST", `http://localhost:${result.port}/api/post`, true)
                    xhr.setRequestHeader("Content-type", "application/json")
                    xhr.send(data)

                    
                    // console.log(editor.value)
                    // console.log(tabURL.innerHTML)
                    // console.log(result.editorText[result.editor])
                }
            }
        }
    })
}
