import React from 'react';
import styled from 'styled-components';

// Linked the pages together
const Project3 = () => {
  return (
    <>
    <Project>
      Fetch API Project 
    </Project>
    <Prj3>
      This project allowed me to show case my understanding around working with APIs.
    </Prj3>
    <StyledDiv>
          <img src="./img/FetchCode.png" alt="Code for project"></img>
    </StyledDiv>
    <StyledDiv>
          <img src="./img/Fetch.png" alt="Home Page of Project with Picture of Boondocks Anime Characters and Random Anime Quote."></img>
    </StyledDiv>
    </>
  );
  }

export default Project3;

const Project = styled.h3`
`
const Prj3 = styled.p`
  font-size: 18px;
  padding-bottom: 35px;
`
const StyledDiv = styled.div`
padding:40px
`