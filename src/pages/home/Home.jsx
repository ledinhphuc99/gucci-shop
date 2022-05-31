import React from "react";
import Helmet from "../../components/Helmet";
import HeroSlider from "../../components/heroslider/HeroSlider";
import "./home.scss";
import banner6 from "../../assets/images/banners/banner_6.jpg";
import banner7 from "../../assets/images/banners/banner_7.jpg";
import banner8 from "../../assets/images/banners/banner_8.jpg";
import banner9 from "../../assets/images/banners/banner_9.jpg";
import banner10 from "../../assets/images/banners/banner_10.jpg";
import banner11 from "../../assets/images/banners/banner_11.jpg";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import {
    heroSliderDataBanner,
} from "../../assets/fake-data/hero-slider";
import productData from "../../assets/fake-data/products";
import ProductCard from "../../components/productcart/ProductCard";
import Grid from "../../components/Grid";
const Home = () => {
  return (
    <Helmet title="home">
      <HeroSlider
        data={heroSliderDataBanner}
        control={true}
        auto={true}
        timeout={5000}
      />
      <Section>
        <SectionTitle>In Character with Jungjae Lee</SectionTitle>

        <SectionBody>
          <p>
            The House’s Global Brand Ambassador stars in a series of images and
            a video in which he shifts between two different worlds, going in
            and out of character and showcasing the versatility of menswear
            styles from the Gucci Love Parade collection.
          </p>
        </SectionBody>
      </Section>
      <img className="banner-img" src={banner6} alt="" />
      <Section>
        <SectionTitle>Tailoring</SectionTitle>

        <SectionBody>
          <Grid col={5} mdCol={3} smCol={1} gap={1}>
            {productData.getProducts(5).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.img1}
                img02={item.img2}
                name={item.title}
                link={item.link}
                price={item.price}
                icon={item.icon}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <img className="banner-img" src={banner7} alt="" />
      <Section>
        <SectionTitle>Preppy</SectionTitle>

        <SectionBody>
          <Grid col={5} mdCol={3} smCol={1} gap={1}>
            {productData.getAllProducts().map((item, index) => (
              <ProductCard
                key={index}
                img01={item.img1}
                img02={item.img2}
                name={item.title}
                link={item.link}
                price={item.price}
                icon={item.icon}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <img className="banner-img" src={banner8} alt="" />
      <Section>
        <SectionTitle>Evening</SectionTitle>

        <SectionBody>
          <Grid col={5} mdCol={3} smCol={1} gap={1}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.img1}
                img02={item.img2}
                name={item.title}
                link={item.link}
                price={item.price}
                icon={item.icon}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <img className="banner-img" src={banner9} alt="" />
      <Section>
        <SectionTitle>Fashion</SectionTitle>

        <SectionBody>
          <Grid col={5} mdCol={3} smCol={1} gap={1}>
            {productData.getProducts(10).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.img1}
                img02={item.img2}
                name={item.title}
                link={item.link}
                price={item.price}
                icon={item.icon}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <img className="banner-img" src={banner10} alt="" />
      <div className="content">
        <div className="content-text">
        <h2 className="content-text__title">STRAIGHT FIT SUIT</h2>
        <p className="content-text__description">A contemporary men's
        tailored suit with a relaxed silhouette. Designed with round shoulders
        and a slightly oversize lapel, the single-breasted jacket has a half
        canvas construction and is combined with straight-leg pants.</p>
        </div>
        <img className="banner-img content-image" src={banner11} alt="" />
      </div>
    </Helmet>
  );
};

export default Home;
