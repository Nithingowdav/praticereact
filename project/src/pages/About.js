import React, { useState } from "react";
import { Card, Button, Modal, Image, Typography } from "antd";

const { Title } = Typography;

const About = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isCardDisabled, setIsCardDisabled] = useState(false);
  const [isNewButtonVisible, setIsNewButtonVisible] = useState(false);
  const [imageUrl] = useState(
    "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleCardClick = () => {
    setIsButtonEnabled(true);
  };

  const handleButtonClick = () => {
    setIsImageVisible(true);
    setIsButtonEnabled(false);
    setIsCardDisabled(false);
  };

  const handleImageClick = () => {
    setIsNewButtonVisible(true);
    setIsCardDisabled(true);
  };

  const handleNewButtonClick = () => {
    console.log("Modal is being triggered");
    Modal.info({
      title: "Info Modal",
      content: "This is a basic modal test.",
    });
  };

  return (
    <div>
      <Title level={3}>About Section</Title>

      {!isImageVisible && (
        <Card
          title="Click on the Card to Enable Button"
          bordered={false}
          style={{ width: 300, marginBottom: 20 }}
          onClick={handleCardClick}
          disabled={isCardDisabled}
        >
          <p>This is the About section. Click the card to enable the button below.</p>
        </Card>
      )}

      {isButtonEnabled && (
        <Button
          type="primary"
          onClick={handleButtonClick}
          disabled={isCardDisabled}
        >
          Show Image
        </Button>
      )}

      {isImageVisible && (
        <div style={{ marginTop: 20 }}>
          <Image
            width={300}
            src={imageUrl}
            alt="Sample Image"
            style={{ cursor: "pointer" }}
            onClick={handleImageClick}
          />
        </div>
      )}

      {isNewButtonVisible && (
        <Button
          type="primary"
          onClick={handleNewButtonClick}
          style={{ marginTop: 20 }}
        >
          Show Success Message
        </Button>
      )}
    </div>
  );
};

export default About;
