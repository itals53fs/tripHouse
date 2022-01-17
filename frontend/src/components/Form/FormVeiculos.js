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

const FormVeiculos = () => {

    const [values, setValues] = useState(initialValues)

    function handleChange(evt) {
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value
        });
    }

    const onsubmit = async () =>{
        await axios.post('http://localhost:5051/cadastrar-veiculo',values).then( res => {
            alert('Cadastrado com sucesso')
            window.location.href = "https://localhost:3000/veiculos"
        }).catch( err => console.log('Deu erro', err))
    }

    return (
        <div  className="container-form-create">
            <form  className="form-create"  style={{ marginTop: 30 }} >
                <h1>Veiculos</h1>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input  onChange={handleChange} type="text" class="form-control" name="placa" id="placa" autocomplete="off" required />
                    <label for="placa">Placa</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input  onChange={handleChange} type="text" class="form-control" name="situacao" id="situacao" autocomplete="off" required />
                    <label for="situacao">Situação</label>
                </div>
                <div style={{ marginTop: 30 }} class="floating-form">
                    <input  onChange={handleChange} type="text" class="form-control" name="data" id="data" autocomplete="off" required />
                    <label for="data">Data</label>
                </div>

                <button style={{ marginTop: 30 }}  type="button" className='btn-login' onClick={onsubmit}  >Cadastrar</button>
            </form>

            
        </div>
    )
}

export default FormVeiculos