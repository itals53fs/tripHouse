const arq = require('../arquivo')
const express = require('express')
const clientes = express()

clientes.use(express.json({extends:true}))

clientes.get('/clientes', (req, res) => {
    try{
        const clientes = arq.getAll('clientes');
        res.send(clientes)
    }catch(e){
        res.send(e)
    }
})

clientes.get('/cliente/:id', (req, res) =>{
    try{
        const {id} = req.params;
        const clientes = arq.read('clientes');
        const itemSelecionado = clientes.find( item => item.id == id);
        if(typeof itemSelecionado != 'object'){
            return res.status(404).send({mensagem: "não encontrado"})
        }
       
        return res.send(itemSelecionado);
    }catch(e){
        res.send(e)
    }
})

clientes.post('/cadastrar-cliente', (req, res)=>{

    try{
        const {name, endereco, email, cpf, telefone} = req.body;
        const id = Math.random().toString(32).substr(2, 9)
        arq.save('clientes',{id, name, endereco, email, cpf, telefone})
        res.send({id})
    }catch(e){
        res.send(e)
    }

})
clientes.put('/alterar-cliente', (req , res)=>{
    try{
        const {id, name, endereco, email, cpf, telefone} = req.body;
        const e = arq.alterar('clientes', {id, name, endereco, email, cpf, telefone})
        return res.send(e)
    }catch(e){
        res.send(e)
    }
})

clientes.delete('/delete-cliente/:id', (req, res)=>{
    try{
        const {id} = req.params
        const resp = arq.remove('clientes', id)
        res.send(resp)
    }catch(e){
        res.send(e)
    }
})

module.exports = clientes