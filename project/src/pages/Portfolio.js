// src/components/Portfolio.js
import React from "react";
import { Card, Row, Col, Button } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

const { Meta } = Card;

const portfolioData = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43b1_638632bb73bbec3f49536506_a5.webp", // Replace with actual image
    githubLink: "https://github.com/username/project1", // Replace with actual link
    demoLink: "https://project1.com", // Replace with actual demo link
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRAsVFC8donvw5fIopgCADbZ0Eyc4b6XwnA&s", // Replace with actual image
    githubLink: "https://github.com/username/project2", // Replace with actual link
    demoLink: "https://project2.com", // Replace with actual demo link
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div style={{ padding: "50px 0", background: "#f0f2f5" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>My Portfolio</h2>
      <Row gutter={[16, 16]} justify="center">
        {portfolioData.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} />}
              style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <Meta
                title={project.title}
                description={project.description}
              />
              <div style={{ marginTop: "10px" }}>
                <Button
                  type="link"
                  icon={<GithubOutlined />}
                  href={project.githubLink}
                  target="_blank"
                  style={{ marginRight: "10px" }}
                >
                  GitHub
                </Button>
                <Button
                  type="link"
                  icon={<LinkOutlined />}
                  href={project.demoLink}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
