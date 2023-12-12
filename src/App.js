import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./Components/CategoryPage";
import ProductPage from "./Components/ProductPage";
import CheckoutPage from "./Components/CheckoutPage";
import Cart from "./Components/Cart";
import img1 from "./Components/CartDummyImg.jpg";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ScrollToTop from "./Components/ScrollToTop";
import PrivacyPolicy from "./PrivacyPolicy";
import WhatsappBtn from "./Components/WhatsappBtn";
import BlogPost from './Components/BlogPost';
import CreateWholesale from './Components/CreateWholesale';
import SDS from './Components/SDS';
import AccountPage  from './Components/Account'
import Address from "./Components/Address";
// export default App;
function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   //MAKE IT ASYNC AND LOAD YOUR DATA HERE//

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loading-container">
  //       <img
  //         src={process.env.PUBLIC_URL + "/assets/logo.png"}
  //         alt="Logo"
  //         className="logo"
  //       />
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }

  const categoryData = {
    "Exterior Care": ["New Releases", "Bundles", "Shampoes", "Accessories"],
    "Interior Care": [
      "New Releases",
      "Interior Cleaner",
      "Microfiber",
      "Accessories",
    ],
    Accessories: ["Bundles", "Towels", "Clothes", "PAD", "Mits & Sponges"],
    Lubricants: [
      "Bike Engine",
      "Car Engine",
      "Gear Oil",
      "Break Oil",
      "Radiator Coolent",
      "Battery Water",
    ],
    Filters: ["Air Filter", "Oil Filter", "AC Filter"],
  };

  const date = "November 5, 2023";
  const headings = [
    "The Evolution of Surface Protection",
    "Making the Choice: Ceramic Refresh or Resist",
    "In Conclusion"
  ];
  const content = [
    "With the evolving nature of car care technology, understanding the nuances between different protection products is crucial. Gone are the days when wax was the only protection option. Today, we have a myriad of advanced products that cater to every aspect of car protection. Among these, ceramic and graphene coatings represent the pinnacle of surface protection technology.",
    [
      "Your choice ultimately hinges on your protective base.",
      "For Ceramic Coatings: If you've invested in a ceramic coating and seek regular maintenance while occasionally bolstering its protective attributes, 'Ceramic Refresh' is your go-to.",
      "For Graphene Coatings: If graphene is your protection of choice and you desire an enhancement in its protective qualities, shine, and longevity, 'Resist' is tailored for you."
    ],
    "Every car enthusiast, detailer, or owner seeks the best for their vehicle. Whether it's the rejuvenating prowess of Ceramic Refresh or the graphene-optimized strength of Resist, Ethos ensures your vehicle gets the care and protection it deserves.\n\nAt Ethos, we are more than just products; we are a commitment to excellence, ensuring every drive is as pristine as the first.\n\nFor further queries or to explore our entire product range, don't hesitate to reach out to our dedicated Ethos Customer Support Team."
  ];


  const dummyProduct = {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    quantity: 1,
    price: {sale: 9.99, old: 13.99},
    image: img1,
  };
  const dummyProduct2 = {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    quantity: 1,
    price: {sale: 9.99, old: 13.99},
    image: img1,
  };

  return (
    <Router>
      <div className="App">
        <div id="promotion" className="promotional-bar">
          <div className="promotional-content">
            <p>Get 10% off on all products. Use code: PROMO10</p>
          </div>
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryPage categoryData={categoryData} />}
          />
          <Route path="/products/:productName" element={<ProductPage />} />
          <Route
            path="/CartPage"
            element={<Cart products={[dummyProduct, dummyProduct2]} />}
          />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/BlogPost" element={<BlogPost date={date} headings={headings} content={content} />} />
          <Route path="/CreateWholesale" element={<CreateWholesale />} />
          <Route path="/SDS" element={<SDS />} /> 
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/account" element={<AccountPage  />} />
          <Route path="/account/address" element={<Address  />} />
        </Routes>
        <WhatsappBtn />
      </div>
    </Router>
  );
}
export default App;
