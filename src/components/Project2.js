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
      The goal of this project was to demonsrtait our ability to effectivly use state through inputs.
    </Prj2>
    <StyledDiv>
          <img src="./img/MoodCode.png" alt="Code for project"></img>
    </StyledDiv>
    <StyledDiv>
          <img src="./img/MoodHome.png" alt="Home Page of Project"></img>
    </StyledDiv>
    <StyledDiv>
          <img src="./img/MoodContent.png" alt="List of Albums and Stars To Rate How Much The Album is Liked."></img>
    </StyledDiv>
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
const StyledDiv = styled.div`
padding:40px
`