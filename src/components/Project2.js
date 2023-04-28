import React from 'react';
import styled from 'styled-components';

// Linked the pages together
const Project2 = () => {
  return (
   <>
    <Project>
      Mood Tracker Project 
    </Project>
    <Prj2>
      Explain what it's about
    </Prj2>
   </>
  );
  }

export default Project2;

const Project = styled.h3`
`
const Prj2 = styled.p`
  font-size: 18px;
  padding-bottom: 35px;
`