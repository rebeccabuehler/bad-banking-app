import React from "react";
import {UserContext} from './context';

function Deposit() {
    const ctx = React.useContext(UserContext);
    return(
        <h1>
            Deposit <br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}
export default Deposit;

//for deposit and withdraw for reference look to week 15 atm exercise