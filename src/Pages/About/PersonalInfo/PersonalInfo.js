import { Divider, Grid } from '@mui/material';
import React from 'react';

const PersonalInfo = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Birthday:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              14 November
            </span>
          </h4>
          <Divider />
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Hobby:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              Writing
            </span>
          </h4>
          <Divider />

          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Country:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              Bangladesh
            </span>
          </h4>
          <Divider />

          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            City:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              Jamalpur
            </span>
          </h4>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Age:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              20
            </span>
          </h4>
          <Divider />
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Email:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "13px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              prantokhaan@gmail.com
            </span>
          </h4>
          <Divider />
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Phone:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              +8801879597656
            </span>
          </h4>
          <Divider />
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#302e4d",
            }}
            className="py-2"
          >
            Freelance:{" "}
            <span
              style={{
                color: "#504e70",
                fontSize: "15px",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              Available
            </span>
          </h4>
          <Divider />
        </Grid>
      </Grid>
    );
};

export default PersonalInfo;