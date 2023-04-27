// import './App.css';
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
// import { HTMLCourses, CSSCourses, JSCourses } from './data/courses';

// components 
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function App() {
  return (
    <div className="container">
     <Header />
     <NavBar />
     <Routes>
        <Route path='/' end element={<AboutMe/>}/>
        <Route path='/project1' element={<Project1/>}/>
        <Route path='/project2' element={<Project2/>}/>
        <Route path='/project3' element={<Project3/>}/>
      </Routes>
    </div>
  );
}

export default App;
