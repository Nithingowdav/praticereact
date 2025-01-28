import React from "react";
import { Row, Col, Card } from "antd";

const videoData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Video ${index + 1}`, // Fixed: Backticks used for template literals
  thumbnail: `https://via.placeholder.com/300x200?text=Video+${index + 1}`, // Fixed: Backticks used for template literals
  videoUrl: "https://videos.pexels.com/video-files/852421/852421-sd_640_360_30fps.mp4", 
}));

const VideoGrid = () => {
  return (
    <div style={{ margin: "20px" }}>
      <Row gutter={[16, 16]}>
        {videoData.map((video) => (
          <Col xs={24} sm={12} md={8} lg={6} key={video.id}>
            <Card
              hoverable
              cover={
                <video
                  width="100%"
                  height="auto"
                  controls
                  preload="metadata"
                  loop
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
              }
            >
              <Card.Meta title={video.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoGrid;
