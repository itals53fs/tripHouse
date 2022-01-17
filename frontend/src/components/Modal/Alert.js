import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import './styles.css'
import FormColaboradoreEdit from '../Form/FormColaboradoreEdit';
import FormVeiculoEdit from '../Form/FormVeiculoEdit';
import FormClienteEdit from '../Form/FormClienteEdit';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertModal = ({type, id, name, endereco, email, cpf, telefone, login, senha, modal, placa, situacao, data, setModal = () =>{} }) => {

    const [open, setOpen] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setModal(false)
        // alert(modal)
    };


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {type === 0 ? <FormColaboradoreEdit eId={id} eName={name} eTelefone={telefone} eSenha={senha} eLogin={login} eEndereco={endereco} eEmail={email} eCpf={cpf} /> : null }
                {type === 1 ? <FormVeiculoEdit eId={id} ePlaca={placa} eSituacao={situacao} eData={data} /> : null }
                {type === 2 ? <FormClienteEdit eId={id} eName={name} eTelefone={telefone}  eEndereco={endereco} eEmail={email} eCpf={cpf}/> : null }

                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    {/* <Button onClick={handleClose}>Agree</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertModal