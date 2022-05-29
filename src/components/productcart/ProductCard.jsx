import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./productCard.scss";

const cx = classNames.bind(styles);
const ProductCard = (props) => {
  return (
    <div className={cx("product-card")}>
      <Link to={`/catalog/${props.slug}`}>
        <div className={cx("product-card__heart")}>
          <i className={props.icon}></i>
        </div>
        <div className={cx("product-card__image")}>
          <img src={props.img02} alt="" />
          <img src={props.img01} alt="" />
        </div>
        <h3 className={cx("product-card__name")}>{props.name}</h3>
        <div className={cx("product-card__price")}>{props.price}</div>
        <div className={cx("product-card__btn")}>
          <button>
            {props.link}
          </button>
            <i className="bx bx-cart"></i>
        </div>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
