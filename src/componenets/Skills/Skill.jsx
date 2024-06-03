import React from "react";
import c from '../../assets/photosSkills/c.png';
import cpp from '../../assets/photosSkills/cpp.png';
import css from '../../assets/photosSkills/css.png';
import bootstrap from '../../assets/photosSkills/bootstrap.png';
import dl from '../../assets/photosSkills/dl.png';
import express from '../../assets/photosSkills/express.png';
import html from '../../assets/photosSkills/html.png';
import java from '../../assets/photosSkills/java.png';
import js from '../../assets/photosSkills/js.png';
import ml from '../../assets/photosSkills/ml.png';
import mongo from '../../assets/photosSkills/mongo.png';
import nlp from '../../assets/photosSkills/nlp.png';
import node from '../../assets/photosSkills/node.png';
import python from '../../assets/photosSkills/python.png';
import react from '../../assets/photosSkills/react.png';
import redux from '../../assets/photosSkills/redux.png';
import sql from '../../assets/photosSkills/sql.png';
import './Skill.css'


function Skill() {
  const skills = [
    { name: "C", img: c },
    { name: "C++", img: cpp },
    { name: "Java", img: java },
    { name: "Python", img: python },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "Bootstrap", img: bootstrap },
    { name: "React", img: react },
    { name: "Redux", img: redux },
    { name: "NodeJS", img: node },
    { name: "ExpressJS", img: express },
    { name: "MongoDB", img: mongo },
    { name: "SQL", img: sql },
    { name: "ML", img: ml },
    { name: "Deep Learning", img: dl },
    { name: "NLP", img: nlp },
  ];

  return (
    <div>
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2" style={{ color: "#3498db" }}>Skills</h2>
      
      <div className="skills-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {skills.map(skill => (
          <div className="col d-flex align-items-start" key={skill.name}>
            <div className="text-center skill-container">
              <img src={skill.img} alt={skill.name} className="img-fluid skill-image" />
              <p className="d-flex justify-content-center">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <h5 style={{marginLeft:"45px"}} >PS: Some of these skills are areas I am continuously learning and improving every day :)</h5>
    </div>
  );
}

export default Skill;
