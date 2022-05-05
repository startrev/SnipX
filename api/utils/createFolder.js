import fs from 'fs'
import path from 'path'

export default function createFolder(entry) {
    let _path = path.resolve('api', 'public', entry)

    if(!fs.existsSync(_path)) fs.mkdirSync(_path)

    if(fs.existsSync(_path)) return _path
    else return undefined
}