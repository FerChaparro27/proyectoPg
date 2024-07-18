import * as React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./transaction.css"
import NavBar from '../components/navbar/NavBar';
import TransactionsTable from '../components/Tables/BasicTable';


function TransactionPage(){
    const navigate = useNavigate()

    const IrNuevaTransferencia= () => {
        navigate('/transaction_nuevaTransaccion')
    }

    return(
        <main>
            <NavBar></NavBar>
            <Box className='transactionPage'>
                <Button variant="contained" onClick={IrNuevaTransferencia} style={{width:'95%', marginBottom:'20px'}}>Añadir nueva transferencia</Button>
                <TransactionsTable></TransactionsTable>
            </Box>
            
        </main>
    )
}

export default TransactionPage;

