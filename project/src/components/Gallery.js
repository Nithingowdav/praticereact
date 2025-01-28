import React from 'react';
import { Card, Row, Col } from 'antd';

const galleryData = [
  { id: 1, title: 'Image 1', description: 'Description for Image 1', src: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43bb_6386328bea96dffacc89946b_d1.webp' },
  { id: 2, title: 'Image 2', description: 'Description for Image 2', src: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43e7_6373a30ef360d6333cfde7da_02%2520Development%2520Types%2520-%25203%2520web%2520development%2520types.png' },
  { id: 3, title: 'Image 3', description: 'Description for Image 3', src: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43bf_63863275b4afe016589ba213_a3.webp' },
  { id: 1, title: 'Image 4', description: 'Description for Image 4', src: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43bb_6386328bea96dffacc89946b_d1.webp' },
];

const Gallery = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Gallery</h2>
      <Row gutter={[16, 16]}>
        {galleryData.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.src} />}
            >
              <Card.Meta title={item.title} description={item.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;