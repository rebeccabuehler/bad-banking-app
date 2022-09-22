import React from "react";
import Card from './context';
import bank from "./bank.png";

function Home() {
    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Bad Bank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src={bank} className="img-fluid" alt="Bank Building"/>)}
        />
    );
}
export default Home;