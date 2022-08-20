const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

let userData = [];

app.post('/login', async (req, res) => {
    fs.readFile('./storage/localDb.json', "utf8", (err, jsonString) => {
        if (err) throw err;
        userData = JSON.parse(jsonString || '[]')
    })

    const { email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const desiredUser = userData.find(item => item.email === email && item.password == hashPassword)
    if (desiredUser) {
        res.json(desiredUser);
    }

    return res.status(400).send({
        message: 'User password do not match.'
    });
})

app.post('/register', async (req, res) => {
    fs.readFile('./storage/localDb.json', "utf8", (err, jsonString) => {
        if (err) throw err;
        userData = JSON.parse(jsonString || '[]')
    })

    const { username, email, password } = req.body
    if (userData.some(item => item.email === email)) {
        res.status(400).send({
            message: 'User already exist with given user name.'
        });
    }
    const newUser = {
        id: v4(),
        username, email, password: await bcrypt.hash(password, 10)
    }

    fs.writeFile('./storage/localDb.json', JSON.stringify([...userData, newUser], null, 2))

    res.send(newUser);
})

const server = http.createServer(app)

server.listen(3000, () => {
    console.log('server running in port 3000')
})