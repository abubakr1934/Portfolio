import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container">
      <div className="row align-items-center py-2 mb-4 flex-column flex-md-row">
        <div className="col-12 col-md-1 d-flex justify-content-center justify-content-md-start" >
          <h3 className="main-logo">Abubakr</h3>
        </div>
        <div className="col-12 col-md-11">
          <header className="d-flex justify-content-center justify-content-md-end mt-2 mt-md-0" >
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Profiles
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Resume
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
