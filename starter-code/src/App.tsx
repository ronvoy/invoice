import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import MainHeader from './components/MainHeader/MainHeader';
import InvoiceTable from './components/Table/InvoiceTable';


function App() {
  return (
    <div className="App">
 <MainHeader/>
    <Sidebar/>
     
<InvoiceTable/>
    </div>
  );
}

export default App;
