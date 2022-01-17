import axios from "axios";
import { useState } from "react"


import './styles.css'


const FormVeiculoCliente = ({eId, ePlaca, eSituacao, eData}) => {

    const [values, setValues] = useState({
        id: eId,
        placa: ePlaca,
        situacao: eSituacao,
        data: eData,
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
        await axios.put('http://localhost:5051/alterar-veiculo',values).then( res => {
            alert('Atualizado com sucesso')
            window.location.href = "https://localhost:3000/veiculos"
        }).catch( err => {
            alert('Não foi possivel atualizar')
            console.log('Deu erro', err)
        })
    }

    return (
        <div  className="container-form-create">
            <form  className="form-create"  style={{ marginTop: 30 }} >
                <h1>Editar veiculo</h1>
                <div class="floating-form">
                    <input defaultValue={ePlaca} onChange={handleChange} type="text" class="form-control" name="placa" id="placa" autocomplete="off" required />
                    <label for="placa">Placa</label>
                </div>
                <div class="floating-form">
                    <input defaultValue={eSituacao} onChange={handleChange} type="text" class="form-control" name="situacao" id="situacao" autocomplete="off" required />
                    <label for="situacao">Situação</label>
                </div>
                <div class="floating-form">
                    <input defaultValue={eData} onChange={handleChange} type="text" class="form-control" name="data" id="data" autocomplete="off" required />
                    <label for="data">Data</label>
                </div>
                {/* <div style={{ marginTop: 30 }} class="floating-form">
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
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input defaultValue={eLogin} onChange={handleChange} type="text" class="form-control" name="login" id="login" autocomplete="off" required />
                    <label for="login">Login</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input  defaultValue={eSenha} onChange={handleChange} type="password" class="form-control" name="senha"  id="password" autocomplete="off" required />
                    <label for="senha">Senha</label>
                </div> */}

                <button style={{ marginTop: 30 }}  type="button" className='btn-login' onClick={onsubmit}>Editar</button>
            </form>

            
        </div>
    )
}

export default FormVeiculoCliente