import React, { useState, useEffect } from 'react'
import './styles.css'

import Header from '../../components/Header'
import PageSelect from '../../components/pageSelect';
import MaterialTable from 'material-table';
import AlertModal from '../../components/Modal/Alert';

import axios from 'axios'
import { Link } from 'react-router-dom';

 const  Veiculos = () => {

    const [data, setData] = useState([])
    const [values, setValues] = useState({})
    const [modal, setModal] = useState(false)

    const handleDelete = async (id) =>{
        await axios.delete(`http://localhost:5051/delete-veiculo/${id}`).then( res => {
            alert('Deletado com sucesso')
            window.location.reload();
        }).catch( err => {
            alert('Algo deu errado, confira o log')
            console.log('Error', err)
        })
    }

    useEffect(() => {
        async function loadData() {
            await axios.get('http://localhost:5051/veiculos').then(res => {
                setData(res.data)
                console.log(data)
            }).catch(error => console.log('Ouve um erro', error))
        }
        loadData()
    }, [])

    return (
        <>
            <Header />
            <div className='.container' >
                <div className='container-dash' >
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
                        <PageSelect text="Veiculos" />
                        <Link to={'/form/2'} className='btn-cadastro'>Cadastrar Veiculo</Link>
                    </div>
                    <MaterialTable
                        title="Procure os colaboradores"
                        columns={[
                            { title: 'ID', field: 'id' },
                            { title: 'Nome', field: 'name' },
                            { title: 'Placa', field: 'placa' },
                            { title: 'Situacao', field: 'situacao' },
                            { title: 'data', field: 'data', type: "date" },
                        ]}
                        data={data}  
                        actions={[
                            {
                              icon: 'edit',
                              tooltip: 'Editar',
                              onClick: (event, rowData) => { setValues(rowData); setModal(true) }
                            },
                            {
                              icon: 'delete',
                              tooltip: 'Excluir',
                              onClick: (event, rowData) => handleDelete(rowData.id)
                            }
                          ]}
                        options={{
                            search: true,
                            actionsColumnIndex: -1
                        }}
                    />
                    {
                        modal === true ?
                        <AlertModal 
                        type={1}
                        id={values.id}
                        placa={values.placa}
                        situacao={values.situacao}
                        data={values.data}
                        modal setModal={setModal} />
                        :
                        null
                    }
                </div>
            </div>
        </>

    )
}

export default Veiculos;