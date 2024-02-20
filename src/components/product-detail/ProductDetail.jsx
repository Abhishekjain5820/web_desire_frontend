import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/product/getProduct/${productId}`
        );
        if (response.status === 200) {
          setProduct(response.data.product);
        } else {
          console.error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);
  const [quantity, setQuantity] = useState(1); // Initialize with default quantity

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value)); // Ensure quantity is at least 1
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Implement logic to add to cart here (e.g., using Redux, context API, or other state management)
    alert(`Adding ${quantity} items to cart`);
  };

  const addToCart = (productId) => {
    // Implement your addToCart function here
  };

  return (
    <div className="pd-wrap">
  <div className="container">
    <div className="row">
      <div className="col-md-6 image-col">
        <img src="../src/assets/images/post-item1.jpg" alt="image" className="product-photo" />
      </div>
      <div className="col-md-6 content-col">
        <div className="product-dtl">
          <div className="product-info">
            <div className="product-name">Variable Product</div>
            <div className="reviews-counter">
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" defaultChecked />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>
              <span>3 Reviews</span>
            </div>
            <div className="product-price-discount">
              <span>$39.00</span>
              <span className="line-through">$29.00</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <div className="row">
            <div className="col-md-6">
              <label for="size">Size</label>
              <select id="size" name="size" className="form-control">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="color">Color</label>
              <select id="color" name="color" className="form-control">
                <option>Blue</option>
                <option>Green</option>
                <option>Red</option>
              </select>
            </div>
          </div>
          <div className="product-count">
      <label htmlFor="quantity">Quantity</label>
      <form action="#" className="display-flex">
        <div className="qtyminus" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</div>
        <input
          type="text"
          name="quantity"
          value={quantity}
          className="qty"
          onChange={handleQuantityChange}
        />
        <div className="qtyplus" onClick={() => setQuantity(quantity + 1)}>+</div>
      </form>
      <a href="#" className="round-black-btn" onClick={handleAddToCart}>
        Add to Cart
      </a>
    </div>
      </div>
    </div>
  </div>
</div>
</div>

  );
};

export default ProductDetail;
