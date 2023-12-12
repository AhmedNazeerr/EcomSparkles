import React, { useEffect, useState } from "react";
import "./Cart.css"; // Make sure to import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import CartOrderSummary from "./CartOrderSummary";
import CartProductCard from "./CartProductCard";
import imgg from "./visa_pos_fc.png";
import imgg2 from "./CartDummyImg.jpg";
import imgg3 from "./CartDummyImg2.jpg";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeActions } from "../Features/slice";
import axios from "axios";

const dummyproducts = [
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 13.99,
    priceAfter: 9.99,
    image: imgg2,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 13.99,
    priceAfter: 9.99,
    image: imgg2,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 19.99,
    priceAfter: 14.99,
    image: imgg2,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 11.49,
    priceAfter: 7.99,
    image: imgg2,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 24.99,
    priceAfter: 19.99,
    image: imgg3,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 9.99,
    priceAfter: 6.99,
    image: imgg3,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 29.99,
    priceAfter: 24.99,
    image: imgg3,
  },
  {
    name: "Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)",
    priceBefore: 17.99,
    priceAfter: 12.99,
    image: imgg3,
  },
];

const Cart = ({products}) => {
  const dispatch = useDispatch();
  const cartdata = useSelector(state => state.cartProduct)
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    console.log(`Clicked on Checkout`);
    navigate(`/CheckoutPage`);
  };

  const [itemss, setItemss] = useState([]);

  const isSmallScreen = () => window.innerWidth < 950;
  const [smallScreen, setSmallScreen] = useState(isSmallScreen());

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(isSmallScreen());
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [total, setTotal] = useState(0);
  const [quantityArray, setQuantityArray] = useState([]);
  const [bPriceArray, setBPriceArray] = useState([]);
  const [aPriceArray, setAPriceArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    debugger;
    if (currentIndex + 4 < dummyproducts.length) {
      setCurrentIndex(currentIndex + 4);
    }

    console.log("Next clicked");
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
    console.log("Prev clicked");
  };

  const handleIncrement = async (index) => {
    console.log('i am hit.')
    const response = await axios.patch(`http://localhost:5000/api/v1/cart/inccart/2`, {
      withCredentials: true
    })
    if(response.status === 200) {
      console.log(response)
    }
    // const updatedQuantityArray = [...quantityArray];
    // updatedQuantityArray[index] = updatedQuantityArray[index] + 1;
    // setQuantityArray(updatedQuantityArray);

    // // Use updatedQuantityArray for all price calculations
    // const productPriceBefore = cartdata[index].price.old;
    // const newBPrice = productPriceBefore * updatedQuantityArray[index];
    // const updatedBPriceArray = [...bPriceArray];
    // updatedBPriceArray[index] = parseFloat(
    //   newBPrice.toFixed(
    //     productPriceBefore.toString().split(".")[1]?.length || 0
    //   )
    // );
    // setBPriceArray(updatedBPriceArray);

    // const productPriceAfter = cartdata[index].price.sale;
    // const newAPrice = productPriceAfter * updatedQuantityArray[index];
    // const updatedAPriceArray = [...aPriceArray];
    // updatedAPriceArray[index] = parseFloat(
    //   newAPrice.toFixed(productPriceAfter.toString().split(".")[1]?.length || 0)
    // );
    // setAPriceArray(updatedAPriceArray);

    // // Update the total based on updatedQuantityArray
    // const calculatedTotal = updatedAPriceArray
    //   .reduce((acc, price) => acc + price, 0)
    //   .toFixed(
    //     Math.max(
    //       ...updatedAPriceArray.map(
    //         (value) => value.toString().split(".")[1]?.length || 0
    //       )
    //     )
    //   );
    // setTotal(parseFloat(calculatedTotal));
  };

  const handleDecrement = (_value, index) => {
    if (quantityArray[index] > 1) {
      const updatedQuantityArray = [...quantityArray];
      updatedQuantityArray[index] = updatedQuantityArray[index] - 1;
      setQuantityArray(updatedQuantityArray);

      // Use updatedQuantityArray for all price calculations
      const productPriceBefore = cartdata[index].price.old;
      const newBPrice = productPriceBefore * updatedQuantityArray[index];
      const updatedBPriceArray = [...bPriceArray];
      updatedBPriceArray[index] = parseFloat(
        newBPrice.toFixed(
          productPriceBefore.toString().split(".")[1]?.length || 0
        )
      );
      setBPriceArray(updatedBPriceArray);

      const productPriceAfter = cartdata[index].price.sale;
      const newAPrice = productPriceAfter * updatedQuantityArray[index];
      const updatedAPriceArray = [...aPriceArray];
      updatedAPriceArray[index] = parseFloat(
        newAPrice.toFixed(
          productPriceAfter.toString().split(".")[1]?.length || 0
        )
      );
      setAPriceArray(updatedAPriceArray);

      // Update the total based on updatedQuantityArray
      const calculatedTotal = updatedAPriceArray
        .reduce((acc, price) => acc + price, 0)
        .toFixed(
          Math.max(
            ...updatedAPriceArray.map(
              (value) => value.toString().split(".")[1]?.length || 0
            )
          )
        );
      setTotal(parseFloat(calculatedTotal));
    }
  };

  // Call the calculateTotal function when the component mounts and when products change
  const getCartData = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/cart/get-cart-items',{
      withCredentials: true
    })
    if(response.status === 200) {
      setItemss(response.data.cartItems)
      dispatch(
        storeActions.addItemToCart(response.data.cartItems)
      );
    }
  }
  useEffect(()=> {
    getCartData()
  }, [])
  useEffect(() => {
    if(itemss.length) {
      const initialQuantities = itemss.map((item) => item.count);
    setQuantityArray(initialQuantities);

    const initialBPrices = itemss.map((item) => item.product.price); // Fix variable name
    setBPriceArray(initialBPrices);

    const initialAPrices = itemss.map((item) => item.product.discounted_price); // Fix variable name
    setAPriceArray(initialAPrices);

    let calculatedTotal = 0;
    itemss.forEach((item) => {
      const productTotal = item.product.discounted_price * item.count;
      calculatedTotal += productTotal;
    });

    // Limit calculatedTotal to the maximum decimal places present in both numbers
    calculatedTotal = calculatedTotal.toFixed(
      Math.max(
        ...initialBPrices.map(
          (price) => price.toString().split(".")[1]?.length || 0
        ),
        ...initialAPrices.map(
          (price) => price.toString().split(".")[1]?.length || 0
        )
      )
    );

    // Update the total state
    setTotal(parseFloat(calculatedTotal));
  } else {
    setTotal(0);
    }
  }, [cartdata, itemss]);

  const handleRemoveButton = (productCode) => {
    dispatch(storeActions.removeItemFromCart(productCode))
    const updatedProducts = [...itemss];
    // Remove the item at the specified index
    updatedProducts.splice(0, 1);
    // Update the state with the modified copy
    setItemss(updatedProducts);
  };

  return (
    <>
      <Navbar />
      <div className="header">
        <div className="text">YOUR CART</div>

        <div style={{ marginTop: "8px" }}>
          <div classname="secure-section">
            <span className="lock-symboll">
              <FontAwesomeIcon icon={faLock} />
              <span style={{ marginLeft: "5px" }}>SECURE</span>
            </span>
          </div>
        </div>
      </div>

      <div className="Middle">
        <div className="cartContent">
          {itemss.map((product, index) => (
            <div key={index} className="cartitem">
              <div className="cart-item-img">
                <img
                  src={imgg2}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="cart-item-content">
                <div className="productname">{product.name}</div>
                <div className="productpricequantity">
                  <div className="productprice">
                    <div className="product-price1">
                      ${product.product.discounted_price} each{" "}
                    </div>
                    <div className="product-price2">${product.product.price}</div>
                  </div>
                  <div className="quantityRecord">
                    <div className="round-button">
                      <button
                        className="minusButton"
                        onClick={() =>
                          handleDecrement(product.price.sale, index)
                        }
                        // onClick={handleRemoveButton}
                      >
                        <span className="plus-minus-sign">-</span>{" "}
                      </button>
                      <span className="Quantity">{quantityArray[index]}</span>
                      <button
                        className="plusButton"
                        onClick={() =>
                          handleIncrement(product.id)
                        }
                      >
                        {" "}
                        <span className="plus-minus-sign">+</span>
                      </button>
                    </div>
                  </div>
                  {/* <div className="calculatedprice">
                                <div className="calculatedprice1">${aPriceArray[index]}</div>
                                <div className="calculatedprice2">${bPriceArray[index]}</div>
                            </div> */}
                </div>
                <div className="editRemove">
                  <button onClick={() => handleRemoveButton(product.productCode)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Summary">
          <CartOrderSummary
            toggleCheckoutBtn={handleCheckoutClick}
            shipping={5.99}
            tax={0}
            total={total}
          />
        </div>
      </div>

      <div className="text1">Related Products</div>
      {/* <div className="contentfooter"> */}


        {/* <div className="contentfooter1">
          <p>Need Help? Call Us.</p>
          <p className="number">(866) 822-3670</p>
          <p>Monday - Friday</p>
          <p>7:30am - 4:30pm PST</p>
        </div>
        <div className="contentfooter2">
          <p>We stand behind every product we make.</p>
          <div className="contentfooterimg">
            <img src={imgg} alt="" className="footerimg" />
            <img src={imgg} alt="" className="footerimg" />
            <img src={imgg} alt="" className="footerimg" />
            <img src={imgg} alt="" className="footerimg" />
            <img src={imgg} alt="" className="footerimg" />
            <img src={imgg} alt="" className="footerimg" />
            <img src={imgg} alt="" className="footerimg" />
          </div>
        </div> */}
      {/* </div> */}

      <div className="cartproductCard">
        <button onClick={handlePrev} className="arrow-button">
          <span className="arrow-text">
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
        </button>
        {dummyproducts
          .slice(currentIndex, currentIndex + 4)
          .map((product, index) => (
            <CartProductCard key={index} product={product} />
          ))}
        <button onClick={handleNext} className="arrow-button">
          <span className="arrow-text">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>

      {smallScreen ? (
        <div className="RespFooterCart">
          <Footer />
          <div className="StickyCheckoutBtn">
            <button onClick={handleCheckoutClick} className="StickyRoundButton">
              <span className="locksymbol">
                <FontAwesomeIcon icon={faLock} />
              </span>
              Checkout
            </button>
            <p style={{ marginTop: "2%", fontSize: "12px" }}>
              By placing your order, you agree to our <u>Terms & Conditions</u>.
            </p>
          </div>
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default Cart;
