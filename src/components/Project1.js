import React from 'react';
import styled from 'styled-components';

// Linked the pages together
const Project1 = () => {
  return (
    <>
      <Project>
        React Review Project #1
      </Project>
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