import { Button, Divider, Grid, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Education from '../Education/Education';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SkillProgress from '../SkillProgress/SkillProgress';
import Skills from '../Skills/Skills';

const StyledButton = styled(Button)({
  backgroundColor: '#ec1839',
  color: '#fff',
  fontFamily: `'Poppins', sans-serif`,
  padding: '10px 20px',
  borderRadius: '40px',
  border: '2px solid #ec1839',
  transition: 'all 0.5s ease',

  "&:hover": {
    backgroundColor: '#fff',
    color: '#ec1839'
  },
  "@media only screen and  (max-width 600px)": {
    marginTop: '30px',
    color: 'blue',
  }

})

const About = () => {
  
    return (
      <div className="section section-two">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-info mt-5">
          <h2 style={{ fontSize: "24px" }}>
            I'm Ismatul Islam Pranto &{" "}
            <span style={{ color: "#ec1839", fontWeight: 600 }}>
              Web Developer
            </span>{" "}
          </h2>
          <p style={{ color: "#504e70", fontSize: "15px", lineHeight: "25px" }}>
            My name is Ismatul Islam Pranto. I am a Web Developer. I am very
            passionate and dedicated to my work. I have acquired the skills and
            knowledge necessary to make your project a success. I enjoy every
            step of the functionality process, from discussion and
            collaboration.
          </p>
        </div>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <PersonalInfo />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillProgress />
          </Grid>
          <div className="ms-3 media-button" style={{ marginTop: "-50px" }}>
            <a href="https://drive.google.com/uc?id=1gn2grcG3NsgiS3NTYfEAvhJHXwCquQAy&export=download" target="_blank" rel="noreferrer" className="text-decoration-none">
              <StyledButton>Download Resume</StyledButton>
            </a>
            <a href="https://www.fiverr.com/prantokhaan" target="_blank" rel="noreferrer" className="text-decoration-none ms-5">
              <StyledButton>Hire Me</StyledButton>
            </a>

            {/* <Link className="ms-5 text-decoration-none media-button" to="/contact">
              <StyledButton>Hire Me</StyledButton>
            </Link> */}
          </div>
        </Grid>
        <Grid container spacing={2} sx={{mt: 5}}>
          <Grid item xs={12} md={6}>
            <Education />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skills />
          </Grid>
        </Grid>
      </div>
    );
};

export default About;