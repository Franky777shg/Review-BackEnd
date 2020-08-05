const router = require('express').Router()

const { testController } = require('../controllers')

router.get('/test', testController.text)
router.get('/params/:id', testController.testParams)
router.get('/pagination/:total/:halaman', testController.testParams)
router.get('/get', testController.testQuery)
router.post('/body', testController.handleBody)

module.exports = router