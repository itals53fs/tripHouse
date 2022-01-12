import { useParams } from "react-router-dom"
import FormColaboradores from "../../components/Form/FormColaboradore"
import FormCliente from "../../components/Form/FormCliente"
import FormVeiculos from "../../components/Form/FormVeiculos"

const FormPage = () =>{

    let {id} = useParams()
    console.log(id)
    return (
        <>
        { id === '0' ? <FormColaboradores /> : null }
        { id === '1' ? <FormCliente /> : null }
        { id === '2' ? <FormVeiculos /> : null }
        </>
    )
}
export default FormPage