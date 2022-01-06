const arq = require('../arquivo')
const express = require('express')
const veiculos = express()
veiculos.use(express.json({extends:true}))


veiculos.get('/veiculos', (req, res) => {
    try{
        const veiculos = arq.getAll('veiculos');
        res.send(veiculos)
    }catch(e){
        res.send(e)
    }
})

veiculos.get('/veiculo/:id', (req, res) =>{
    try{
        const {id} = req.params;
        const veiculos = arq.read('veiculos');
        const itemSelecionado = veiculos.find( item => item.id == id);
        if(typeof itemSelecionado != 'object'){
            return res.status(404).send({mensagem: "não encontrado"})
        }
       
        return res.send(itemSelecionado);
    }catch(e){
        res.send(e)
    }
})

veiculos.post('/cadastrar-veiculo', (req, res)=>{

    try{
        const {placa, situacao, data} = req.body;
        const id = Math.random().toString(32).substr(2, 9)
        arq.save('veiculos',{id, placa, situacao, data})
        res.send({id})
    }catch(e){
        res.send(e)
    }

})
veiculos.put('/alterar-veiculo', (req , res)=>{
    try{
        
        const {id, placa, situacao, data} = req.body;
        const e = arq.alterar('veiculos', {id, placa, situacao, data})
        return res.send(e)
    }catch(e){
        res.send(e)
    }
})

veiculos.delete('/delete-veiculo/:id', (req, res)=>{
    try{
        const {id} = req.params
        const resp = arq.remove('veiculos', id)
        res.send(resp)
    }catch(e){
        res.send(e)
    }
})

module.exports = veiculos