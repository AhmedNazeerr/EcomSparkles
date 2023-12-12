import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import img1 from "./Pic1.jpg";
import img2 from "./Pic2.jpg";
import location from "./location.png";
import { FaShoppingCart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronRight, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import SubCat from "./SubCat";
import SearchBar from "./SearchBar.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { storeActions } from "../Features/slice";


const Navbar = ({shouldExecute = true}) => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  // const [subCategories, setSubCategories] = useState([])
  const user = useSelector(state => state.user)
  const itemInCart = useSelector(state => state.itemInCart)
  const isSmallScreen = () => window.innerWidth < 950;

  const [isSticky, setIsSticky] = useState(false);
  const [smallScreen, setSmallScreen] = useState(isSmallScreen());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("dummy");
      const sticky = header.offsetTop;
  
      if (window.pageYOffset > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    if (shouldExecute) {
      window.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (shouldExecute) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [shouldExecute]);
  

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

  // const menuItems = [
  //   "All Products",
  //   "Exterior Care",
  //   "Interior Care",
  //   "Accessories",
  //   "Lubricants",
  //   "Filters",
  //   "Wholesaler & Distributor"
  // ];

//   const dropdownContents = {
//     "All Products" : <SubCat
//     images={[img2]}
//     categories={subCategories}
//   />,
//     "Exterior Care" : <SubCat
//     images={[img1]}
//     categories={subCategories}
//   />,
//     "Interior Care" : <SubCat
//     images={[img1]}
//     categories={subCategories}
//   />,
//     "Accessories" : <SubCat
//     images={[img1]}
//     categories={subCategories}
//   />,
//     "Lubricants" : <SubCat
//     images={[img1]}
//     categories={subCategories}
//   />,
//     "Filters": <SubCat
//     images={[img1]}
//     categories={subCategories}
//   />,
//   "Wholesaler & Distributor": <SubCat
//   images={[img1]}
//   categories={subCategories}
// />,
//   };

  const handleMenuItemClick = (item, idx) => {
    console.log(`Clicked on ${item}`);
    navigate(`/category/${item.trim().toLowerCase()}/${idx+1}`);
  };

  const handleCartIconClick = () => {
    console.log(`Clicked on Cart`);
    navigate(`/CartPage`);
  };

  const handleLoginIconClick = () => {
    console.log(`Clicked on Login`);
    navigate(`/Login`);
  };
  const handleProfileIconClick = () => {
    navigate(`/account`);
  };
  const handleLogoutIconClick = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/auth/logout')
    if(response.status === 200) {
      localStorage.removeItem('token')
      dispatch(storeActions.resetUser())
      navigate(`/`);
    }
  };
  // function getDropdownContent(item) {
  //   return dropdownContents[item.name];
  //     const response = await axios.get(`http://localhost:5000/api/v1/products/subcatg/${item.id}`)
  //     if(response.status === 200) {
  //       console.log(response)
  //     }
  // }
  const getCategories = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/products/catg')
    if(response.status === 200) {
      setCategories(response.data.categories)
    }
  }
  useEffect(() => {
    getCategories() 
  }, [])

  return (
    <>
      {smallScreen ? (
        <div id="FullNavbar" className={isSticky ? "stickyRes" : ""}>
          <nav className="navbar">
            <div className="navbar-left">
              <div className="hamburger-icon" onClick={toggleMenu}>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{
                    fontSize: "24px",
                    color: "#24245a",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className="navbar-middle">
                <img
                  onClick={() => navigate("/")}
                  src={logo}
                  id="Lg"
                  alt="Your Logo"
                  className={`logo ${isSticky ? "logoS" : ""}`}
                />
            </div>
            <div className="navbar-right">
              <div className="child2" id="crt">
                <button onClick={handleCartIconClick} className="cart-btn">
                  <FaShoppingCart
                    style={{ fontSize: "24px", color: "#24245a" }}
                  />
                  <div className="cart-btn-text"></div>
                </button>
              </div>
            </div>
          </nav>
          {isMenuOpen ? (
      <Modal size="sm" animation={false} show={isMenuOpen} onHide={toggleMenu} dialogClassName={`custom-modal ${isMenuOpen ? '' : 'hidden'}`}>    <Modal.Header>
      <div className="modal-header-content">
        <div className="modal-title">
          <span>Main Menu</span>
        </div>
        <div className="close-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} style={{ fontSize: "24px", color: "#24245a" }} />
        </div>
      </div>
    </Modal.Header>
    <Modal.Body>
      <ul className="menu-list">
        {categories.map((item, index) => (
          <li key={index}>
            {item.name}
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "12px", color: "#24245a", cursor: "pointer" }}
              onClick={() => handleMenuItemClick(item)}
            />
          </li>
        ))}
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button className="login-button" onClick={handleLoginIconClick}>
        <FontAwesomeIcon icon={faUser} style={{ fontSize: "24px", color: "#24245a" }} />
        <span className="button-text">Log in</span>
      </Button>
      <Button className="store-button">
        <FontAwesomeIcon icon={faMapMarker} style={{ fontSize: "24px", color: "#24245a" }} />
        <span className="button-text">FIND A STORE</span>
      </Button>
    </Modal.Footer>
  </Modal>
          ) :
          null}

    {!isSticky && (
      <div className="search-bar_rs">
        <SearchBar />
      </div>
    )}
    <div id ="dummy"></div>
        </div>
      ) : (
        <div id="FullNavbar" className={isSticky ? "sticky" : ""}>
          <nav className="navbar">
            <div className="navbar-left">
                <img
                  onClick={() => navigate("/")}
                  src={logo}
                  alt="Your Logo"
                  className={`logo ${isSticky ? "logoS" : ""}`}
                />
            </div>
            <div>
              <Link to="/">
                <img src={location} alt="Your location" className="location" />
              </Link>
              <div className="location-btn-text">FIND A STORE</div>
            </div>
            <div className="navbar-middle">
              <SearchBar />
            </div>
            <div className="navbar-right">
              {!Object.keys(user).length ? <div className="child1">
                <button className="login-btn" onClick={handleLoginIconClick}>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "48px", color: "#24245a" }}
                  />
                  <div className="login-btn-text">Log in</div>
                </button>
              </div>: 
              <div className="child1">
              <button className="login-btn" onClick={handleProfileIconClick}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: "48px", color: "#24245a" }}
                />
                <div className="login-btn-text">Profile</div>
              </button>
            </div>}
              <div className="child2" style={{width: 'fit-content', position: 'relative'}}>
                <div style={{backgroundColor: 'red', width: '25px', height: '25px', borderRadius: '100%', color:"white", fontWeight: 'bold', display: "flex", alignItems: "center", justifyContent: "center", position: 'absolute', right: '-7px', top: '-7px'}}>{itemInCart}</div>
                <button className="cart-btn" onClick={handleCartIconClick}>
                  <FaShoppingCart
                    style={{ fontSize: "48px", color: "#24245a" }}
                  />
                  <div className="cart-btn-text">Cart</div>
                </button>
              </div>
              {Object.keys(user).length !== 0 && <div className="child1">
                <button className="login-btn" onClick={handleLogoutIconClick}>
                  <i className="fa-solid fa-right-from-bracket" style={{ fontSize: "48px", color: "#24245a" }}></i>
                  <div className="login-btn-text">Logout</div>
                </button>
              </div>}
            </div>
          </nav>
          <div id="navmenu" className="navbar-menu">
            {categories && categories.map((item, idx) => (
              <div
                key={idx}
                className="menu-item"
                onClick={() => handleMenuItemClick(item.name, idx)}
              >
                {item.name}
                {/* <div className="dropdown-menu">
                {getDropdownContent(item)}
                </div> */}
              </div>
            ))}
          </div>
          <div id ="dummy"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
