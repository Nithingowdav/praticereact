import React, { useState } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './MusicCarousel.css';
import { data } from './contants/Contants';

const MusicCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next card
  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.initialMusicData.length);
  };

  // Move to the previous card
  const movePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.initialMusicData.length) % data.initialMusicData.length
    );
  };

  return (
    <div className="music-carousel-container">
      <h2 className="music-carousel-header">Royalty-free music and sound effects</h2>
      <p className="music-carousel-subtext">
        Enhance your projects with our vast library of royalty-free music and sound effects.
      </p>

      <div className="carousel-container">
        <Button
          onClick={movePrev}
          className="carousel-button carousel-button-left"
        >
          &lt;
        </Button>

        <div
          style={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`, // Only one card will move at a time
            width: `${data.initialMusicData.length * 100}%`, // Ensure all cards are side by side
          }}
        >
          {data.initialMusicData.map((track, idx) => (
            <div key={idx} className="carousel-card">
              <h3 className="carousel-card-title">{track.title}</h3>
              <p className="carousel-card-subtitle">By: {track.creator}</p>
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                className="carousel-card-play-button"
              >
                Play
              </Button>
            </div>
          ))}
        </div>

        <Button
          onClick={moveNext}
          className="carousel-button carousel-button-right"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default MusicCarousel;
