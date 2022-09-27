import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand active" aria-current="page" to="/Component/home" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Welcome to Bad Bank!">
              Bad Bank
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/createaccount" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create Your New Account!">
                    CreateAccount
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/deposit" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deposit Funds in Your New Account!">
                    Deposit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/withdraw" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Withdraw Funds from Your New Account!">
                    Withdraw
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/alldata" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Check out all our data!">
                    AllData
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  export default Navbar;
  