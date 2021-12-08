import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";


const ViewProject = ({projectView}) => {
    const {name, img1, img2, img3, img4, img5, features, technology, live, server, client} = projectView;
    console.log(name);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <div className="section section-two">
        <div className="section-title">
          <h2>{name}</h2>
        </div>
        {!isMatch ? (
          <div>
            <div className="mt-5">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      className="d-block w-100"
                      alt="..."
                      height="500px"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      className="d-block w-100"
                      alt="..."
                      height="500px"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      className="d-block w-100"
                      alt="..."
                      height="500px"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      className="d-block w-100"
                      w-100
                      alt="..."
                      height="500px"
                    />
                  </div>
                  <div className="carousel-item w-100">
                    <img
                      src={img5}
                      className="d-block w-100"
                      alt="..."
                      height="500px"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon bg-black"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-black"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-5">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      className="d-block w-100"
                      alt="..."
                      height="300px"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      className="d-block w-100"
                      alt="..."
                      height="300px"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      className="d-block w-100"
                      alt="..."
                      height="300px"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      className="d-block w-100"
                      w-100
                      alt="..."
                      height="300px"
                    />
                  </div>
                  <div className="carousel-item w-100">
                    <img
                      src={img5}
                      className="d-block w-100"
                      alt="..."
                      height="300px"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon bg-black"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-black"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="mt-5 mb-4 text-center">
              <button className="feature-button">Features</button>
            </div>
            {!isMatch ? (
              <div>
                <ul
                  style={{
                    marginLeft: "50px",
                    fontSize: "18px",
                    lineHeight: "30px",
                    listStyleType: "none",
                    marginRight: "30px",
                  }}
                >
                  <li>{features?.one}</li>
                  <li>{features?.two}</li>
                  <li>{features?.three}</li>
                  <li>{features?.four}</li>
                  <li>{features?.five}</li>
                  <li>{features?.six}</li>
                  <li>{features?.seven}</li>
                  <li>{features?.eight}</li>
                  <li>{features?.nine}</li>
                </ul>
              </div>
            ) : (
              <div>
                <ul style={{ listStyleType: "none" }}>
                  <li>{features?.one}</li>
                  <li>{features?.two}</li>
                  <li>{features?.three}</li>
                  <li>{features?.four}</li>
                  <li>{features?.five}</li>
                  <li>{features?.six}</li>
                  <li>{features?.seven}</li>
                  <li>{features?.eight}</li>
                  <li>{features?.nine}</li>
                </ul>
              </div>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="mt-5 mb-4 text-center">
              <button className="feature-button">Technology Used</button>

              <div className="mt-4">
                <ul
                  style={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    listStyleType: "none",
                    textAlign: "left",
                  }}
                >
                  <li>
                    <span className="fw-bold">Front-end: {""}</span>
                    {technology?.front}
                  </li>
                  <li>
                    <span className="fw-bold">Back-end: </span>
                    {technology?.back}
                  </li>
                  <li>
                    <span className="fw-bold">Database: </span>
                    {technology?.database}
                  </li>
                  <li>
                    <span className="fw-bold">Authentication: </span>
                    {technology?.authentication}
                  </li>
                  <li>
                    <span className="fw-bold">Framework: </span>
                    {technology?.framework}
                  </li>
                  <li>
                    <span className="fw-bold">Tools: </span>
                    {technology?.tools}
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="ms-5 mt-5 button-link">
          <a
            className="web-link me-4"
            href={projectView?.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
          <a
            className="web-link me-4"
            href={projectView?.client}
            target="_blank"
            rel="noreferrer"
          >
            Github Client
          </a>
          {server?.length ? (
              <a
                className="web-link me-4"
                href={projectView?.server}
                target="_blank"
                rel="noreferrer"
              >
                Github Server
              </a>
          ) : (
            <a
              className="web-link me-4 d-none"
              href={projectView?.server}
              target="_blank"
              rel="noreferrer"
            >
              Server Side
            </a>
          )}
        </div>
      </div>
    );
};

export default ViewProject;