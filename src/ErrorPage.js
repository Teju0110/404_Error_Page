import React, { useState } from "react";
import "./ErrorPage.css";
import img from "./ghost_img.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const ErrorPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="errorPage">
      <div className="errorPageContainer">
        <div className="navBar">
          <div className="navBar_Logo">
            <h1>MyCompany</h1>
          </div>
          <div className="navBar_Items">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
          </div>
        </div>
        <div className="navBarSmall_menu">
          <h1>MyCompany</h1>
          {toggleMenu == false ? (
            <>
              <GiHamburgerMenu
                className="menuIcon"
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            </>
          ) : (
            <div className="navBarSmall_menuItems">
              <AiOutlineClose
                className="menuIcon"
                style={{marginLeft:"100px"}}
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <div  className="">
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Contact</h2>
              </div>
            </div>
          )}
        </div>
        <div className="errorPage_main">
          <div className="errorPageContent">
            <h1>Error 404</h1>
            <p>Hey Buddy</p>
            <h1 className="errorPageContentInfo">We can't seem to find the page you are looking for</h1>
            <button>Go Home</button>
          </div>
          <div className="errorPageImage">
            <img src={img} alt="ghost" />
            <div className="imgShadow" />
          </div>
        </div>
        <div className="errorPageFooter">
          <h3>(554) 987-654 | info@MyCompany.com</h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
