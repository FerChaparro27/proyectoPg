import * as React from 'react';
import { TableAxios } from '../components/Tables/TableAxios';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./transaction.css"


function TransactionPage(){
    const navigate = useNavigate()

    const IrNuevaTransferencia= () => {
        navigate('/transaction_nuevaTransaccion')
    }

    return(
        <main>
            <Box className='transactionPage'>
                <Button variant="contained" onClick={IrNuevaTransferencia} style={{width:'60%', marginBottom:'20px'}}>Añadir nueva transferencia</Button>
                <TableAxios></TableAxios>
            </Box>
            
        </main>
    )
}

export default TransactionPage;

