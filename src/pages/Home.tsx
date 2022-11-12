import React from "react";
import "../App.css";
import github from '../assets/github.png'

const Home:React.FC = () => {
  const githubURl = "https://github.com/sanchezdamianj";
  return (
    <div className="container">
      <a href={githubURl} id='copyright' >
        <span> Creado por sanchezdamianj </span>
        <img src={github} alt='github dev' style={{height: '16px', marginLeft: '10px'}}/>
        
      </a>
    </div>
  );
};

export default Home;
