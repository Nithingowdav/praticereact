import React, { useState } from "react";
import { Input, Button, Row, Col, Card, Spin } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import "./SearchImages.css"; 

const { Meta } = Card;

const SearchImages = () => {
  const [searchItem, setSearchItem] = useState("");  
  const [images, setImages] = useState([]);   
  const [loading, setLoading] = useState(false); 

  const handleSearch = () => {
    console.log('Search Button Clicked. Searching for:', searchItem);  
    setLoading(true);
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchItem}&client_id=ad-B4mi77HrusB1wuTIvNzUKPNu-8qtbOTmfdhxqVdc`)
      .then((result) => {
        console.log('API Response:', result); 
        return result.json();
      })
      .then((output) => {
        console.log('Parsed Response:', output);
        setImages(output.results); 
        setLoading(false);         
      })
      .catch((error) => {
        console.error('Fetch Error:', error); 
        setLoading(false);          
      });
  };

  const handleClear = () => {
    console.log('Clear Button Clicked. Clearing data.');
    setSearchItem("");  
    setImages([]);      
  };

  return (
    <div className="search-images-container">
      <h1 className="search-images-heading">Search Images</h1>

      <p className="search-images-description">
        Enter a keyword to search for beautiful images. Click "Search" to find images from Unsplash.
      </p>

      {/* Input and buttons */}
      <Row gutter={16} justify="center" className="search-images-row">
        <Col xs={24} sm={16} md={12} lg={8}>
          <Input
            placeholder="Enter Search item"
            value={searchItem}
            onChange={(e) => {
              console.log('Input Value Changed:', e.target.value);  // Log when input changes
              setSearchItem(e.target.value);
            }}
            className="search-images-input"
          />
        </Col>
        <Col xs={24} sm={8} md={4} lg={4}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            className="search-images-button"
          >
            Search
          </Button>
        </Col>
      </Row>

      {/* Clear button */}
      <Row gutter={16} justify="center" className="search-images-row">
        <Col span={24} style={{ textAlign: "center" }}>
          <Button
            icon={<DeleteOutlined />}
            onClick={handleClear}
            className="clear-button"
          >
            Clear
          </Button>
        </Col>
      </Row>

      {/* Loading spinner or images display */}
      {loading ? (
        <div className="search-images-spinner">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {images.length > 0 ? (
            images.map((image) => (
              <Col key={image.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  className="search-images-card"
                  cover={
                    image.urls.small ? (
                      <img
                        alt={image.alt_description || "Image from Unsplash"}
                        src={image.urls.small}
                        className="search-images-card-img"
                      />
                    ) : (
                      <div className="search-images-card-fallback">
                        {image.alt_description || "No Image Available"}
                      </div>
                    )
                  }
                >
                  <Meta
                    title={image.alt_description || "Image from Unsplash"}
                    description={image.description || "No description available"}
                  />
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24}>
              <p className="no-results-message">No results found. Try another search.</p>
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default SearchImages;
