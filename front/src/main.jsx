import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './HomePage/Home'
import SignIn from './Signin/SignIn'
import RecoverPassword from './RecoverPassword/RecoverPassword'
import Register from './Register/Register'
import TransactionPage from './Transactions/transaction'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import NuevaTransferencia from './Transactions/crearTransferencia'


function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/recover-password' element={<RecoverPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/transaction' element={<TransactionPage/>}/>
        <Route path='/transaction_nuevaTransaccion' element={<NuevaTransferencia/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <CssBaseline />
    <Main />
  </React.StrictMode>
);


