const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/getUserInfo', (req, res) => {
    console.log(2);
    res.send('hi')
})

app.post('/login', (req, res) => {
    console.log(req.body);
    const status = Object.assign({}, req.body, {
        status: 'done'
    })
    res.send(status)
})

app.listen(3001, () => {
    console.log('running...');
})