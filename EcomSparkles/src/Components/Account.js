import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";
import { Modal, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import your Footer component
const AccountPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div class="link-bar__wrapper">
        <ul class="link-bar__linklist list--unstyled">
          <li class="link-bar__link-item">
            <a
              href="/account"
              class="link-bar__link link--animated text--underlined"
            >
              Orders
            </a>
          </li>

          <li class="link-bar__link-item">
            <Link to="/account/address" class="link-bar__link link--animated">
              Addresses
            </Link>
          </li>

          <li class="link-bar__link-item">
            <a
              href="/account/logout"
              class="link-bar__link link--animated text--subdued"
              data-no-instant=""
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="user-account order-list">
        <div className="content-container small-container">
          <div className="page-header small-header standalone-header">
            <div className="header-text-container">
              <h1 className="section-heading h4">
                Orders <span className="order-count">0</span>
              </h1>
              <p className="subdued-text">
                You have not placed any orders yet.
              </p>

              <div className="action-btn-wrapper">
                <Link to="/category/All Products" className="primary-btn">
                  Start shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
