import { Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import maxWheel from '../../../images/max-wheel-img.png';
import mw1 from '../../../images/mw1.png';
import travel from '../../../images/tk.png';
import travel1 from '../../../images/tk1.png';
import minute from '../../../images/minute.png';
import minute1 from '../../../images/minute1.png';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from 'react-router';
import useProjects from '../../../Hooks/useProjects';
import ViewProject from '../Projects/ViewProject/ViewProject';

const WebDesign = () => {
    const { id } = useParams();
    const [projects] = useProjects();
    let currentProject = [];
    if (projects.length) {
      const projectDetail = projects.find(
        (project) => project.id === parseInt(id)
      );
      currentProject.push(projectDetail);
    }
    
    return (
      <div>
        {currentProject.map((projectView) => (
          <ViewProject
          key={projectView.id}
          projectView={projectView}
          ></ViewProject>
        ))}
      </div>
    );
};

export default WebDesign;