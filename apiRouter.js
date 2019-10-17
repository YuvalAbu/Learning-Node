// Imports
var express = require('express')
var usrCtrl = require('./Routes/usersController')

// Router
exports.router = (() => {
	var apiRouter = express.Router()

	// User Routes
	apiRouter.route('/users/register/').post(usrCtrl.register)
	apiRouter.route('/users/login/').post(usrCtrl.login)
	apiRouter.route('/users/me/')
		.get(usrCtrl.getUserProfile)
		.put(usrCtrl.updateUserProfile)

	return apiRouter;
})();