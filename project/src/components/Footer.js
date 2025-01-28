import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation
import './Footer.css';

const { Footer } = Layout;
const { Text, Title, Link } = Typography;

const CustomFooter = () => {
  return (
    <Footer className="footer-container">
      <Row gutter={[16, 16]} justify="space-between">
        {/* About Section */}
        <Col xs={24} sm={8} md={7}>
          <Title level={4} className="footer-title">
            ABOUT VIDEVO
          </Title>
          <Text className="footer-text">
            Videvo offers free stock videos and motion graphics for use in any
            project. You may use these video clips free of charge, in both
            personal and commercial productions. Video clips that carry the
            Creative Commons 3.0 license must be attributed to the original
            author.
          </Text>
          <br />
          <Link href="mailto:support@videvo.net" className="footer-link">
            support@videvo.net
          </Link>
        </Col>

        {/* Quick Links & Social Media Section in a Row */}
        <Col xs={24} sm={16} md={14}>
          <Row gutter={[16, 16]} className="footer-quick-links">
            <Col span={12}>
              <Title level={4} className="footer-title">
                QUICK LINKS
              </Title>
              <Row>
                <Col span={12}>
                  <RouterLink to="/" className="footer-link">
                    Home
                  </RouterLink>
                  <RouterLink to="/service" className="footer-link">
                    Service
                  </RouterLink>
                  <RouterLink to="/about" className="footer-link">
                    About
                  </RouterLink>
                  <RouterLink to="/contact" className="footer-link">
                    Contact
                  </RouterLink>
                </Col>
              </Row>
            </Col>

            {/* Social Media */}
            <Col span={12} className="footer-social-media">
              <Title level={4} className="footer-title">
                SOCIAL MEDIA
              </Title>
              <div className="social-icons">
                <TwitterOutlined />
                <YoutubeOutlined />
                <FacebookOutlined />
                <InstagramOutlined />
              </div>
              <Divider className="divider" />
              <Title level={4} className="footer-title">
                SITE LANGUAGE
              </Title>
              <Text className="site-language-text">English</Text>
              <Text className="site-language-text">Spanish</Text>
              <Text className="site-language-text">Deutsch</Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider className="divider" />
      <Text className="footer-copyright">
        Copyright ©2025 Freepik Company S.L. All rights reserved.
      </Text>
    </Footer>
  );
};

export default CustomFooter;
