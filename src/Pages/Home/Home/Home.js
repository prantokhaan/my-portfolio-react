import React from 'react';
import prantoImg from '../../../images/pranto.jpg';
import { Link } from 'react-router-dom';
import '../../../App.css';

const Home = () => {
    const socialLinkStyle = {
      height: "35px",
      width: "35px",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "35px",
      margin: "0 4px",
      borderRadius: "50%",

    };
    return (
      <div className="section">
        <div style={{ textAlign: "center" }}>
          <div style={{ paddingTop: "100px" }}>
            <img
              src={prantoImg}
              alt=""
              width="250px"
              height="250px"
              style={{
                borderRadius: "50%",
                border: "10px solid #fdf9ff",
                boxShadow: "0 0 25px #e8dfec",
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <h2 style={{ color: "#302e4d" }}>
              Ismatul Islam <span style={{ color: "#ec1839" }}>Pranto</span>{" "}
            </h2>
            <h5 style={{ color: "#504e70", marginTop: "10px" }}>
              I'm a Junior Web Developer
            </h5>
          </div>
          <div style={{ marginTop: "30px" }} className="socialLinks">
            <a
              href="https://www.facebook.com/praan.too/"
              target="_blank"
              rel="noreferrer"
              style={socialLinkStyle}
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://github.com/prantokhaan/"
              target="_blank"
              rel="noreferrer"
              style={socialLinkStyle}
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/iipranto/"
              target="_blank"
              rel="noreferrer"
              style={socialLinkStyle}
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/prant.o/"
              target="_blank"
              rel="noreferrer"
              style={socialLinkStyle}
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Home;