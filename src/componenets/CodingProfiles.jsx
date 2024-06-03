import React from 'react';
import '../App.css';
import Leetcode from '../assets/Leetcode.png';

function CodingProfiles() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2  clr">Profiles</h2>
      <h5 >My graphic designer went on leave, so my cards will have no background images. It's minimalism at its finest, or as I call it,<span style={{color:"#0d6efd"}}> "unintended genius."</span> But hey, my coding profiles are still top-notch🔥</h5>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <a href="https://leetcode.com/Abubakr_Khanooni/" target="_blank" rel="noopener noreferrer" className="card-link crd">
            <div 
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
              
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Leetcode</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                  </li>
                  
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://www.geeksforgeeks.org/user/khanoo7im7/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer" className="card-link crd">
            <div 
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
              style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Geeks For Geeks</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                  </li>
                  
                </ul>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://github.com/abubakr1934" target="_blank" rel="noopener noreferrer" className="card-link crd">
            <div 
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
              style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Github</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                  </li>
                  
                </ul>
              </div>
            </div>
          </a>
        </div>

        
      </div>
    </div>
  );
}

export default CodingProfiles;
