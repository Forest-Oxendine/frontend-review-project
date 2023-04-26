import './App.css';
import React from 'react';
// components 
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function App() {
  return (
    <div>
     <NavBar />
     <AboutMe />
     <Project1 />
     <Project2 />
     <Project3 />
    </div>
  );
}

export default App;
