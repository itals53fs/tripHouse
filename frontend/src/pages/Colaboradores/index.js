import React, { useState, useEffect } from 'react'
import './styles.css'

import Header from '../../components/Header'
import PageSelect from '../../components/pageSelect';
import MaterialTable from 'material-table';

import axios from 'axios'

 const  Colaboradores = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        async function loadData() {
            await axios.get('http://localhost:5050/colaboradores').then(res => {
                setData(res.data)
            }).catch(error => console.log('Ouve um erro', error))
        }
        loadData()
    }, [])

    return (
        <>
            <Header />
            <div className='.container' >
                <div className='container-dash' >
                    <PageSelect text="Colaboradores" />
                    <MaterialTable
                        title="Procure os colaboradores"
                        columns={[
                            { title: 'ID', field: 'id' },
                            { title: 'Nome', field: 'name' },
                            { title: 'Endereço', field: 'endereco' },
                            { title: 'Email', field: 'email' },
                            { title: 'CPF', field: 'cpf', type: "numeric" },
                        ]}
                        data={data}  
                        actions={[
                            {
                              icon: 'edit',
                              tooltip: 'Editar',
                              onClick: (event, rowData) => alert("Você editou " + rowData.name)
                            },
                            {
                              icon: 'delete',
                              tooltip: 'Excluir',
                              onClick: (event, rowData) => alert("Você editou " + rowData.name)
                            }
                          ]}
                        options={{
                            search: true,
                            actionsColumnIndex: -1
                        }}
                    />
                </div>
            </div>
        </>

    )
}

export default Colaboradores;