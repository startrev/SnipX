import express from 'express'
const router = express.Router()

router.get('/', function (req, res, next) {
    // req.params
    // req.body

    res.json({ "from": "getRouter" })
})

export default router