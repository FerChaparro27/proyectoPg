import React, { useState } from 'react';
import './clientCard.css';
import axios from 'axios';
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ClientCard = ({ client, onDelete }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDelete = () => {
        axios.delete(`http://127.0.0.1:8000/clientsRetrieve/${client.id}/`)
            .then(response => {
                onDelete(client.id);
                handleClose();
            })
            .catch(error => {
                console.error("There was an error deleting the client!", error);
            });
    };

    return (
        <div className="clientCard">
            <ul className="clientTable">
                <li>id: {client.id}</li>
                <li>Name: {client.name}</li>
                <li>Lastname: {client.lastname}</li>
            </ul>
            <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete {client.name} {client.lastname}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ClientCard;
