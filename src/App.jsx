import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginPage from "./Components/Login/LoginPage";
import SignupPage from "./Components/Login/SignupPage";
import ForgotPassword from "./Components/Login/ForgotPassword.jsx";
import Profile from "./Components/Pages/Profile";
import Footer from "./Components/Footer";
import ContactMe from "./Components/ContactMe.jsx";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
