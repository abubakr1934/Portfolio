import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ scrollToSection, refs }) {
  const { projectsRef, profilesRef, skillsRef } = refs;

  return (
    <div className="container">
      <div className="row align-items-center py-2 mb-4 flex-column flex-md-row">
        <div className="col-12 col-md-1 d-flex justify-content-center justify-content-md-start">
          <h3 className="main-logo">Abubakr</h3>
        </div>
        <div className="col-12 col-md-11">
          <header className="d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <button className="nav-link btn-link" onClick={() => scrollToSection(profilesRef)}>
                  Profiles
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn-link" onClick={() => scrollToSection(projectsRef)}>
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn-link" onClick={() => scrollToSection(skillsRef)}>
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <a href="https://drive.google.com/file/d/1l0cArA9Trd-EmwpHAEHpM_tI8SjUWyR-/view" className="nav-link">
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
