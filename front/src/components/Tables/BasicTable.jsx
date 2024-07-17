import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { display, width } from '@mui/system';
import "./BasicTable.css"

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  const url = ("http://127.0.0.1:8000/transactions/")

  const deleteClick = () =>{
    console.log("dato eliminado")
  }


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(url);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TableContainer sx={{width:"95%"}}component={Paper}>
      <Table className="Table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Monto</TableCell>
            <TableCell>Origen</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell>Responsable</TableCell>
            <TableCell sx={{display:'flex', justifyContent:'center'}}>Eliminar</TableCell>
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
              <TableCell sx={{width:"15%"}}>{transaction.responsable}</TableCell>
              <TableCell sx={{display:'flex', justifyContent:'center'}}>{<IconButton onClick={deleteClick}aria-label="Example"> <DeleteIcon></DeleteIcon></IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;