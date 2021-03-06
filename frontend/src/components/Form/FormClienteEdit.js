import axios from "axios";
import { useState } from "react"


import './styles.css'


const FormClienteEdit = ({eId, eName, eEndereco, eEmail, eCpf, eTelefone, eLogin, eSenha}) => {

    const [values, setValues] = useState({
        id: eId,
        name: eName,
        endereco: eEndereco,
        email: eEmail,
        cpf: eCpf,
        telefone: eTelefone,
        login: eLogin,
        senha: eSenha
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value
        });
    }

    const onsubmit = async () =>{
        console.log(values)
        await axios.put('https://localhost:5050/alterar-cliente',values).then( res => {
            alert('Atualizado com sucesso')
            window.location.href = "https://localhost:3000/clientes"
        }).catch( err => {
            alert('Não foi possivel atualizar')
            console.log('Deu erro', err)
        })
    }

    return (
        <div  className="container-form-create">
            <form  className="form-create"  style={{ marginTop: 30 }} >
                <h1>Editar Cliente</h1>
                <div class="floating-form">
                    <input defaultValue={eName} onChange={handleChange} type="text" class="form-control" name="name" id="name" autocomplete="off" required />
                    <label for="name">Nome</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input defaultValue={eEmail} onChange={handleChange} type="email" class="form-control" name="email" id="email" autocomplete="off" required />
                    <label for="email">Email</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input defaultValue={eEndereco} onChange={handleChange} type="text" class="form-control" name="endereco" id="endereco" autocomplete="off" required />
                    <label for="endereco">Endereço</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input defaultValue={eCpf} onChange={handleChange} type="text" class="form-control" name="cpf" id="cpf" autocomplete="off" required />
                    <label for="cpf">CPF</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input defaultValue={eTelefone} onChange={handleChange} type="text" class="form-control" name="telefone" id="telefone" autocomplete="off" required />
                    <label for="telefone">Telefone</label>
                </div>

                <button style={{ marginTop: 30 }}  type="button" className='btn-login' onClick={onsubmit}>Editar</button>
            </form>

            
        </div>
    )
}

export default FormClienteEdit