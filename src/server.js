const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 7777

app.use(cors())
app.use(express .json())

// Mongo Connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true} )
const connection = mongoose.connection
connection.once('open', () => {
	console.log("Mongo connected")
})


const gamesRouter = require('./server/resources/games/game.routes')
const usersRouter = require('./server/resources/users/user.routes')

app.use('/games', gamesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
	console.log(`We up and runnin on port: ${port}`)
})


//import { Game } from './games/game.model'
