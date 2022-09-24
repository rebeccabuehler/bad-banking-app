import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" aria-current="page" to="/Component/home">
              Bad Bank
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placem="top"
              data-bs-title="Bad Bank"
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
                  <Link className="nav-link" to="/Component/createaccount">
                    CreateAccount
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/deposit">
                    Deposit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/withdraw">
                    Withdraw
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Component/alldata">
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
  