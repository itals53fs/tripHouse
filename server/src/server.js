const express = require('express')
const router = require('./router/index')
const https = require('https')
const fs = require('fs')
const app = express()
const app2 = express()
const porta = 5050
const cors = require('cors')
const options = {
    key: fs.readFileSync('certificates/key.pem'),
    cert: fs.readFileSync('certificates/cert.pem')
}
app.use(cors())
app.use(router.colaboradores,
    router.clientes,
    router.reservas,
    router.login)
    
app.use(express.static(__dirname+'/'))
https
.createServer(options,app).listen(porta, function () {
    console.log(`Rodando na porta ${porta}`)
})
 

app2.use(cors())
app2.use(router.veiculos, router.lgpd)
app2.listen(5051, ()=>'rodando na 5051')

