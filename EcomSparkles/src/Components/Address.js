import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Address() {
    const [Default, setDefault] = useState({firstName: 'first', lastName: 'last', state: 'PJB', country: 'Pakistan'})
  return (
    <div>
      <Navbar />
      <div
        style={{
          fontFamily: "Bebas Neue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10rem",
          marginTop: "4rem",
        }}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.7rem",
              fontWeight: "bold",
            }}
          >
            Addresses
          </div>
          <div
            style={{
              width: "fit-content",
              display: "flex",
              border: "1px solid gray",
            }}
          >
            <div
              style={{
                borderRight: "1px solid gray",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                paddingRight: "9rem",
                paddingLeft: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h6
                style={{
                  fontSize: "0.85rem",
                  wordSpacing: "2px",
                  letterSpacing: "0.5px",
                }}
              >
                DEFAULT ADDRESS
              </h6>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', gap:'0.3rem'}}>
                <p>{Default.firstName}</p>
                <p>{Default.lastName}</p>
                </div>
                <p style={{marginTop: '-20px'}}>{Default.state}</p>
                <p style={{marginTop: '-20px'}}>{Default.country}</p>
              </div>
              <div style={{ display: "flex", gap: "2rem" }}>
                <p style={{ cursor: "pointer" }}>Edit</p>
                <p style={{ cursor: "pointer" }}>Delete</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "whitesmoke",
                paddingLeft: "5rem",
                paddingRight: "5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-location-dot"></i>
              <p style={{ cursor: "pointer" }}>Add a new address</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
