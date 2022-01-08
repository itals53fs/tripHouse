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

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertModal = ({id, name, endereco, email, cpf, telefone, login, senha, modal, setModal = () =>{} }) => {

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
            <FormColaboradoreEdit eId={id} eName={name} eTelefone={telefone} eSenha={senha} eLogin={login} eEndereco={endereco} eEmail={email} eCpf={cpf} />
            
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertModal