import React from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid";
import classnames from "classnames/bind";
import styles from "./footer.scss";
const cx = classnames.bind(styles);

const footerAboutLinks = [
  {
    display: "About Gucci",
    path: "/about",
  },
  {
    display: "Gucci Garden",
    path: "/about",
  },
  {
    display: "Gucci Equilibrium",
    path: "/about",
  },
  {
    display: "Code of Ethics",
    path: "/about",
  },
  {
    display: "Careers",
    path: "/about",
  },
  {
    display: "Legal Notices",
    path: "/about",
  },
  {
    display: "Privacy & Cookie Policy",
    path: "/about",
  },
  {
    display: "Corporate Information",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Contact Us",
    path: "/about",
  },
  {
    display: "Email Unsubscribe",
    path: "/about",
  },
  {
    display: "FAQs",
    path: "/about",
  },
  {
    display: "Payment Options",
    path: "/about",
  },
  {
    display: "Shipping & Delivery",
    path: "/about",
  },
  {
    display: "FAReturns & ExchangesQs",
    path: "/about",
  },
  {
    display: "Product Care",
    path: "/about",
  },
  {
    display: "Sitemap",
    path: "/about",
  },
];
const footerSocialNetworkLinks = [
  {
    display: "Facebook",
    path: "https://www.facebook.com/GUCCI/",
    icon: <i className="bx bxl-facebook"></i>,
  },
  {
    display: "Twiter",
    path: "https://twitter.com/gucci",
    icon: <i className="bx bxl-twitter"></i>,
  },
  {
    display: "instagarm",
    path: "https://www.instagram.com/gucci/",
    icon: <i className="bx bxl-instagram-alt"></i>,
  },
  {
    display: "Youtube",
    path: "https://www.youtube.com/c/gucci",
    icon: <i className="bx bxl-youtube"></i>,
  },
  {
    display: "Gucci Podcast",
    path: "https://www.facebook.com/GUCCI/",
    icon: <i className="bx bx-podcast"></i>,
  },
  {
    display: "Pinterest",
    path: "https://www.pinterest.com/gucci/_created/",
    icon: <i class="bx bxl-pinterest-alt"></i>,
  },
];
const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className="container">
        <Grid col={5} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className={cx("footer__title")}>EXCLUSIVE SERVICES</div>
            <div className={cx("footer__content")}>
              <p>Exclusive Online Services</p>
              <p>Same-Day Delivery</p>
              <p>Gucci Osteria da Massimo Bottura</p>
              <p>Book An Appointment</p>
            </div>
          </div>

          <div>
            <div className={cx("footer__title")}>MAY WE HELP YOU?</div>
            <div className={cx("footer__content")}>
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className={cx("footer__title")}>THE COMPANY</div>
            <div className={cx("footer__content")}>
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className={cx("footer__title")}>FIND US ON</div>
            <div className={cx("footer__content")}>
              {footerSocialNetworkLinks.map((item, index) => (
                <div key={index} className={cx("footer__network")}>
                {item.icon}
                <p className={cx("footer__network__title")}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={cx("footer__title")}>SIGN UP FOR GUCCI UPDATES</div>
            <div className={cx("footer__content")}>
              <p>
                By entering your email address below, you consent to receiving
                our newsletter with access to our latest collections, events and
                initiatives. More details on this are provided in our <Link to='/'> Privacy
                Policy</Link>
              </p>
              <input type="text" placeholder="Email Address" />
              <button><i class='bx bx-chevron-right'></i></button>
             <div className={cx("footer__locator")}>
             <label>STORE LOCATOR</label>
             <input type="text" placeholder="City,Region,Country" />
              <button><i class='bx bx-chevron-right'></i></button>
             </div>
             <div className={cx("footer__Group")}></div>
            </div>
          </div>
        </Grid>
        <p>© 2016-2020 Guccio Gucci S.p.A. - All rights reserved. SIAE LICENCE SIAE LICENCE # 2294/I/1936 and 5647/I/1936</p>
      </div>
    </footer>
  );
};

export default Footer;
