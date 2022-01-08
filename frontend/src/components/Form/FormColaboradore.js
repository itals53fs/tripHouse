import axios from "axios";
import { useState } from "react"


import './styles.css'
const initialValues = {
    name: "",
    endereco: "",
    email: "",
    cpf: "",
    telefone: "",
    login: "",
    senha: ""
}

const FormColaboradores = () => {

    const [values, setValues] = useState(initialValues)

    function handleChange(evt) {
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value
        });
    }

    const onsubmit = async () =>{
        await axios.post('http://localhost:5050/cadastrar-cobaborador',values).then( res => {
            alert('Cadastrado com sucesso')
            window.location.href = "http://localhost:3000/colaboradores"
        }).catch( err => console.log('Deu erro', err))
    }

    return (
        <div  className="container-form-create">
            <form  className="form-create"  style={{ marginTop: 30 }} >
                <div class="floating-form">
                    <input onChange={handleChange} type="text" class="form-control" name="name" id="name" autocomplete="off" required />
                    <label for="name">Nome</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input onChange={handleChange} type="email" class="form-control" name="email" id="email" autocomplete="off" required />
                    <label for="email">Email</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input onChange={handleChange} type="text" class="form-control" name="endereco" id="endereco" autocomplete="off" required />
                    <label for="endereco">Endereço</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input onChange={handleChange} type="text" class="form-control" name="cpf" id="cpf" autocomplete="off" required />
                    <label for="cpf">CPF</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input onChange={handleChange} type="text" class="form-control" name="telefone" id="telefone" autocomplete="off" required />
                    <label for="telefone">Telefone</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input onChange={handleChange} type="text" class="form-control" name="login" id="login" autocomplete="off" required />
                    <label for="login">Login</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input onChange={handleChange} type="password" class="form-control" name="senha"  id="password" autocomplete="off" required />
                    <label for="senha">Senha</label>
                </div>

                <button style={{ marginTop: 30 }}  type="button" className='btn-login' onClick={onsubmit}  >Cadastrar</button>
            </form>

            
        </div>
    )
}

export default FormColaboradores