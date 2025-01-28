import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Header } = Layout;

const navItems = [
  { key: "1", label: <Link to="/">Home</Link> },
  { key: "2", label: <Link to="/service">Service</Link> },
  { key: "3", label: <Link to="/about">About</Link> },
  { key: "4", label: <Link to="/contact">Contact</Link> },
  { key: "5", label: <Link to="/Portfolio">Portfolio</Link> },
  { key: "6", label: <Link to="/SearchImages">Images</Link> }
];

const AppHeader = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/contact");
  };

  return (
    <Header
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1890ff" }}>
        MyLogo
      </div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ flex: 1, justifyContent: "center", borderBottom: "none" }}
        items={navItems}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <Button type="primary">Sign Up</Button>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </Header>
  );
};

export default AppHeader;
