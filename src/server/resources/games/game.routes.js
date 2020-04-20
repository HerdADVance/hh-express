const router = require('express').Router()
let Game = require('./game.model')

router.route('/').get((req, res) => {
	Game.find()
		.then(games => res.json(games))
		.catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
	const username = req.body.username
	const newUser = new User({username})

	newUser.save()
		.then(() => res.json('User added'))
		.catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router