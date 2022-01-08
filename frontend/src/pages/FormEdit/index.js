import { useParams } from "react-router-dom"
import FormColaboradoresEdit from "../../components/Form/FormColaboradoreEdit"

const FormEdit = () =>{

    let {id} = useParams()
    console.log(id)
    return (
        <>
        { id === '0' ? <FormColaboradoresEdit /> : null }
        { id === '1' ? <h1>Reservas</h1> : null }
        </>
    )
}
export default FormEdit