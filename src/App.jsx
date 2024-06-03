import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Mainpage from './componenets/Mainpage';
import Footer from './componenets/Footer';
import CodingProfiles from './componenets/CodingProfiles';
import Loading from './componenets/Loading';
import { useState,useEffect } from 'react';
import Skill from './componenets/Skills/Skill';
import Projects from './componenets/Projects/Projects';
  

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <Header />
      <Mainpage />
      <CodingProfiles />
      <Skill></Skill> 
      <Footer /> */}
      <Projects></Projects>
      
    </>
  );
}

export default App
