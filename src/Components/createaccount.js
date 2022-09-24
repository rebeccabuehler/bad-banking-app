import React from "react";
import { UserContext } from "./context";
import Card from "./context";
function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(
        "Error, something is missing please make sure all the fields are filled"
      );
      setTimeout(() => setStatus(""), 6000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    //console.log(name, email, password);
    if (
      !validate(name, "name") ||
      !validate(email, "email") ||
      !validate(password, "password")
    )
      return console.log(
        "Something is missing please make sure all the fields are filled"
      ); //any of the fields are empty

    if (
      validate(name, "name") &&
      validate(email, "email") &&
      validate(password, "password")
    ) {
      ctx.users.push({ name, email, password, balance: 100 });
      console.log(ctx.users);
      setShow(false);
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
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
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-light"
              disable={name ? "name" : ""}
              onClick={clearForm}
            >
              Add Another Account
            </button>
            <br />
            <a href="/Component/deposit" className="btn btn-light">
              Go to Deposit
            </a>
            <a href="/Component/withdraw" className="btn btn-light">
              Go to Withdraw
            </a>
          </>
        )
      }
    />
  );
}
export default CreateAccount;
