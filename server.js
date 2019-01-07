const app = require('express')();

app.get('/', (req, res) => {
    res.send({
        name: 'Andrew',
        likes: [
            'Biking', 
            'Cities'
        ]
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About this page</h1>')
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