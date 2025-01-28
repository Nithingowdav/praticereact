import React, { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Form submitted successfully!');

    alert(`Submitted Data:
    First Name: ${values.firstName}
    Last Name: ${values.lastName}
    Phone Number: ${values.phoneNumber}
    Email: ${values.email}
    Description: ${values.description}`);

    console.log(values);

    setIsSubmitted(true);
    form.resetFields();
  };

  return (
    <div className="contact-container">
      <Card
        title="Contact Us"
        bordered={false}
        className="contact-card"
      >
        <Form
          form={form}
          name="contact_form"
          onFinish={onFinish}
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            description: '',
          }}
          layout="vertical"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} disabled={isSubmitted} placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} disabled={isSubmitted} placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              {
                pattern: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits!',
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              maxLength={10}
              disabled={isSubmitted}
              placeholder="Enter your phone number"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'The input is not a valid email!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              disabled={isSubmitted}
              placeholder="Enter your email address"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please provide a description!',
              },
              {
                min: 10,
                message: 'Description must be at least 10 characters long!',
              },
            ]}
          >
            <Input.TextArea rows={4} disabled={isSubmitted} placeholder="Enter a brief description" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              disabled={isSubmitted}
              className="submit-btn"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
