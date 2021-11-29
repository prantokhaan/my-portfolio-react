import { Button } from '@mui/material';
import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch, Link } from "react-router-dom";
import AllProjects from '../AllProjects/AllProjects';
import WebDesign from '../Web Design/WebDesign';
import Wordpress from '../Wordpress/Wordpress';

const Projects = () => {
  let { path, url } = useRouteMatch();
    return (
      <div className="section section-two">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <nav className="mt-5 text-center text-decoration-none">
          <Link to="/projects" className="text-decoration-none">
            <button className="project-button">All Projects</button>
          </Link>
          <Link to="/projects/webDesign" className="text-decoration-none">
            <button className="project-button ms-4">Web Development</button>
          </Link>
          <Link to="/projects/wordpress" className="text-decoration-none">
            <button className="project-button ms-4">Wordpress</button>
          </Link>
        </nav>
        <Switch>
          <Route exact path={path}>
            <AllProjects />
          </Route>
          <Route exact path={`${path}/webDesign`}>
            <WebDesign />
          </Route>
          <Route exact path={`${path}/wordpress`}>
            <Wordpress />
          </Route>
        </Switch>
      </div>
    );
};

export default Projects;