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
        const clientes = arq.getAll('clientes')
        const itemselecionado = clientes.findIndex(element => element.id === id)
    
        if(itemselecionado>-1){
            clientes[itemselecionado] = {id, name, endereco, email, cpf, telefone}
            res.send({messege: "alterado com sucesso"})
            arq.save('clientes', clientes)
        }
        else{
            res.status(404).send({messege:"Não encontardo"})
        }
    }catch(e){
        res.send(e)
    }
})

clientes.delete('/delete-cliente/:id', (req, res)=>{
    const {id} = req.params
    const resp = arq.remove('clientes', id)
    res.send(resp)
})

module.exports = clientes