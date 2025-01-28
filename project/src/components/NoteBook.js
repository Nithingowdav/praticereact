import React, { useState } from 'react';
import { Row, Col, Typography, Image, Button } from 'antd';
import { CheckCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './NoteBook.css';
import home from  '../components/images/home-1.webp';

const { Title, Paragraph } = Typography;
const NoteBook = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleExplanation = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle explanation visibility
  };

  const explanations = [
    {
      title: "Free stock videos",
      text: "Gain access to over 50,000 free stock video clips and motion graphics, including animated backgrounds and hundreds of free sound effects.",
      imgSrc: home,

    },
    {
      title: "Hassle-free licensing",
      text: "Our content is licensed under the Videvo Attribution License or Creative Commons 3.0, allowing you to use the content in a wide range of productions, even commercially.",
      imgSrc: "/images/home-2.webp"
    },
    {
      title: "New Clips Daily",
      text: "Our extensive library of over 3 million stock media clips is continuously growing. New video clips, sound effects, and music tracks are added daily.",
      imgSrc: "/images/home-3.webp"
    },
  ];

  return (
    <div className="notebook-container">
      <Title level={2} className="heading">
        Why you'll love Videvo
      </Title>

      <Row gutter={[16, 16]} justify="center" className="content-row">
        {/* Full container with border */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="explanation-wrapper">
            {/* Left Column: Explanation Items */}
            <div className="explanation-column">
              {explanations.map((item, index) => (
                <div key={index} className="explanation-item">
                  <div
                    className="explanation-header"
                    onClick={() => handleToggleExplanation(index)}
                  >
                    <CheckCircleOutlined className="icon" />
                    <Title level={4} className="title">{`${index + 1}. ${item.title}`}</Title>
                    <Button
                      icon={<PlusOutlined />}
                      className="toggle-button"
                      size="small"
                    />
                  </div>

                  {/* Explanation content */}
                  {activeIndex === index && (
                    <div className="explanation-content">
                      <Col span={24}>
                        <Paragraph>{item.text}</Paragraph>
                      </Col>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Column: Image */}
        {activeIndex !== null && (
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className="image-column">
              <Image
                src={explanations[activeIndex].imgSrc}
                alt={explanations[activeIndex].title}
                className="explanation-image"
              />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default NoteBook;
