import React from 'react';
import styled from 'styled-components';



const AboutMe = () => {
  return (
    <>
    <NameOfEdu>
      Name of Bootcamp: Hack The Gap - Full Stack Development Course
    </NameOfEdu>
    <Dates>
      November 28th, 2023 - May 31st, 2023
    </Dates>
    <Why>
      I found an ad on LinkedIn for those in marginalized communities to apply for a Full Stack Developers course with Hack the Gap.
    </Why>

    </>
  );
  }

export default AboutMe;

const Why = styled.h2`
  font-size: 30px;
`
