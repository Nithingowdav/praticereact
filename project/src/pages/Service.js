import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const Service = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        console.log("API data:", response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];


  return (
    <div>
      <h2>Service Page - API Data</h2>
      <Table
        dataSource={data} 
        columns={columns} 
        rowKey="id" 
        pagination={{ pageSize: 20 }} 
      />
    </div>
  );
};

export default Service;
