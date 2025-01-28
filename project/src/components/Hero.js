import React from "react";
import { Input, Select, Button } from "antd";
import './Hero.css';


const { Option } = Select;

const Hero = () => {
  const videoCategories = [
    { value: "all", label: "All videos" },
    { value: "footage", label: "Footage" },
    { value: "motion", label: "Motion graphics" },
    { value: "music", label: "Music" },
    { value: "sound", label: "Sound effects" },
  ];

  return (
    <div className="hero-container">
      <h1 className="hero-title">Free stock video footage</h1>
      <p className="hero-subtitle">
        Discover over 3 million stock footage clips, motion graphics, Premiere
        Pro templates, After Effects templates, royalty-free music, and
        royalty-free sound effects.
      </p>
      <div className="hero-search">
        <Select
          defaultValue="all"
          className="hero-dropdown"
          dropdownStyle={{ zIndex: 1000 }}
        >
          {videoCategories.map((category) => (
            <Option key={category.value} value={category.value}>
              {category.label}
            </Option>
          ))}
        </Select>
        <Input.Search
          placeholder="Search all videos"
          allowClear
          enterButton="Search"
          size="large"
          className="hero-input"
        />
      </div>
      <div className="hero-links">
        <Button type="link" className="hero-link">
          All videos
        </Button>
        <Button type="link" className="hero-link">
          Popular videos
        </Button>
        <Button type="link" className="hero-link">
          Newest videos
        </Button>
        <Button type="link" className="hero-link">
          Collections
        </Button>
      </div>
    </div>
  );
};

export default Hero;
