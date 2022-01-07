import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login-container'>
            <div className='card-login'>
                <h1>Login</h1>
                <form style={{marginTop: 30}} >
                    <div class="floating-form">
                        <input type="email" class="form-control" id="name" autocomplete="off" required />
                        <label for="email">E-mail</label>
                    </div>
                    <div  style={{marginTop: 30}} class="floating-form">
                        <input type="password" class="form-control" id="name" autocomplete="off" required />
                        <label for="password">Password</label>
                    </div>
                </form>

                <button className='btn-login' ><Link to={'/reservas'} >Login</Link></button>

            </div>
        </div>
            )
}