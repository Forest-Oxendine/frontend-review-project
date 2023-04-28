import React from 'react';
import styled from 'styled-components';

// Linked the pages together
const Project1 = () => {
  return (
    <>
      <Project>
        React Review Project 
      </Project>
      <Prj1>
        This project was an effort to display mapping as well as my ability to use the Router to navigate to different pages.
      </Prj1>
      <StyledDiv>
          <img src="./img/RrCode.png" alt="Laptop with code on it."></img>
      </StyledDiv>
      <StyledDiv>
          <img src="./img/RrHome.png" alt="Home Page of Project"></img>
      </StyledDiv>
      <StyledDiv>
          <img src="./img/RrContent.png" alt="List of Albums and Stars To Rate How Much The Album is Liked."></img>
      </StyledDiv>
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
const StyledDiv = styled.div`
padding:40px
`