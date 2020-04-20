const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { DECK } = require('../data/deck')

const gameSchema = new Schema(
	{
		playerOne: {
			type: mongoose.SchemaTypes.ObjectId,
		    ref: 'player',
		    required: true
		},
		playerTwo: {
			type: mongoose.SchemaTypes.ObjectId,
		    ref: 'player',
		    required: true
		},
		round: {
			type: Number,
			required: true,
			default: 1
		},
		deck: {
			type: Array,
			required: true,
			default: DECK
		}

	},
	{timestamps: true}

)

const Game = mongoose.model('Game', gameSchema)
module.exports = Game