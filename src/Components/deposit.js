import React from "react";
import Card from "./context";
import { UserContext } from './context';

const ATMDeposit = ({ onChange }) => {
    return (
      <label className="label huge">
        <input type="number" onChange={onChange}></input>
        <input type="submit" value="Submit"></input>
      </label>
    );
  };
  
  const Deposit = () => {
    const ctx = React.useContext(UserContext);
    const [totalState, setTotalState] = React.useState(0);
    let transactionState = 0; // state of this transaction
    let status = `Account Balance $ ${totalState}`;
    console.log("Render Account");
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      transactionState = Number(event.target.value);
    };
    const handleSubmit = event => {
      setTotalState(totalState + transactionState);
      event.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <Card
      bgcolor="primary"
      txtcolor="white"
      header="Welcome To Bad Bank"
      title={<div id="total">{status}</div>}
      text="Deposit:"
      body={<><ATMDeposit onChange={handleChange}> Deposit</ATMDeposit></>}
    />
      </form>
    );
  };
  export default Deposit;