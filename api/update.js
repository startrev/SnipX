import express from 'express'
const router = express.Router()

router.post('/', function (req, res, next) {
    // req.params
    // req.body
    
    res.json({ "from": "updateRouter" })
})

export default router