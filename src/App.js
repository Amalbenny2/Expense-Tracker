import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpensess } from './Components/IncomeExpensess';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

import { GlobalProvider } from './Components/Context/GlobalState';

function App() {
  return (
    
      <GlobalProvider>
 <Header/>
 <div className='container'>
  <Balance/>
  <IncomeExpensess/>
  <TransactionList/>
  <AddTransaction/>
  
 </div>
 </GlobalProvider>
   
  );
}

export default App;
