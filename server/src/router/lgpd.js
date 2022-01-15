const arq = require('../arquivo')
const express = require('express')
const lgpd = express()

lgpd.use(express.json({extends:true}))

lgpd.get('/lgpd', (req, res)=>{
    //const data = arq.getAll('lgpd')
    res.send(`import './styles.css'

    const CardReserva = ({reserva, cliente, veiculo, dInicio, dFim, valor}) =>{
        return(
            <div className="card-reerva-container">
                <div className="card-reserva-info" >
                    <h4>ID Reserva: <span>{reserva}</span></h4>
                    <h4>ID Cliente: <span>{cliente}</span></h4>
                    <h4>ID Veiculo: <span>{veiculo}</span></h4>
                    <h4>Data Inicio:<span>{dInicio}</span> </h4>
                    <h4>Data Fim: <span>{dFim}</span></h4>
                    <h4>Valor: <span>{valor}</span></h4>
                </div>
                <div className='card-reerva-status' ></div>
            </div>
        )
    }
    
    export default CardReserva;`)
})

module.exports = lgpd