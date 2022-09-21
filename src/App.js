import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { UserContext } from './Components/context';
import Home from './Components/home';
import Navbar from './Components/navbar';
import CreateAccount from './Components/createaccount';
import Login from './Components/login';
import AllData from './Components/alldata';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import './App.css';

function App() {
  return (
    <HashRouter>
    <Navbar/>
    <UserContext.Provider value={{users: [{name: 'Rebecca', email:'rebecca.buehler02@gmail.com', password:'secret2022!', balance:100}]}}>
    <Route path="/" exact component={Home} />
    <Route path="/CreateAccount/" component={CreateAccount} />
    <Route path="/login/" component={Login} />
    <Route path="/deposit/" component={Deposit} />
    <Route path="/withdraw/" component={Withdraw} />
    <Route path="/alldata/" component={AllData} />
    </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
