import React from "react";

function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" aria-current="page" href="/Component/home">
              Bad Bank
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
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
                  <a className="nav-link" href="/Component/createaccount">
                    CreateAccount
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Component/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Component/deposit">
                    Deposit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Component/withdraw">
                    Withdraw
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Component/alldata">
                    AllData
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  export default Navbar;
  