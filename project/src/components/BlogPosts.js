import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const blogPosts = [
  {
    title: "Freepik Launches Revolutionary AI-Powered Video Background Generator",
    description:
      "Freepik, a leading name in the world of digital resources, has taken a bold step forward in content creation by unveiling its latest AI-driven...",
    image: "https://www.videvo.net/blog/wp-content/uploads/2024/10/colorful-explosion-smoke-500x314.jpeg", // Replace with your image link
  },
  {
    title: "How to Edit Ambience Recordings",
    description:
      "Editing ambience recordings needs a light touch. Here’s what you need to know. After a long few days of recording ambient sounds, the time...",
    image: "https://www.videvo.net/blog/wp-content/uploads/2024/04/Original-Shot-1024x576-1-889x500.jpg", // Replace with your image link
  },
  {
    title: "Understanding the Grip and Electrical Departments on a Film Set",
    description:
      "Cinematographers are only as good as their crew, so let’s discuss what each crew member does to help them get to the finish line. Today we’ll...",
    image: "https://www.videvo.net/blog/wp-content/uploads/2024/04/On-Set-Roles-CI-822x500.png", // Replace with your image link
  },
];

const BlogPosts = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Latest Blog Posts
      </Title>
      <Paragraph style={{ textAlign: "center", marginBottom: "40px" }}>
        Stay updated with the latest trends, tips, and insights from the world of stock footage and multimedia production. Our blog features articles on a wide range of topics, from creative techniques to industry news, helping you make the most of our resources and improve your projects. Whether you're a seasoned professional or just starting out, our blog provides valuable information and inspiration to help you succeed.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {blogPosts.map((post, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={post.title}
                  src={post.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
            >
              <Card.Meta
                title={post.title}
                description={post.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="#" style={{ color: "#1890ff", fontWeight: "bold" }}>
          Visit the blog for more → </a>
      </div>
    </div>
  );
};

export default BlogPosts;
