import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJenkins
} from "react-icons/di";
import {
  SiLinux,
  SiAmazonaws,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiGitlab,
  SiTerraform,
  SiRedhatopenshift,
  SiAzuredevops,
  SiGrafana,
  SiPrometheus
} from "react-icons/si";
import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h4>Linux</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h4>AWS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <h4>Azure</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithubAlt />
        <h4>GitHub</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
        <h4>Jenkins</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h4>Docker</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <h4>Kubernetes</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
        <h4>Ansible</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <h4>GitLab</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <h4>Terraform</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhatopenshift />
        <h4>OpenShift</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <h4>Azure DevOps</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoInfinite />
        <h4>CI/CD</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <h4>Grafana</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
        <h4>Prometheus</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
