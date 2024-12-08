import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Signin/SignIn';
import RecoverPassword from './RecoverPassword/RecoverPassword';
import Home from './HomePage/Home';
import Register from './Register/Register';
import Clients from './page_clients/clients';
import TransactionPage from './Transactions/transaction'
import NuevaTransferencia from './Transactions/crearTransferencia'
import FormCreateClient from './page_clients/form_client';
import Instructor from './page_instructor/instructor';
import FormCreateInstructor from './page_instructor/form_instructor';
import Activities from './activities/activities';
import Routine from './routine/routine';
import MyAccount from './my_account/my_account';
import NuevaActivity from './activities/activities_nuevaActividad';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path='/recover-password' element={<RecoverPassword />} />
                <Route path="/home" element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/clients' element={<Clients />} />
                <Route path='/create_client' element={<FormCreateClient />} />
                <Route path='/instructor' element={<Instructor />} />
                <Route path='/create_instructor' element={<FormCreateInstructor />} />
                <Route path='/transaction' element={<TransactionPage />} />
                <Route path='/transaction_nuevaTransaccion' element={<NuevaTransferencia />} />
                <Route path='/activities' element={<Activities />} />
                <Route path='/routines' element={<Routine />} />
                <Route path='/my-account' element={<MyAccount />} />
                <Route path='/add_activity' element={<NuevaActivity />} />
                
         </Routes>

        </BrowserRouter>
    )
}