// Top Level Imports
import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

// Routes
import postRouter from './api/post.js'

// Config
const basePath = path.resolve()
const snipxConfigPath = [basePath,'config.json']
const snipxPublicPath = [basePath, 'api', 'public']
let snipxConfig = JSON.parse(fs.readFileSync(path.join(...snipxConfigPath)))

// Express
const app = express()
const port = snipxConfig.port

// Express Middleware
app.set('views', basePath)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(...snipxPublicPath)))

// Express Router Routes
app.use('/api/post', postRouter)

// Express listen on user specified Port
app.listen(port, console.log(`SnipX is live: (port ${port})`))