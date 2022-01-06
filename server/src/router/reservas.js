const arq = require('../arquivo')
const express = require('express')
const reservas = express()
reservas.use(express.json({extends:true}))


reservas.get('/reservas', (req, res) => {
    try{
        const reservas = arq.getAll('reservas');
        res.send(reservas)
    }catch(e){
        res.send(e)
    }
})

reservas.get('/reserva/:id', (req, res) =>{
    try{
        const {id} = req.params;
        const reservas = arq.read('reservas');
        const itemSelecionado = reservas.find( item => item.id == id);
        if(typeof itemSelecionado != 'object'){
            return res.status(404).send({mensagem: "não encontrado"})
        }
       
        return res.send(itemSelecionado);
    }catch(e){
        res.send(e)
    }
})

reservas.post('/cadastrar-reserva', (req, res)=>{

    try{
        const {IdVeiculo,IdCliente, dataInicio, dataFim, valor, confirmacao } = req.body;
        const id = Math.random().toString(32).substr(2, 9)
        arq.save('reservas',{id, IdVeiculo,IdCliente, dataInicio, dataFim, valor, confirmacao })
        res.send({id})
    }catch(e){
        res.send(e)
    }

})
reservas.put('/alterar-reserva', (req , res)=>{
    try{
        
        const {id, IdVeiculo,IdCliente, dataInicio, dataFim, valor, confirmacao } = req.body;
        const e = arq.alterar('reservas', {id, IdVeiculo,IdCliente, dataInicio, dataFim, valor, confirmacao })
        return res.send(e)
    }catch(e){
        res.send(e)
    }
})

reservas.delete('/cancelar-reserva/:id', (req, res)=>{
    try{
        const {id} = req.params
        const resp = arq.remove('reservas', id)
        res.send(resp)
    }catch(e){
        res.send(e)
    }
})

module.exports = reservas