import { Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import jam from '../../../images/jam.png';
import jam1 from '../../../images/jam1.png';

const Wordpress = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 700,
      overflowY: "visible",
      backgroundColor: "#fff",
      border: "2px solid #d4d4e3",
      boxShadow: 24,
      p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div>
        <Grid item xs={12} md={4} className="project">
          <div className="mt-5 project-image">
            <img
              src={jam}
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
            <h4 className="text-light text-center mt-5">Jamalpur City</h4>
            <p className="text-light text-center">An Wordpress Application</p>
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
              <img src={jam1} alt="" width="350px" height="250px" />
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontWeight: "600" }}
              >
                Jamalpur City
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{ fontSize: "15px" }}
              >
                This is News Based website of Jamalpur. It represents the
                Jamalpur and Jamalpur's all Upazilla. Here users can read recent
                news's of Jamalpur. They can read about the history of all
                Upazilla. They can share their feedback about a news or post. It
                is build with Wordpress.
              </Typography>
              <div className="mt-3">
                <a
                  href="https://jamalpur.city/"
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
      </div>
    );
};

export default Wordpress;