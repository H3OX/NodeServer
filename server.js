const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})


app.get('/', (req, res) => {
    res.send({
        name: 'Andrew',
        likes: [
            'Biking', 
            'Cities'
        ],
    })
})



app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
    })
})

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        name: 'George',
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