import React from 'react';
import styled from 'styled-components';



const AboutMe = () => {
  return (
    <>
    <Dates>
      Nov. 28th, 2023 - May 31st, 2023
    </Dates>
    <Course>
      Hack The Gap - Full Stack Development Bootcamp
    </Course>
    <WhyTitle>
      About The Course
    </WhyTitle>
    <Why>
      I found an ad on LinkedIn for those in marginalized communities to apply for a Full Stack Developers course with Hack the Gap.
    </Why>
    <img src="./img/Coding.jpg" className="codingImg" alt="Laptop with code on it."></img>
    </>
  );
  }

export default AboutMe;

const Course = styled.h1`
  text-align: center;
`
const Dates = styled.h3`
text-align: right;
padding: 15px;
`
const WhyTitle = styled.h2`
text-align: center;
padding-top: 45px;
`
const Why = styled.h3`
text-align: center;
padding-bottom: 35px;
`

