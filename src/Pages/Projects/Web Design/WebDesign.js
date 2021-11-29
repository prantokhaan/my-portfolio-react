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

const WebDesign = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 700,
      overflowY: 'visible',
      backgroundColor: "#fff",
      border: "2px solid #d4d4e3",
      boxShadow: 24,
      p: 4,
    };
    const styleMedia = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 200,
      overflowY: 'visible',
      backgroundColor: "#fff",
      border: "2px solid #d4d4e3",
      boxShadow: 24,
      p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
const theme = useTheme();
const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="project">
            <div className="mt-5 project-image">
              <img
                src={maxWheel}
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
              <h4 className="text-light text-center mt-5">Max Wheels</h4>
              <p className="text-light text-center">A React Application</p>
              <div className="text-center mt-4">
                <button onClick={handleOpen} className="p-button">
                  View Details
                </button>
              </div>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {!isMatch ? (
                <Box sx={style}>
                  <img src={mw1} alt="" width="350px" height="250px" />
                  
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    style={{ fontSize: "15px" }}
                  >
                    Features : <br /> Responsive UI, Single Page Application
                    (SPA), User can see the all cars provided by the authority,
                    Authenticated users can order a car by providing a demo,
                    User can see the progress status of his order, A dashboard
                    is available for authenticated admin, Admin can add new
                    services, Admin can change the order’s status to notify the
                    clients about progress, Admin can add a new admin. <br />
                    <br />
                    Technologies : <br /> ● Front-end :​ ReactJS, React-Router{" "}
                    <br />● Back-end :​ NodeJS, ExpressJS <br />● Authentication
                    : Firebase Login <br />● Database​: MongoDB <br />● Cloud
                    infrastructure: Heroku <br />
                  </Typography>
                  <div className="mt-3">
                    <a
                      href="https://max-wheel-web.web.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none ms-3 text-primary"
                    >
                      Live Site Link
                    </a>
                  </div>
                  <div className="mt-0" style={{ textAlign: "right" }}>
                    <button
                      onClick={handleClose}
                      style={{
                        backgroundColor: "#fff",
                        border: "none",
                        color: "red",
                        fontSize: "30px",
                      }}
                    >
                      <i className="fas fa-times py-2 px-3"></i>
                    </button>
                  </div>
                </Box>
              ) : (
                <Box sx={styleMedia}>
                  <img src={mw1} alt="" width="250px" height="150px" />
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ fontWeight: "600" }}
                  >
                    Max Wheel
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    style={{ fontSize: "15px" }}
                  >
                    Features : <br /> Responsive UI, Single Page Application
                    (SPA), User can see the all cars provided by the authority,
                    Authenticated users can order a car by providing a demo,
                    User can see the progress status of his order, A dashboard
                    is available for authenticated admin, Admin can add new
                    services, Admin can change the order’s status to notify the
                    clients about progress, Admin can add a new admin. <br />
                    <br />
                    Technologies : <br /> ● Front-end :​ ReactJS, React-Router{" "}
                    <br />● Back-end :​ NodeJS, ExpressJS <br />● Authentication
                    : Firebase Login <br />● Database​: MongoDB <br />● Cloud
                    infrastructure: Heroku <br />
                  </Typography>
                  <div className="mt-3">
                    <a
                      href="https://max-wheel-web.web.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none ms-3 text-primary"
                    >
                      Live Site Link
                    </a>
                  </div>
                  <div className="mt-0" style={{ textAlign: "right" }}>
                    <button
                      onClick={handleClose}
                      style={{
                        backgroundColor: "#fff",
                        border: "none",
                        color: "red",
                        fontSize: "30px",
                      }}
                    >
                      <i className="fas fa-times py-2 px-3"></i>
                    </button>
                  </div>
                </Box>
              )}
            </Modal>
          </Grid>
          <Grid item xs={12} md={4} className="project">
            <div className="mt-5 project-image">
              <img
                src={travel}
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
              <h4 className="text-light text-center mt-5">Travel King</h4>
              <p className="text-light text-center">A React Application</p>
              <div className="text-center mt-4">
                <button onClick={handleOpen} className="p-button">
                  View Details
                </button>
              </div>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src={travel1} alt="" width="350px" height="250px" />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ fontWeight: "600" }}
                >
                  Travel King
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ fontSize: "15px" }}
                >
                  Features : <br /> Single Page Application (SPA), Users can
                  choose tourist places. Authenticated users can book tourist
                  places for travel. <br />
                  <br />
                  Technologies : <br /> ● Front-end :​ ReactJS, React-Router{" "}
                  <br />● Back-end :​ NodeJS, ExpressJS <br />● Authentication :
                  Firebase Login <br />● Database​: MongoDB <br />● Cloud
                  infrastructure: Heroku <br />
                </Typography>
                <div className="mt-3">
                  <a
                    href="https://travel-king-dd8f2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none ms-3 text-primary"
                  >
                    Live Site Link
                  </a>
                </div>
                <div className="mt-0" style={{ textAlign: "right" }}>
                  <button
                    onClick={handleClose}
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      color: "red",
                      fontSize: "30px",
                    }}
                  >
                    <i className="fas fa-times py-2 px-3"></i>
                  </button>
                </div>
              </Box>
            </Modal>
          </Grid>
          <Grid item xs={12} md={4} className="project">
            <div className="mt-5 project-image">
              <img
                src={minute}
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
              <h4 className="text-light text-center mt-5">Minute Clinic</h4>
              <p className="text-light text-center">A React Application</p>
              <div className="text-center mt-4">
                <button onClick={handleOpen} className="p-button">
                  View Details
                </button>
              </div>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img src={minute1} alt="" width="350px" height="250px" />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ fontWeight: "600" }}
                >
                  Minute Clinic
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ fontSize: "15px" }}
                >
                  Features : <br /> Single Page Application (SPA), Users can see
                  the doctors and information, Users can choose a doctor,
                  Authenticated users can appoint doctors for his problem.{" "}
                  <br />
                  <br />
                  Technologies : <br /> ● Front-end :​ ReactJS, React-Router{" "}
                  <br />● Authentication : Firebase Login ● Cloud
                  infrastructure: Firebase <br />
                </Typography>
                <div className="mt-3">
                  <a
                    href="https://minute-clinic-web-app.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none ms-3 text-primary"
                  >
                    Live Site Link
                  </a>
                </div>
                <div className="mt-0" style={{ textAlign: "right" }}>
                  <button
                    onClick={handleClose}
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      color: "red",
                      fontSize: "30px",
                    }}
                  >
                    <i className="fas fa-times py-2 px-3"></i>
                  </button>
                </div>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </div>
    );
};

export default WebDesign;