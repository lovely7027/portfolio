import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import socialMedia from "../../Assets/Projects/project.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Automated DevOps Pipeline (GitLab, Jenkins, Docker)"
              description="Designed and implemented an end-to-end DevOps pipeline using GitLab, Jenkins, and Docker. Automated code deployment from GitLab to Docker server upon code commit, ensuring efficient and rapid development cycles."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="EKS Cluster Automation (Terraform, GitHub Workflows)"
              description="Developed Terraform scripts for automatic deployment and destruction of EKS cluster. Implemented GitHub Workflows to seamlessly manage the lifecycle of EKS clusters, enhancing scalability and resource utilization."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Azure Pipeline for Dockerized App Deployment"
              description="Prepared Azure Pipeline to build application images to Azure Container Registry (ACR), and consistent deployment on App Service."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Streamlined CI/CD, Git/GitHub Management, Terraform Infrastructure, EKS Deployment, and Kubernetes Monitoring"
              description="Successfully implemented a robust CI/CD pipeline using GitHub Actions, managed source code repositories with Git and GitHub, developed modular infrastructure using Terraform, deployed applications on EKS clusters, and configured monitoring with Grafana and Prometheus for Kubernetes environments."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
