let breakAt = 3
let truncateAt = 25

export default function urlHandler(url) {
    let mainArray = url.split(''),
        newArray = [],
        slashCount = 0

    for(let i = 0; i <= mainArray.length; i++) { 
        if(mainArray[i] === '/') slashCount++
        if(slashCount === breakAt) break
        newArray.push(mainArray[i])
    }
    
    let newURL = newArray.join('')
    
    if(newURL.includes('http://')) return truncateString(newURL.replace('http://', ''), truncateAt)
    else return truncateString(newURL.replace('https://', ''), truncateAt)
}

function truncateString(str, num) {
    if(str.length <= num) return str
    return str.slice(0, num) + '...'
}