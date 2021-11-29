import React from 'react';
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, styled } from '@mui/system';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:'#d4d4e3'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#ec1839'
  },
}));

const SkillProgress = () => {
    return (
      <div className="ms-3">
        <div>
          <h4 style={{ fontSize: "18px", color: "#302e4d" }} className="mb-3">
            Javascript
          </h4>
          <Box sx={{ width: "80%" }}>
            <BorderLinearProgress variant="determinate" value={80} />
          </Box>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", color: "#302e4d" }} className="my-3">
            React JS
          </h4>
          <Box sx={{ width: "80%" }}>
            <BorderLinearProgress variant="determinate" value={70} />
          </Box>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", color: "#302e4d" }} className="my-3">
            Node JS
          </h4>
          <Box sx={{ width: "80%" }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", color: "#302e4d" }} className="my-3">
            MongoDB
          </h4>
          <Box sx={{ width: "80%" }}>
            <BorderLinearProgress variant="determinate" value={60} />
          </Box>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", color: "#302e4d" }} className="my-3">
            Wordpress Design
          </h4>
          <Box sx={{ width: "80%" }}>
            <BorderLinearProgress variant="determinate" value={85} />
          </Box>
        </div>
      </div>
    );
};

export default SkillProgress;