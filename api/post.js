import express from 'express'
const router = express.Router()

import createFolder from './utils/createFolder.js'
import createFile from './utils/createFile.js'

router.post('/', function (req, res, next) {

    let folderExists = createFolder(req.body.entryName)
    if(folderExists) createFile(folderExists, req.body.fileName, req.body.fileData)

    res.json({ "from": "postRouter" })
})

export default router