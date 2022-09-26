import React from "react";
import Card from "./context";
import { UserContext } from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Welcome to Bad Bank"
      title="Account Data"
      text="Our Users:"
      body={<ul>
        {ctx.users.map(user => {
          return (
            <li key={user.email}>
              {user.name} - Balance: ${user.balance}
            </li>
          )
        })}
      </ul>}
    />
  );
}
export default AllData;
