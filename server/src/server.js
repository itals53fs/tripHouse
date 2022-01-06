const express = require('express')
const router = require('./router/index')
const openssl = require('openssl-nodejs')
const https = require('https')
const fs = require('fs')
const app = express()
const porta = 3000
const options = {
    key: fs.readFileSync('certificates/key.pem'),
    cert: fs.readFileSync('certificates/cert.pem')
}
app.use(router.colaboradores, router.clientes)
app.use(express.static(__dirname+'/'))



https
.createServer(options,app).listen(porta, function () {
    console.log(`Rodando na porta ${porta}`)
})
 