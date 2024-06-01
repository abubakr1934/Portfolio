import React from 'react'
import '../App.css'
import image from '../assets/image.svg'

function Mainpage() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row align-items-start g-5 py-5">
        <div className="col-lg-12">
          <h1 className="display-3 fw-bold lh-2 mb-3 d-flex justify-content-start">
            Hey There! I'm <span>&nbsp;</span><span style={{color:"#0d6efd"}} className="hover-animate">Abubakr</span>
          </h1>
          <p className="lead d-flex justify-content-start">
            I am a Sofware Engineer currently studying in 7th Semester.Don't forget to checkout my DSA coding profile and recent projects.
          </p>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mainpage;
