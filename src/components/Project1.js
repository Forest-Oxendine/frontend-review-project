import React from 'react';
import styled from 'styled-components';

// Linked the pages together
const Project1 = () => {
  return (
    <>
      <Project>
        React Review Project 
      </Project>
      <img scr="./img/RrCode.png" alt="Code For Project"></img>
      <img scr="./img/RrHome.png" alt="Home Page of Project"></img>
      <img scr="./img/RrContent.png" alt="List of Albums and Stars To Rate How Much The Album is Liked."></img>
      <Prj1>
        Explain what it's about
      </Prj1>
    </>
  );
}

export default Project1;

const Project = styled.h3`
`
const Prj1 = styled.p`
  font-size: 18px;
  padding-bottom: 35px;
`