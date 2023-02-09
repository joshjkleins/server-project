const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());

app.use(express.urlencoded());

app.get('/', function(req, res) {
    console.log("someone is at the root!")
    res.sendFile(path.join(__dirname, '/html/index.html'));
})

app.get('/about', function(req, res) {
    console.log("someone is here at the about page!")
    res.sendFile(path.join(__dirname, '/html/about.html'))
})

app.post('/form-data', function(req, res) {
    console.log('Someone submitted a form!')
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(3000, function(){
    console.log("Server is listening on port 3000!")
})

