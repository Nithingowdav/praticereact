import React from "react";
import { Row, Col, Card, Carousel } from "antd";
import './vidio.css';

const carouselData = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  imageUrl: `https://picsum.photos/200/200?random=${index + 1}`, // Small random image
  explanation: `This is explanation for Image ${index + 1}. It's a random image showing a beautiful scene.`,
}));

const videoData = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  videoUrl: `https://videos.pexels.com/video-files/852421/852421-sd_640_360_30fps.mp4`, // Placeholder video URL, you can add more
}));

const VideoLayout = () => {
  return (
    <div className="video-grid-container">
      <Row gutter={[16, 16]}>
        {/* Video Grid Section */}
        {videoData.map((video) => (
          <Col xs={24} sm={12} md={8} lg={6} key={video.id}>
            <Card
              hoverable
              className="video-card"
              cover={
                <video
                  width="100%"
                  height="auto"
                  controls
                  preload="metadata"
                  loop
                >
                  <source
                    src={video.videoUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              }
            >
              <Card.Meta title={`Video ${video.id}`} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel autoplay>
          {carouselData.map((item) => (
            <div key={item.id}>
              <img
                src={item.imageUrl}
                alt={`Random Image ${item.id}`}
                className="carousel-image"
              />
              <div className="carousel-text-overlay">
                <p>{item.explanation}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VideoLayout;
