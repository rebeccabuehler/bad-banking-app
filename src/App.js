import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import AllData from './Components/alldata';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import { UserContext } from './Components/context';
import './App.css';

function App() {
    // const accountUsers = [
    // {name: 'Rebecca Buehler ', email:'rebecca.buehler02@gmail.com', password:'secret2022!', balance:100},
    // {name: 'James Smith', email:'jsmith@gmail.com', password:'Bank1020!', balance:100},
    // {name: 'Jane Doe', email:'janedoe@yahoo.com', password:'JaneDoe!', balance:100}
    // ]; //see if you can export this as a variable and then push to this variable with create account and it should update alldata.

  return (
    <BrowserRouter>
    <Navbar/>
    <UserContext.Provider value={{users: [
      {name: 'Rebecca Buehler ', email:'rebecca.buehler02@gmail.com', password:'secret2022!', balance:100},
      {name: 'James Smith', email:'jsmith@gmail.com', password:'Bank1020!', balance:100},
      {name: 'Jane Doe', email:'janedoe@yahoo.com', password:'JaneDoe!', balance:100}
      ]}}>
    <Routes>
    <Route path="/Component/home" exact element={<Home/>} />
    <Route path="/Component/createaccount" element={<CreateAccount/>} />
    <Route path="/Component/deposit" element={<Deposit/>} />
    <Route path="/Component/withdraw" element={<Withdraw/>} />
    <Route path="/Component/alldata" element={<AllData/>} />
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
