const express = require('express')
const router = require('./router/index')
const https = require('http')
const fs = require('fs')
const app = express()
const porta = 5050
const cors = require('cors')
const options = {
    key: fs.readFileSync('certificates/key.pem'),
    cert: fs.readFileSync('certificates/cert.pem')
}
app.use(cors())
app.use(router.colaboradores,
    router.clientes,
    router.veiculos,
    router.reservas)
    
app.use(express.static(__dirname+'/'))



https
.createServer(options,app).listen(porta, function () {
    console.log(`Rodando na porta ${porta}`)
})
 