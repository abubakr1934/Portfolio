import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Header() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between align-items-center py-3 mb-4">
        <div className="col-md-3  d-flex align-items-center">
          <h3 className="main-logo">Abubakr</h3>
        </div>
        <div className="col-md-9">
          <header className="">
            <ul className="nav nav-pills justify-content-end">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
