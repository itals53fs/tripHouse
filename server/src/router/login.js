const arq = require('../arquivo')
const express = require('express')
const login = express()
login.use(express.json({extends:true}))


login.post('/login', (req, res)=>{

    try{
        const {email, password} = req.body;
        const resp = arq.confirme('login',{email, password})
        // console.log(resp)
        res. send(resp)
    }catch(e){
        res.send(e)
    }

})

module.exports = login