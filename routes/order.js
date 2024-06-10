const express = require('express')
const passport = require('passport')
const router = express.Router()
const controller = require('../controllers/order')


router.get('/getAll', passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create)


module.exports = router