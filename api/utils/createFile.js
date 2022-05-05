import fs from 'fs'
import path from 'path'

export default function createFile(entry, filename, filedata) {
    let _path = path.join(entry, filename)

    fs.writeFile(_path, filedata, (err) => {
        if (err) throw err
        console.log("The file was succesfully saved!")
    })
}