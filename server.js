const express = require('express');
const app = express();
const hbs = require('hbs');


app.get('/', (req, res) => {
    res.send({
        name: 'Andrew',
        likes: [
            'Biking', 
            'Cities'
        ]
    })
})

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        year: new Date().getFullYear()
    })
})

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        name: 'George',
        year: new Date().getFullYear(),
        day: new Date().getDay(),
        hrs: new Date().getHours(),
        mins: new Date().getMinutes()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        error: 'True',
        errorCode: '404',
        reason: 'Unable to fulfill request'
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})