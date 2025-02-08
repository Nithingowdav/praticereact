import React, { useState, useEffect } from "react";
import { Select, Card, Row, Col, Typography, Button, Spin, Modal, Input, Slider, Pagination, Badge, List } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const ShoppingComponent = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);
  const productsPerPage = 9;

  // Fetch categories and products
  const LoadCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(["All", ...data]);
      });
  };

  const LoadProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    LoadCategories();
    LoadProducts();
  }, []);

  // Filter by category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  // Sort products
  const handleSortChange = (value) => {
    setSortOption(value);
    let sortedProducts = [...filteredProducts];
    if (value === "priceLow") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "priceHigh") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "rating") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setFilteredProducts(sortedProducts);
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products by search term
  const filteredBySearch = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle price range change
  const handlePriceChange = (value) => {
    setPriceRange(value);
    setFilteredProducts(
      products.filter((p) => p.price >= value[0] && p.price <= value[1])
    );
  };

  // Handle rating filter change
  const handleRatingFilter = (value) => {
    setRatingFilter(value);
    setFilteredProducts(
      products.filter((p) => p.rating.rate >= value)
    );
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Show modal for product details
  const showModal = (product) => {
    setModalProduct(product);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredBySearch.slice(indexOfFirstProduct, indexOfLastProduct);

  // Toggle Cart visibility
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Calculate total price in cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ maxWidth: "90%", margin: "auto", padding: "20px" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1890ff",
          padding: "15px 30px",
          color: "#fff",
          borderRadius: "8px",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
          MyLogo
        </div>
        
        <div style={{ flexGrow: 1, marginLeft: "20px" }}>
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              width: "100%",
              padding: "8px 16px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>

        {/* Cart Icon */}
        <Badge count={cart.reduce((total, product) => total + product.quantity, 0)} style={{ backgroundColor: '#52c41a' }}>
          <ShoppingCartOutlined
            style={{ fontSize: "24px", color: "#fff" }}
            onClick={toggleCart}
          />
        </Badge>
      </header>

      {/* Cart Overlay */}
      {isCartVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: "300px",
            height: "100%",
            color: "#fff",
            padding: "20px",
            overflowY: "auto",
            zIndex: 999,
          }}
        >
          <h3>Your Cart</h3>
          {cart.length > 0 ? (
            <div>
              {cart.map((product) => (
                <div key={product.id} style={{ marginBottom: "15px" }}>
                  <p>{product.title} x {product.quantity}</p>
                  <p>💲 {product.price * product.quantity}</p>
                  <Button 
                    danger
                    onClick={() => handleRemoveFromCart(product.id)}
                    style={{ marginTop: "5px" }}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <h4>Total: 💲{calculateTotalPrice()}</h4>
              <Button type="primary" style={{ marginTop: "15px" }}>
                Checkout
              </Button>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}

      {/* Filters */}
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={6}>
          <Title level={4}>Select a Category</Title>
          <Select
            value={selectedCategory}
            style={{ width: "100%" }}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <Option key={category} value={category}>
                {category.toUpperCase()}
              </Option>
            ))}
          </Select>

          {/* Price Range Slider */}
          <Title level={4} style={{ marginTop: "20px" }}>
            Price Range
          </Title>
          <Slider
            range
            min={0}
            max={1000}
            defaultValue={[0, 1000]}
            onChange={handlePriceChange}
            tipFormatter={(value) => `$${value}`}
          />

          {/* Rating Filter */}
          <Title level={4} style={{ marginTop: "20px" }}>
            Rating
          </Title>
          <Slider
            min={0}
            max={5}
            step={0.5}
            defaultValue={0}
            onChange={handleRatingFilter}
            tipFormatter={(value) => `${value} Stars`}
          />

          {/* Sort By */}
          <Title level={4} style={{ marginTop: "20px" }}>
            Sort By
          </Title>
          <Select
            value={sortOption}
            style={{ width: "100%" }}
            onChange={handleSortChange}
          >
            <Option value="default">Default</Option>
            <Option value="priceLow">Price: Low to High</Option>
            <Option value="priceHigh">Price: High to Low</Option>
            <Option value="rating">Rating</Option>
          </Select>
        </Col>

        <Col span={18}>
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Spin size="large" />
            </div>
          ) : (
            <Row gutter={[16, 16]}>
              {currentProducts.map((product) => (
                <Col key={product.id} span={8}>
                  <Card
                    cover={
                      <img
                        alt={product.title}
                        src={product.image}
                        style={{
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />
                    }
                    hoverable
                  >
                    <Title level={5}>{product.title}</Title>
                    <p>
                      <b>💲 Price:</b> ${product.price}
                    </p>
                    <p>
                      <b>⭐️ Rating:</b> {product.rating.rate} (
                      {product.rating.count} reviews)
                    </p>
                    <Button type="primary" onClick={() => showModal(product)}>
                      View Details
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => handleAddToCart(product)}
                      style={{ marginTop: "10px" }}
                    >
                      Add to Cart
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        total={filteredBySearch.length}
        pageSize={productsPerPage}
        onChange={handlePageChange}
      />

      {/* Product Details Modal */}
      <Modal
        title={modalProduct?.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <img
          alt={modalProduct?.title}
          src={modalProduct?.image}
          style={{ width: "100%" }}
        />
        <p>{modalProduct?.description}</p>
        <p>
          <b>💲 Price:</b> ${modalProduct?.price}
        </p>
        <p>
          <b>⭐️ Rating:</b> {modalProduct?.rating?.rate} (
          {modalProduct?.rating?.count} reviews)
        </p>
        <h3>Reviews:</h3>
        <List
          dataSource={modalProduct?.reviews || []}
          renderItem={(review) => (
            <List.Item>
              <p><b>{review.name}:</b> {review.comment}</p>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default ShoppingComponent;
