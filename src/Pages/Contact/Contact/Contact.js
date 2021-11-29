import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mvolpqyj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
    return (
      <div className="section section-two">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className="mt-5 text-center pt-3">
              <i
                className="fas fa-phone-alt"
                style={{ fontSize: "30px", color: "#ec1839" }}
              ></i>
              <h4 className="mt-3 ms-1" style={{ color: "#302e4d" }}>
                Call me On
              </h4>
              <div style={{ color: "#504e70", fontSize: "14px" }}>
                <a
                  className="text-decoration-none"
                  style={{ color: "#504e70" }}
                  href="tel: +880 1879597656"
                >
                  +880 1879597656
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="mt-5 text-center pt-3">
              <i
                className="fas fa-map-marker-alt"
                style={{ fontSize: "30px", color: "#ec1839" }}
              ></i>
              <h4 className="mt-3 ms-1" style={{ color: "#302e4d" }}>
                My Address
              </h4>
              <h6 style={{ color: "#504e70", fontSize: "14px" }}>
                Kolabagan, Jamalpur, Bangladesh
              </h6>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="mt-5 text-center pt-3">
              <i
                className="fas fa-envelope"
                style={{ fontSize: "30px", color: "#ec1839" }}
              ></i>
              <h4 className="mt-3 ms-1" style={{ color: "#302e4d" }}>
                Email
              </h4>
              <div style={{ color: "#504e70", fontSize: "14px" }}>
                <a
                  className="text-decoration-none"
                  style={{ color: "#504e70" }}
                  href="email: prantokhaan@gmail.com"
                >
                  prantokhaan@gmail.com
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="mt-5 ms-5">
          <form
            action="https://formspree.io/f/prantokhaan@gmail.com"
            method="POST"
          >
            <TextField
              id="outlined-basic"
              label="Your Name"
              required
              variant="outlined"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 0 14px #e8dfec",
                width: "88%",
                borderRadius: "5px",
                border: "none",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              className="input-email"
              required
              variant="outlined"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 0 14px #e8dfec",
                width: "88%",
                borderRadius: "5px",
                border: "none",
                marginTop: '20px'
              }}
            />
            <TextField
              id="outlined-basic"
              label="Subject"
              required
              variant="outlined"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 0 14px #e8dfec",
                width: "88%",
                borderRadius: "5px",
                border: "none",
                marginTop: "20px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Your Message..."
              required
              multiline
              rows={5}
              variant="outlined"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 0 14px #e8dfec",
                width: "88%",
                borderRadius: "5px",
                border: "none",
                marginTop: "20px",
              }}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Contact;