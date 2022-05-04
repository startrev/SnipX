// Top Level Imports
import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

// Routes
import getRouter from './api/get.js'
import postRouter from './api/post.js'
import updateRouter from './api/update.js'
import deleteRouter from './api/delete.js'

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
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(...snipxPublicPath)))

// Express View Routes
app.get('/', function (req, res) {res.render('index')})
// Express Router Routes
app.use('/api/get', getRouter)
app.use('/api/post', postRouter)
app.use('/api/update', updateRouter)
app.use('/api/delete', deleteRouter)

// Express listen on user specified Port
app.listen(port, console.log(`SnipX is live: (port ${port})`))