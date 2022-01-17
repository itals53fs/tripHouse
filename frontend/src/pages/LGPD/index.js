import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './styles.css'


const LGPD = () =>{

    const [data, setData] = useState('')

    useEffect(()=>{
        async function loadLGPD(){
            await axios.get('http://localhost:5051/lgpd').then( res =>{
                console.log(res.data)
                setData(res.data)
                document.querySelector('.conteudo').innerHTML = res.data
            }).catch(err => console.log('error', err))
        }
        loadLGPD()
    })

    return(
       <div className='container-lgpd'>
        <div className='conteudo' >

         </div>
         <Link to="/" >Voltar para Login</Link>
       </div>
    )
}

export default LGPD