const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/product', require('./product'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
