import { useParams } from "react-router-dom"
import FormColaboradores from "../../components/Form/FormColaboradore"

const FormPage = () =>{

    let {id} = useParams()
    console.log(id)
    return (
        <>
        { id === '0' ? <FormColaboradores /> : null }
        { id === '1' ? <h1>Reservas</h1> : null }
        </>
    )
}
export default FormPage