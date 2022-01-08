import React,{useState, useEffect} from 'react'
import './styles.css'
import axios from 'axios'
import Header from '../../components/Header'
import PageSelect from '../../components/pageSelect'
import CardReserva from '../../components/CardReserva'

export default function Reservas() {
    const [reservas,setReservas] = useState([])

    useEffect(()=>{
        async function loadReservas(){
            await axios.get('http://localhost:5050/reservas').then( res =>{
                setReservas(res.data)
                console.log(reservas)
            }).catch( err => console.log('Error', err))
        }
        loadReservas()
    },[])

    return (
        <>
        <Header />
        <div className='.container' >
            <div className='container-dash' >
                <div style={{marginTop: '30px'}} >
                 <PageSelect   text={'Reservas'} />
                </div>
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 20} } >
                {
                    reservas.length > 0 ?
                   
                    reservas.map( item =>{
                        return(
                            <CardReserva 
                            cliente={item.IdCliente} 
                            reserva={item.id} 
                            veiculo={item.IdVeiculo} 
                            dInicio={item.dataInicio} 
                            dFim={item.dataFim}
                            valor={item.valor}
                            />
                        )
                    })
                    : null
                }
                </div>
            </div>
        </div>
        </>

    )
}