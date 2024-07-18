import React, { useState } from 'react';
import axios from 'axios';
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './instructorCard.css';

const InstructorCard = ({ instructor, onDelete }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDelete = () => {
        axios.delete(`http://127.0.0.1:8000/instructorRetrieve/${instructor.id}/`)
            .then(response => {
                onDelete(instructor.id);
                handleClose();
            })
            .catch(error => {
                console.error("There was an error deleting the instructor!", error);
            });
    };

    return (
        <div className="instructorCard">
            <ul className="instructorTable">
                <li>id: {instructor.id}</li>
                <li>Name: {instructor.name}</li>
                <li>Lastname: {instructor.lastname}</li>
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
                        Are you sure you want to delete {instructor.name} {instructor.lastname}?
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

export default InstructorCard;
