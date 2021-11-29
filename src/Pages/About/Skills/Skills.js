import React from 'react';

const Skills = () => {
    return (
      <div>
        <div>
          <h3 style={{ color: "#302e4d" }}>Skills</h3>
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
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
            </p>
            <h5 className="ps-4 ms-3">Front-end</h5>
            <ul>
                <li className="ms-5">HTML, CSS, Javascript</li>
                <li className="ms-5">React JS, React Router</li>
                <li className="ms-5">BootStrap, Tailwind, Material-UI</li>
            </ul>
            
          </div>
          <div className="mb-5">
            <p className="ps-4 ms-3 my-3">
              <i className="circle-dot"></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
            </p>
            <h5 className="ps-4 ms-3">Back-end & Database</h5>
            <ul>
                <li className="ms-5">Node JS</li>
                <li className="ms-5">Express JS</li>
                <li className="ms-5">MongoDB</li>
            </ul>
            
          </div>
          <div className="mb-5">
            <p className="ps-4 ms-3 my-3">
              <i className="circle-dot"></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
              <i
                className="fas fa-certificate me-3"
                style={{ color: "#ec1839" }}
              ></i>
            </p>
            <h5 className="ps-4 ms-3">Tools</h5>
            <ul>
                <li className="ms-5">VS Code, Chrome Dev Tools</li>
                <li className="ms-5">Github, Heroku, Netlify</li>
                <li className="ms-5">Firebase</li>
            </ul>
            
          </div>
        </div>
      </div>
    );
};

export default Skills;