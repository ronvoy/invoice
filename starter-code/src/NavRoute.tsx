import {Routes, Route} from 'react-router-dom';
import NewInvoice from './components/NewInvoiceForm/NewInvoice'; 
import MainPage from "./MainLanding/MainPage";

export default function NavRoute() {
 

  return (
    <div>
      <div>
          <Routes>
          <Route path="/invoiceform" element={<NewInvoice />} />
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </div>
    </div>
  );
}

