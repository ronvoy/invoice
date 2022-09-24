import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import MainHeader from '../components/MainHeader/MainHeader';
import InvoiceTable from '../components/Table/InvoiceTable';


function MainPage() {
  return (
    <div className="App">
 <MainHeader/>
    <Sidebar/>
     
<InvoiceTable/>
    </div>
  );
}

export default MainPage;
