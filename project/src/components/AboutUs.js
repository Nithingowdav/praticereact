import React from 'react';
import { Row, Col, Typography, Image } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  // Inline styles
  const containerStyle = {
    padding: '50px',
    backgroundColor: '#f9f9f9',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const colImageStyle = {
    padding: '10px',
  };

  const colContentStyle = {
    padding: '10px',
  };

  const imageStyle = {
    borderRadius: '8px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <Row gutter={16} style={rowStyle}>
        {/* Left Column: Image */}
        <Col xs={24} sm={12} md={8} style={colImageStyle}>
          <Image
            src="https://www.videvo.net/images/new_nav_logo.svg" // Replace with your image URL
            alt="About Us"
            style={imageStyle}
          />
        </Col>

        {/* Right Column: Content */}
        <Col xs={24} sm={12} md={16} style={colContentStyle}>
          <Title level={2}>About Us</Title>
          <Paragraph>
            We are a company dedicated to providing high-quality products and services to our customers. Our mission is to deliver exceptional value and exceed expectations through innovation and excellence.
          </Paragraph>
          <Paragraph>
            Our team consists of experienced professionals committed to continuous improvement and customer satisfaction. We believe in building long-term relationships based on trust and mutual respect.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
