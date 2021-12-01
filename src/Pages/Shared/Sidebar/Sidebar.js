import { Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Pranto.png';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileDrawer from '../MobileDrawer/MobileDrawer';

const Sidebar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const linkStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        fontWeight: 500
    }
    
    return (
      <div className="sidebar">
        {!isMatch ? (
          <div
            style={{
              width: "270px",
              backgroundColor: "#fdf9ff",
              height: "100%",
              left: 0,
              top: 0,
              position: "fixed",
              borderRight: "1px solid #e9dfec",
            }}
          >
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <nav style={{ marginTop: "30px" }}>
              <Divider />
              <div className="sidebar-item">
                <Link to="/home">
                  <button style={linkStyle}>
                    <i
                      className="fa fa-home"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Home
                  </button>
                </Link>
              </div>
              <Divider />

              <div className="sidebar-item">
                <Link to="/about">
                  <button style={linkStyle}>
                    <i
                      className="fa fa-user"
                      style={{ marginRight: "5px" }}
                    ></i>
                    About
                  </button>
                </Link>
              </div>
              <Divider />
              <div className="sidebar-item">
                <Link to="/blogs">
                  <button style={linkStyle}>
                    <i
                      className="fa fa-blog"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Blogs
                  </button>
                </Link>
              </div>
              <Divider />
              {/* <div className="sidebar-item">
            <Link to="/services">
              <button style={linkStyle}>
                <i className="fa fa-list" style={{ marginRight: "5px" }}></i>
                Services
              </button>
            </Link>
          </div>
          <Divider /> */}
              <div className="sidebar-item">
                <Link to="/projects">
                  <button style={linkStyle}>
                    <i
                      className="fa fa-briefcase"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Projects
                  </button>
                </Link>
              </div>
              <Divider />
              <div className="sidebar-item">
                <Link to="/contact">
                  <button style={linkStyle}>
                    <i
                      className="fa fa-comments"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Contact Me
                  </button>
                </Link>
              </div>
              <Divider />
            </nav>
            <div style={{ marginTop: "180px", textAlign: "center" }}>
              <h5 style={{ fontWeight: "400", fontSize: "14px" }}>
                &copy; 2021, Ismatul Islam Pranto
              </h5>
            </div>
          </div>
        ) : (
          <MobileDrawer></MobileDrawer>
        )}
      </div>
    );
};

export default Sidebar;