import React from 'react';
import styled from 'styled-components';
//import components


const ProjectCard = ({name, description, img}) => {
  return (
    <StyledDiv>
      <img src={img} alt={description} />
      <CardName>{name}</CardName>
      <CardDescription>{description}</CardDescription>
      
    </StyledDiv>
  );
}

export default ProjectCard;

const StyledDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 400px;
  text-align: center;
  margin: auto;
  padding:  60px 20px 40px 20px;
  background-color: #ADD8E6;
`;

const CardName = styled.h2`
`
const CardDescription = styled.p`
`