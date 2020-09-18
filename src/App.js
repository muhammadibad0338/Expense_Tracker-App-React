import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./Child";
import Header from   './components/Header'
import Balance from   './components/Balance'
import IncomeExpenses from   './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
