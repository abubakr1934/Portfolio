import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Mainpage from './componenets/Mainpage';
import Footer from './componenets/Footer';
import CodingProfiles from './componenets/CodingProfiles';
import Loading from './componenets/Loading';
import Skill from './componenets/Skills/Skill';
import Projects from './componenets/Projects/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const projectsRef = useRef(null);
  const profilesRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionRef) => {
    const offset = sectionRef === profilesRef ? sectionRef.current.offsetTop + 550 : sectionRef.current.offsetTop;
  
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  };
  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header scrollToSection={scrollToSection} refs={{ projectsRef, profilesRef, skillsRef }} />
      <div ref={profilesRef}>
        <Mainpage />
        <CodingProfiles />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skill />
      </div>
      <Footer />
    </>
  );
}

export default App;
