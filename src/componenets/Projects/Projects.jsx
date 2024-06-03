import React, { useState } from "react";
import "./Projects.css";
import "../../App.css";
import mgtd from '../../assets/photosProjects/machine.png'; 
import myntraCloneImg from '../../assets/photosProjects/m yntra.jpeg';
import fumblrImg from '../../assets/photosProjects/fumblr.png';
import objectTrackingImg from '../../assets/photosProjects/objectTraacking.png';
import salesCallerImg from '../../assets/photosProjects/salescaller.png';
import portfolioImg from '../../assets/photosProjects/portfolio.png';
import spider from '../../assets/photosProjects/spiderman.jpg';

function Projects() {
  const [render, setRender] = useState(false);

  const change = () => {
    setRender(prevRender => !prevRender);
  };

  return (
    <div className="container">
      <h2 className="pb-2" style={{ color: "#3498db" }}>
        Projects
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <a href="https://github.com/abubakr1934/Machine-Generated-Text-Detection" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm">
              <img src={mgtd} className="bd-placeholder-img card-img-top" alt="Machine Generated Text Detection" height="225" />
              <div className="card-body">
                <p className="card-text">Machine Generated Text Detection</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary">ML,python,BI-LSTM,Deep learning,State of Art models,BERT,DEBERTA</small>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col ">
          <a href="https://myntra-ecommerce-clone.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm">
              <img src={myntraCloneImg} className="bd-placeholder-img card-img-top" alt="Myntra Clone" height="225" />
              <div className="card-body">
                <p className="card-text">Myntra Clone</p>
                <div className="d-flex justify-content-between align-items-end">
                  <small className="text-body-secondary">
                    React,NodeJS,Bootstrap
                  </small>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://fumblrify.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm">
              <img src={fumblrImg} className="bd-placeholder-img card-img-top" alt="Fumblr-Social Media App" height="225" />
              <div className="card-body">
                <p className="card-text">Fumblr-Social Media App</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary">React,bootstrap</small>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/abubakr1934/object-tracking-with-opencv-and-python" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm">
              <img src={objectTrackingImg} className="bd-placeholder-img card-img-top" alt="Object Tracking with open-CV" height="225" />
              <div className="card-body">
                <p className="card-text">Object Tracking with open-CV</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary">open-cv,python</small>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/abubakr1934/SalesCaller.io" target="_blank" rel="noopener noreferrer">
            <div className="card shadow-sm">
              <img src={salesCallerImg} className="bd-placeholder-img card-img-top" alt="SalesCaller.io" height="225" />
              <div className="card-body">
                <p className="card-text">SalesCaller.io</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary">React,bootstrap,react-strap</small>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          
            <div className="card shadow-sm" onClick={change}>
              <img src={render ? spider : portfolioImg} className="bd-placeholder-img card-img-top" alt="Portfolio" height="225" />
              <div className="card-body">
                <p className="card-text">Portfolio</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary">React,Bootstrap</small>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
