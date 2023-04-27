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
    <Project>
      React Review Project #1
    </Project>
    <Prj1>
      Explain what it's about
    </Prj1>
    <Project>
      Mood Tracker Project #2
    </Project>
    <Prj2>
      Explain what it's about
    </Prj2>
    <Project>
      Fetch API Project #3
    </Project>
    <Prj3>
      Explain what it's about
    </Prj3>

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
const Project = styled.h3`
`
const Prj1 = styled.p`
  font-size: 18px;
  padding-bottom: 35px;
`
const Prj2 = styled.p`
  font-size: 18px;
  padding-bottom: 35px;
`
const Prj3 = styled.p`
  font-size: 18px;
  padding-bottom: 35px;
`
