import React from 'react';

import arrayDataCard from '../project-data.js';
import ProjectCard from './ProjectCard.js';

function ProjectList() {
  return (
    <>
    {arrayDataCard.map(card =>
      <ProjectCard 
      {...card}
      key={card.id}
      />
    )}
    </>
  );
}

export default ProjectList;