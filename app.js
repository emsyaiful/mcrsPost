const express = require('express')
    , app = express()
    , port = process.env.PORT || 3000
    , mongoose = require('mongoose')
    , Task = require('./api/models/todoListModel')
    , bodyParser = require('body-parser')


mongoose.Promise = global.Promise
mongoose.connect('mongodb://todo:todo@192.168.226.132/todoDB', {
    useMongoClient: true
})

var conn = mongoose.connection
conn.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/todoListRoutes')
routes(app)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)
console.log(`Server started RESTFul API on: ${port}`)