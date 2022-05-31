import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./heroSlider.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const HeroSlider = (props) => {
  const data = props.data;

  const timeOut = props.timeOut ? props.timeOut : 3000;

  const [activeSlide, setActiveSlide] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut, props]);
  return (
    <div className={cx(`hero-slider`)}>
      {data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {props.control ? (
        <div className={cx("hero-slider__control")}>
          <button
            className={cx("hero-slider__control__btn")}
            onClick={prevSlide}
          >
            <i className="bx bx-chevron-left hero-slider__control__btn__left"></i>
          </button>
          <div className={cx("hero-slider__control__item")}></div>
          <button
            className={cx(
              "hero-slider__control__btn hero-slider__control__btn__right"
            )}
            onClick={nextSlide}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      ) : null}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeout: PropTypes.number,
  
};

const HeroSliderItem = (props) => (
  <div className={cx(`hero-slider__item ${props.active ? "active" : ""}`)}>
    <div className={cx("hero-slider__item__image")}>
      <img src={props.item.img} alt="" />
      <div
        className={cx(`hero-slider__item__info ${props.active ? "show" : ""}`)}
      >
        <h1 className={cx("hero-slider__item__info__title")}>
          <p className={cx("title")}>{props.item.title}</p>
          <span className={cx("subtitle")}>{props.item.subtitle}</span>
        </h1>
        <div className={cx("hero-slider__item__info__btn")}>
          <Link to={props.item.path}>
            <button className={cx("hero-slider__btn")}>
              {props.item.button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSlider;
