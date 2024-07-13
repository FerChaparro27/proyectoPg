import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import Home from './HomePage/Home'
import SignIn from './Signin/SignIn'
import RecoverPassword from './RecoverPassword/RecoverPassword'
import Register from './Register/Register'
import TransactionPage from './Transactions/transaction'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import App from './app';
>>>>>>> 9c3bebf73f4108d91da04a2b4f5cecc2f7db5387
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import NuevaTransferencia from './Transactions/crearTransferencia'

<<<<<<< HEAD

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
=======
ReactDOM.createRoot(document.getElementById('root')).render(
>>>>>>> 9c3bebf73f4108d91da04a2b4f5cecc2f7db5387
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
)