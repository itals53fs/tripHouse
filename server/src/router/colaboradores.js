const arq = require('../arquivo')
const express = require('express')
const colaboradores = express()
colaboradores.use(express.json({ extends: true }))

colaboradores.get('/', (req, res) => {
    res.send("rodando meu")
})

colaboradores.get('/colaboradores', (req, res) => {
    try {
        const colaboradores = arq.getAll('colaboradores');
        res.send(colaboradores)
    } catch (e) {
        res.send(e)
    }
})

colaboradores.get('/colaborador/:id', (req, res) => {
    try {
        const { id } = req.params;
        const colaboradores = arq.read('colaboradores');
        const itemSelecionado = colaboradores.find(item => item.id == id);
        if (typeof itemSelecionado != 'object') {
            return res.status(404).send({ mensagem: "não encontrado" })
        }

        return res.send(itemSelecionado);
    } catch (e) {
        res.send(e)
    }
})

colaboradores.post('/cadastrar-cobaborador', (req, res) => {

    try {
        const { name, endereco, email, cpf, telefone, login, senha } = req.body;
        const id = Math.random().toString(32).substr(2, 9)
        arq.save('colaboradores', { id, name, endereco, email, cpf, telefone, login, senha })
        res.send({ id })
    } catch (e) {
        res.send(e)
    }

})
colaboradores.put('/alterar-colaborador', (req, res) => {
    try {

        const { id,name, endereco, email, cpf, telefone, login, senha } = req.body;
        const e = arq.alterar('colaboradores', { id, name, endereco, email, cpf, telefone, login, senha })
        return res.send(e)
    } catch (e) {
        res.send(e)
    }
})

colaboradores.delete('/delete-colaborador/:id', (req, res) => {
    try{
        const { id } = req.params
        const resp = arq.remove('colaboradores', id)
        res.send(resp)
    }catch(e){
        res.send(e)
    }
})

module.exports = colaboradores