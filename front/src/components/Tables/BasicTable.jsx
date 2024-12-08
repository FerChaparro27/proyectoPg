import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // Almacena la transacción seleccionada para eliminar
  const url = 'http://127.0.0.1:8000/transactions/';

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(url);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleClickOpen = (transaction) => {
    setSelectedTransaction(transaction); // Establece la transacción seleccionada
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTransaction(null); // Resetea la transacción seleccionada
  };

  const handleConfirmDelete = () => {
    if (selectedTransaction) {
      axios
        .delete(`http://127.0.0.1:8000/transactionsRetrieve/${selectedTransaction.id}/`)
        .then(() => {
          setTransactions(transactions.filter((t) => t.id !== selectedTransaction.id));
          handleClose();
        })
        .catch((error) => {
          console.error('There was an error deleting the transaction!', error);
        });
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <TableContainer sx={{ width: '95%' }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Origen</TableCell>
              <TableCell>Destino</TableCell>
              <TableCell>Responsable</TableCell>
              <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.origin}</TableCell>
                <TableCell>{transaction.destination}</TableCell>
                <TableCell sx={{ width: '15%' }}>{transaction.responsable}</TableCell>
                <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
                  <IconButton onClick={() => handleClickOpen(transaction)} aria-label="Eliminar">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog de confirmación */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas seguro de eliminar la transacción: {selectedTransaction?.id} de monto ${selectedTransaction?.amount}?
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
    </>
  );
};

export default TransactionsTable;
