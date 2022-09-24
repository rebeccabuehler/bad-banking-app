import React from "react";
import Card from "./context";
import { UserContext } from "./context";

function AllData({accountUsers}) {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="All Account Data"
      title="Ours Users"
      text="Accounts:"
      body={<ul>
        {accountUsers.map(user => {
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
