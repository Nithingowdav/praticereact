// src/components/FAQ.js
import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQ = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Frequently Asked Questions</h2>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="What is this project about?" key="1">
          <p>
            This project is designed to help users [describe the main purpose
            and features of your project].
          </p>
        </Panel>
        <Panel header="How do I get started?" key="2">
          <p>Follow the installation and setup instructions outlined in the documentation.</p>
        </Panel>
        <Panel header="What technologies are used in this project?" key="3">
          <p>
            The project is built using the following technologies:
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Ant Design</li>
              {/* Add other technologies used */}
            </ul>
          </p>
        </Panel>
        <Panel header="Is this project open-source?" key="4">
          <p>Yes, the project is open-source. You can find the repository on GitHub.</p>
        </Panel>
        <Panel header="How can I contribute?" key="5">
          <p>
            Fork the repository, make your changes in a new branch, and then submit a pull request.
          </p>
        </Panel>
        {/* Add more FAQ items as needed */}
      </Collapse>
    </div>
  );
};

export default FAQ;
