const express = require('express');
const router= express.Router()
const authController = require('../controller/authController');

router.post('/reg', authController.postRegister)

router.post('/login', authController.postLogin)

router.post('/logout',authController.logout)

module.exports=router