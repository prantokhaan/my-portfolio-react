import { Button, Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch, Link } from "react-router-dom";
import useProjects from '../../../Hooks/useProjects';


const Projects = () => {
  let { path, url } = useRouteMatch();
  const [projects] = useProjects();
  const [name, subtitle, img1] = projects;
    return (
      <div className="section section-two">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <nav className="mt-5 text-center text-decoration-none">
          <Link to="/projects" className="text-decoration-none">
            <button className="project-button">All Projects</button>
          </Link>
        </nav>

        <div>
          <Grid container spacing={2}>
            {projects.map((project) => (
              <Grid item xs={12} md={4} className="project">
                <div className="mt-5 project-image">
                  <img
                    src={project.img1}
                    alt=""
                    width="320px "
                    height="200px"
                    style={{
                      border: "3px solid #d4d4e3",
                      boxShadow: "0 0 20px #e8dfec",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="image-effect">
                  <h4 className="text-light text-center mt-5">{project.name}</h4>
                  <p className="text-light text-center">{project.subtitle}</p>
                  <div className="text-center mt-4">
                    <Link to={`/project/${project.id}`}>
                      <button className="p-button">View Details</button>
                    </Link>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
};

export default Projects;