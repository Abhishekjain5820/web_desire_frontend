import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/product-detail/ProductDetail";
import WebLayout from "./layout/WebLayout";
import Login from "./components/Login";
// import UserProtection from "./auth/UserProtection";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" />
          <Route path="" element={<WebLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="order" element={<ProductDetail />} />
            {/* <Route path="cart" element={
              <UserProtection>
                <ProductDetail />
              </UserProtection>
            } /> */}
            <Route path="profile" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
