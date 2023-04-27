import React from 'react';
import styled from 'styled-components';



const AboutMe = () => {
  return (
    <>
    <Course>
      Name of Bootcamp: Hack The Gap - Full Stack Development Course
    </Course>
    <Dates>
      November 28th, 2023 - May 31st, 2023
    </Dates>
    <Why>
      I found an ad on LinkedIn for those in marginalized communities to apply for a Full Stack Developers course with Hack the Gap.
    </Why>
    <Prj1>
      Explaine what it's about
    </Prj1>
    <Prj2>
      Explaine what it's about
    </Prj2>
    <Prj3>
      Explaine what it's about
    </Prj3>

    </>
  );
  }

export default AboutMe;

const Course = styled.h1`
  font-size: 30px;
`
const Dates = styled.h3`
  font-size: 30px;
`
const Why = styled.h2`
  font-size: 30px;
`
const Prj1 = styled.p`
  font-size: 30px;
`
const Prj2 = styled.p`
  font-size: 30px;
`
const Prj3 = styled.p`
  font-size: 30px;
`
