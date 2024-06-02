import React from 'react';
import '../App.css';
import image from '../assets/image.svg';

function Mainpage() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-md-8">
          <h1 className="display-3 fw-bold lh-2 mb-3 d-flex justify-content-start">
            Hey There! I'm Abubakr
          </h1>
          <p className="lead d-flex justify-content-start">
            I am a Software Engineer currently pursuing B.Tech in Computer Science Engineering. Don't forget to checkout my DSA coding profiles and recent projects.
          </p>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img src={image} alt="Profile" className="img-fluid height-width"  />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
