import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FaRegHandPointRight } from "react-icons/fa";

function Home2() {
  return (
    <div className='workexp'>
      <h1 className="project-heading">Where I’ve <span className='purple'>Worked</span></h1>
      <Tab.Container defaultActiveKey="first">
        <Row className="workTab">
          <Col sm={3} className='tabListSection'>
            <Nav className="flex-column tabList">
              <Nav.Item className='tabContent'>
                <Nav.Link eventKey="first" className='tabItem'>
                  CloudDrove (Associate DevOps Engineer)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='tabContent'>
                <Nav.Link eventKey="second" className='tabItem'>
                  CloudDrove (DevOps Intern)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='tabContent'>
                <Nav.Link eventKey="third" className='tabItem'>
                  BuySale (DevOps Trainee)
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className='tabContentSection'>
            <Tab.Content>
              <Tab.Pane className='tabContent' eventKey="first">
                <h2>Associate DevOps Engineer <span className='purple'>@CloudDrove</span></h2>
                <h3>Dec 2023 - Present</h3>
                <div className='Workdesc'>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Created Dockerfiles for application deployment, developed pipelines for building and pushing Docker images on ACR, and deployed applications on Azure App Service using Azure Cloud and Azure DevOps.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Implemented CI/CD pipelines using GitHub Actions to automate the continuous integration and deployment processes to enhance software development workflows.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Deployed applications on EKS clusters, validating pod management, and implemented monitoring solutions using Grafana and Prometheus through Helm deployment, streamlining the setup process for efficient monitoring and visualization within the Kubernetes environment.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Orchestrated infrastructure deployment and management by developing modular and scalable Terraform scripts, ensuring efficient provisioning and maintenance of cloud resources on AWS and Azure platforms.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Gained expertise in OpenShift cluster administration, application deployment, and container orchestration.
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className='tabContent' eventKey="second">
                <h2>DevOps Intern <span className='purple'>@CloudDrove</span></h2>
                <h3>June 2023 - Nov 2023</h3>
                <div className='Workdesc'>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Built continuous integration & continuous deployment pipelines using GitHub Actions, managed source code repositories using GIT and GITHUB, and developed modular infrastructure using Terraform.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Utilized Route53 for DNS management and load-balancing, ensuring high availability and fault tolerance.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Implemented auto scaling using load-balancer to dynamically adjust resources based on application demand.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Advanced proficiency in Linux system administration and adept utilization of Git for version control, ensuring seamless collaboration and code management in diverse software development environments.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Expertise in infrastructure as code (IaC) with Terraform, streamlining the deployment and management of cloud resources for scalable and efficient solutions.
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className='tabContent' eventKey="third">
                <h2>DevOps Trainee <span className='purple'>@BuySale</span></h2>
                <h3>Jan 2023 - May 2023</h3>
                <div className='Workdesc'>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Designed and implemented a highly scalable infrastructure using VPC, EC2 instances, subnets, gateway, route table and IAM for web application, Utilized S3 to store and manage applications files, ensuring high availability.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Designed and implemented end-to-end DevOps pipelines using GitLab, Jenkins, and Docker for automated code deployment, ensuring efficient and rapid development cycles.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> Expertly integrated AWS services, harnessing the power of Amazon Simple Notification Service (SNS) and Simple Email Service (SES) to orchestrate seamless communication and deliver scalable email solutions within cloud environments.
                  </div>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/> During Trainee period learn and hands-on on various technologies like Terraform, Docker and Kubernetes with cloud technology AWS.
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Home2;
