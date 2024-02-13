import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Lovely Kumari </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I'm a passionate and results-driven DevOps Engineer with a strong foundation in building and optimizing robust infrastructure solutions.
            <br/>
            My journey began with a <span className="purple">B.A. Programme</span> from <span className="purple"> Delhi University </span>, where I honed my analytical and problem-solving skills. 
            <br/>
            My interest in automating and streamlining processes led me into the realm of DevOps, and since then, I've been designing and implementing continuous integration and deployment pipelines to enhance development workflows.

            My professional career started at <span className="purple">CloudDrove</span>, where I transitioned from a DevOps Intern to an Associate DevOps Engineer.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Automate with purpose, deploy with passion, leave a legacy of efficiency"{" "}
          </p>
          <footer className="blockquote-footer">lovely</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
