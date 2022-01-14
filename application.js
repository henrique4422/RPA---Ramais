// const express = require('express')
// const application = express()
// const port = 3002
// const mysql = require('mysql')
// const cors = require('cors')

// const db = mysql.createConnection({
//     user:'root',
//     host:'localhost',
//     password:'',
//     database:'rpalog',
// });

// application.use(express.urlencoded({ extended: true }));
// application.use(express.json())

// application.use(express.static('public'))
// application.use('/css', express.static(__dirname + 'public/css'))
// application.use('/imagens', express.static(__dirname + 'public/imagens'))
// application.use('/js', express.static(__dirname + 'public/js'))
// application.use('/fonte', express.static(__dirname + 'public/fonte'))

// application.get('', (req, res) => {
//     res.sendFile(__dirname + '/public/html/ramaisCadastro.html')
// })

// application.listen(port, () => console.info('Listening on port  '+ port))

const express = require('express');
const mysql = require('mysql');
const application = express();

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'rpalog',
});

const port = 3002;

application.use(express.static('public'))
application.use('/css', express.static(__dirname + 'public/css'))
application.use('/imagens', express.static(__dirname + 'public/imagens'))
application.use('/js', express.static(__dirname + 'public/js'))
application.use('/fonte', express.static(__dirname + 'public/fonte'))

application.get('', (req, res) => {
    res.sendFile(__dirname + '/public/html/ramaisCadastro.html')
})

application.get('/consultaRamal/:ramal', (req, res) => {
    db.query('SELECT * FROM ramais WHERE ramal = ?', [req.params.ramal], (err, result) => {
        if (err) {
            console.log(err)
            res.send({acesso: false})
            return;
        }else{
            res.send(result)
        }
    })
})

application.get('/consulta', (req, res) => {
    db.query('SELECT * FROM ramais', [req.params.ramal], (err, result) => {
        if (err) {
            console.log(err)
            res.send({acesso: false})
            return;
        }else{
            res.send(result)
        }
    })
})

application.post('/insert', (req, res) => {
    db.query('INSERT INTO ramais (ramal, nome, departamento) VALUES (?, ?, ?)', [req.params.ramal, req.body.nome, req.body.departamento], (err, result) => {
        if (err) {
            console.log(err)
            res.send({acesso: false})
            return;
        }else{
            res.send(result)
        }
    })
})

application.listen(port, () => console.info('Listening on port  '+ port))