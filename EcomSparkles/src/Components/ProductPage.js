import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import "./ProductPage.css"
import img1 from './claybarkit.webp';
import img2 from './claybarkit.webp';
import img3 from './claybarkit.webp';
import imgP1 from './wax.webp';
import imgP2 from './wax1.webp';
import imgP3 from './wax2.webp';
import imgP4 from './wax3.webp';
import imgP5 from './wax4.webp';
import imgP6 from './wax5.webp';
import imgP7 from './wax6.webp';
import { useNavigate } from "react-router-dom";
import ReviewsPP from "./ReviewsPP";
import PageSections from "./PageSections";
import Footer from "./Footer";
import ViewItem from "./ViewItem";

const productData = {
  name: "Product Name",
  images: [
    imgP1,
    imgP2,
    imgP3,
    imgP4,
    imgP5,
    imgP6,
    imgP7
  ],
  ratings: {
    reviews: 50, // Number of reviews
    rating: 5 // Average rating
  },
  price: {
    sale: 79.99,
    old: 99.99,
    discount: 30
  },
  productCode: "ABC123",
  sizes: [
    {
      name: "Size 1 (10 OZ)",
      image: imgP1
    },
    {
      name: "Size 2 (16 OZ)",
      image: imgP6
    },
    {
      name: "Size 3 (32 OZ)",
      image: imgP7
    }
  ],
  stockStatus: "In Stock" // or "Out of Stock"
};

const dummyProduct = {
    FeatureContent: "These are features",
    ApplyContent: "This is how to apply content",
    FAQContent: "This is FAQ content"
  }

const ProductPage = () => {

  const navigate = useNavigate();
  const { productName, id } = useParams();

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // MAKE IT ASYNC AND LOAD YOUR DATA HERE
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loading-container">
  //       <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo" className="logo" />
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }
    const handleProductItemClick = (Pname) => {
      console.log(`Clicked on ${Pname}`);
      navigate(`/Products/${Pname}`);
    };
    const products = [
        {
          title: 'Product 1',
          description: 'This is the description of the product',
          image: img1,
          oldprice: '$20.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 2',
          description: 'This is the description of the product',
          image: img2,
          oldprice: '$10.00',
          newprice: 'From $0.00',
        },
        {
          title: 'Product 3',
          description: 'This is the description of the product',
          image: img3,
          oldprice: '$19.00',
          newprice: 'From $0.00',
        },
        {
            title: 'Product 4',
            description: 'This is the description of the product',
            image: img3,
            oldprice: '$19.00',
            newprice: 'From $0.00',
          }
      ]

      
    return (
    <div>
      <Navbar />
      <div className="product-display">
      <h2>Home /  {productName} </h2>
      </div>
      <ViewItem productData={productData} id={id} />
      <div className="Section-Container">
        <PageSections content = {dummyProduct}/>
      </div>
      <div className="FBW">
        <div className="FBW-headingWrapper">
            <h1 className="FBW-heading">
            Frequently Bought With
            </h1>
            <div className="d-flexPP">
            {products.map((product, index) => (
            <div key={index} onClick={() => handleProductItemClick(product.title)} className="product-cardPP">
            <div className="card-body">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <h4 className="card-title">{product.title}</h4>
              <p className="card-description">{product.description}</p>
              <div className="price">
                <p className="newprice">{product.newprice}</p>
                <p className="oldprice">{product.oldprice}</p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
        </div>
      </div>

      <div className="ReviewsPP-wrapper">
      <ReviewsPP count = '271'/>
      </div>
      
   

     <Footer />

    </div>
  );
};

export default ProductPage;