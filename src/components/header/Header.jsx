import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import classnames from "classnames/bind";
import styles from "./header.scss";
import { Link, useLocation } from "react-router-dom";

const cx = classnames.bind(styles);

const mainNav = [
  {
    display: "HOME",
    path: "/",
  },
  {
    display: "PRODUCT",
    path: "/catalog",
  },
  {
    display: "CHILDREN",
    path: "/children",
  },
  {
    display: "+61 1300492212",
    icon:<i class='bx bxs-phone'></i>,
    path: "#",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const acctiveNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const handleScroll = () => {
    if (document.body.scroll > 80 || document.documentElement.scrollTop > 0) {
      headerRef.current.classList.add("shrink");
    } else {
      headerRef.current.classList.remove("shrink");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");
  return (
    <div className={cx("header")} ref={headerRef}>
      <div className="container">
        <div className={cx("header__logo")}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={cx("header__menu")}>
          <div
            className={cx("header__menu__mobile__toggle")}
            onClick={menuToggle}
          >
            <i className="bx bx-menu-alt-left" ></i>
            <span>MENU</span>
          </div>
          <div className={cx("header__menu__left")} ref={menuLeft}>
            <div
              className={cx("header__menu__left__close")}
              onClick={menuToggle}
            >
              <i className="bx bx-chevron-left"></i>
              
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={cx(
                  `header__menu__item header__menu__left__item ${
                    index === acctiveNav ? "active" : ""
                  }`
                )}
                onClick={menuToggle}
              >
                {item.icon}
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className={cx("header__menu__right")}>
            <div className={cx("header__menu__item header__menu__right__item")}>
            <i class='bx bx-heart'></i>
            </div>
            <div className={cx("header__menu__item header__menu__right__item")}>
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className={cx("header__menu__item header__menu__right__item")}>
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
