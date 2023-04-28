import React from 'react';
import styled from 'styled-components';

import arrayDataCard from '../project-data.js';
import ProjectCard from './ProjectCard.js';

function ProjectList() {
  return (
    <StyledDiv> 
    {arrayDataCard.map(card =>
      <ProjectCard 
      {...card}
      key={card.id}
      />
    )}
    </StyledDiv>
  );
}

export default ProjectList;

const StyledDiv = styled.div`
  padding: 20px;
`