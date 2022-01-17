import React,{useState} from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () =>{
       if(email === '' && password === ''){
           alert('Preencha todos os campos para realizar o login!')
       }else{
        if(email === 'admin@triphouse.com' && password === 'admin'){
            localStorage.setItem('login', 'admin')
            window.location.href = "http://localhost:3000/reservas"
        }
        else{
            localStorage.setItem('login', 'colaborador')
            window.location.href = "http://localhost:3000/reservas"
        }
       }
    }

    return (
        <div className='login-container'>
            <div className='card-login'>
                <h1>Login</h1>
                <form style={{marginTop: 30}} >
                    <div class="floating-form">
                        <input  onChange={(ev) => setEmail(ev.target.value)} type="email" class="form-control" id="name" autocomplete="off" required />
                        <label for="email">E-mail</label>
                    </div>
                    <div  style={{marginTop: 30}} class="floating-form">
                        <input  onChange={(ev) => setPassword(ev.target.value)} type="password" class="form-control" id="name" autocomplete="off" required />
                        <label for="password">Password</label>
                    </div>
                </form>

                <button onClick={handleLogin} className='btn-login' >Login</button>
                {/* <button onClick={handleLogin} className='btn-login' ><Link to={'/reservas'} >Login</Link></button> */}

            </div>
        </div>
            )
}