import React from "react";
import Card from "./context";
import { UserContext } from "./context";

const Deposit = () => {
  const ctx = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [totalState, setTotalState] = React.useState(ctx.users[2].balance);
  let transactionState = 0; // state of this transaction
  let accountStatus = `Account Balance $ ${totalState}`;

  function validate(field, label) {
    if (!field) {
      setStatus("Error " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    console.log(email, password);
    for(let i = 0; i < ctx.users.length; i++) {
      if(ctx.users[i].email === email) {
        setTotalState(ctx.users[i].balance);
        console.log(totalState);
      }
    }
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    setShow(false);
  }

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };
  const handleSubmit = (event) => {
    setTotalState(totalState - transactionState);
    for(let i = 0; i < ctx.users.length; i++) {
      if(ctx.users[i].email === email) {
        ctx.users[i].balance = totalState - transactionState;
      }
    }
    event.preventDefault();
  };
  return (
    <Card
      bgcolor="primary"
      header="Welcome To Bad Bank"
      status={status}
      body={
        show ? (
          <>
            Email Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <Card
                bgcolor="primary"
                txtcolor="white"
                header={<div id="total">{accountStatus}</div>}
                text="Deposit:"
                body={
                  <>
                    {" "}
                    <input type="number" onChange={handleChange}></input>
                    <input type="submit" value="Submit"></input>
                  </>
                }
              />
            </form>
          </>
        )
      }
    />
  );
};
export default Deposit;