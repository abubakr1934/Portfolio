import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import projectImage from '../assets/handshake.jpg'

function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-md-7 d-flex flex-column align-items-center">
            <h2>Have a project idea where we can collaborate?</h2>
            <img src={projectImage} alt="Project Idea" className="img-fluid mt-3" style={{ maxHeight: "300px", width: "60%", objectFit: "cover" }} />
          </div>
          <div className="col-md-5">
            <form action="https://getform.io/f/lbkmwmqb" method="POST">
              <h5>Connect with me:</h5>
              <div className="d-flex flex-column gap-2">
                <label htmlFor="name" className="visually-hidden">Name</label>
                <input id="name" type="text" className="form-control mb-2" placeholder="Name" name="name" required />
                
                <label htmlFor="email" className="visually-hidden">Email address</label>
                <input id="email" type="email" className="form-control mb-2" placeholder="Email address" name="email" required />
                
                <label htmlFor="message" className="visually-hidden">Message</label>
                <textarea id="message" className="form-control mb-2" style={{ minHeight: "200px" }} placeholder="Message" name="message" required></textarea>
                
                <button className="btn btn-primary mt-2" type="submit">Let's Connect</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p style={{ color: "#0d6efd" }}>All rights not so much reserved, but please ask nicely before stealing. @Abubakr.Inc</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis clr" href="https://www.linkedin.com/in/abubakr-khanooni-485791229/">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis clr" href="mailto:abubakrkhanooni20@gmail.com">
                <SiGmail size={30} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis clr" href="https://www.instagram.com/abubakrkhanooni.eth/">
                <AiFillInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
