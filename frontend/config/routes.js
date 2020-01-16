const router = require('express').Router()
// const secureRoute = require('../lib/secureRoute')
// const partyController = require('../models/Party')
const authController = require('../controllers/auth')

// router.put('/stories/:id', secureRoute, partyController.update)
// router.delete('/stories/:id', secureRoute, partyController.delete)

router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router