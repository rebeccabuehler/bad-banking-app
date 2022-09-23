import React from "react";
import Card from "./context";
import { UserContext } from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="All Account Data"
      title="Ours Users"
      text="Accounts:"
      //body={<div>{ctx.users.map(({name, email, password, balance}))}</div>}
      body={<pre>{JSON.stringify(ctx.users)}</pre>}
    />
  );
}
export default AllData;
