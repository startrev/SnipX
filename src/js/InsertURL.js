const snipxEditorTablink = document.getElementById('snipx-editor-menu-tablink')

chrome.tabs.query({
    active: true,
    currentWindow: true
}, ([currentTab]) => { 
    let array = currentTab.url.split('')
    let newArray = []
    let slashCount = 0
    for(let i = 0; i <= array.length; i++) { 
        newArray.push(array[i])
        if(array[i] === '/') slashCount++ 
        if(slashCount === 3) break
    }
    let currentTabURL = newArray.join('')
    currentTabURL = currentTabURL.substr(0, currentTabURL.length - 1)

    localStorage.setItem('SnipXTabURL', currentTabURL)
    snipxEditorTablink.innerText = currentTabURL
})