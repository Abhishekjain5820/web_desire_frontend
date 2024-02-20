import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ProductListing.css"; // Import CSS file
import axios from "axios"; // Import Axios for HTTP requests

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the database
    axios
      .get("http://localhost:5000/api/v1/product/getAllProducts")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Run only once on component mount

  return (
    <section className="product-listing">
      <div className="container">
        <h2>Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id}>
              {/* Wrap each product item with a Link */}
              <div className="product-item">
                {console.log(product.imageUrls[0])}
                <img src={product.imageUrls[0]} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                {/* Add more product details as needed */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
