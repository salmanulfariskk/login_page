const router = require('express').Router()
const {isAuthed, isNotAuthed} = require('../middlewares/auth')
const {home,showLogin,session,logout} = require('../controllers/userController')

//get request 
router.get('/',isAuthed,home)
router.get('/login',isNotAuthed,showLogin)

//post request
router.post('/login',isNotAuthed,session)
router.post('/logout',isAuthed,logout)




module.exports = router