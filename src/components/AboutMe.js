import React from 'react';
import styled from 'styled-components';
// import Project1 from './components/Project1';


const AboutMe = () => {
  return (
    <>
    <Why>
      'I found an ad on LinkedIn for those in marginalized communities to apply for a Full Stack Developers course with Hack the Gap.'
    </Why>
    <PrjOne>
      'Project1'
    </PrjOne>
    </>
  );
  }

export default AboutMe;

const Why = styled.h2`
  font-size: 30px;
`
const PrjOne = styled.h1`
  font-size: 40px;
`