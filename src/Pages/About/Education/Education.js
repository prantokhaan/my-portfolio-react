import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Education = () => {
    return (
      <div>
        <div>
          <h3 style={{ color: "#302e4d" }}>Education</h3>
        </div>
        <div
          className="timeline"
          style={{
            border: "2px solid #e8dfec",
            backgroundColor: "#fff",
            boxShadow: "0 0 15px #d4d4e3",
            borderRadius: "15px",
            marginRight: "50px",
            marginLeft: "10px",
          }}
        >
          <div className="mb-5">
            <p className="ps-4 ms-3 my-3">
              <i className="circle-dot"></i>
              <i className="fa fa-calendar"></i> 2018 - 2020
            </p>
            <h5 className="ps-4 ms-3">Higher Secondary Certificate</h5>
            <h6 className="ps-4 ms-3" style={{ fontSize: "15px" }}>
              Mymensingh Govt College
            </h6>
            <p className="ps-4 ms-3" style={{ fontWeight: 600 }}>
              Background:{" "}
              <span style={{ color: "#504e70", fontWeight: 400 }}>Science</span>
            </p>
            <p
              className="ps-4 ms-3"
              style={{ fontWeight: 600, marginTop: "-7px" }}
            >
              GPA:{" "}
              <span style={{ color: "#504e70", fontWeight: 400 }}>5.00</span>
            </p>
          </div>
          <div className="mb-5">
            <p className="ps-4 my-3 ms-3">
              <i className="circle-dot"></i>
              <i className="fa fa-calendar"></i> 2018 - 2020
            </p>
            <h5 className="ps-4 ms-3">Senior School Certificate</h5>
            <h6 className="ps-4 ms-3" style={{ fontSize: "15px" }}>
              Digpaiet D.K High School
            </h6>
            <p className="ps-4 ms-3" style={{ fontWeight: 600 }}>
              Background:{" "}
              <span style={{ color: "#504e70", fontWeight: 400 }}>Science</span>
            </p>
            <p
              className="ps-4 ms-3"
              style={{ fontWeight: 600, marginTop: "-7px" }}
            >
              GPA:{" "}
              <span style={{ color: "#504e70", fontWeight: 400 }}>5.00</span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Education;